// One-off SEO/technical QA crawler for the built site. Not a project
// dependency — run with `node scripts/audit.mjs` against a running
// `next start` server. Regex-based extraction is fine here since we control
// every byte of the HTML being parsed (no third-party markup).
const BASE = process.env.AUDIT_BASE_URL ?? "http://localhost:3100";

const LEGAL_ROUTES = [
  "/privacy-policy/",
  "/terms-and-conditions/",
  "/cancellation-refund-policy/",
  "/cookie-policy/",
  "/data-protection/",
  "/disclaimer/",
];

async function getSitemapRoutes() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  return { xml, routes: locs };
}

function extract(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : null;
}

function extractAll(html, regex) {
  return [...html.matchAll(regex)].map((m) => m[1]);
}

function findInternalLinks(html) {
  const hrefs = extractAll(html, /<a\s[^>]*href="([^"]+)"/g);
  return hrefs
    .filter((h) => h.startsWith("/") && !h.startsWith("//"))
    .map((h) => h.split("#")[0].split("?")[0])
    .filter((h) => h.length > 0);
}

const titles = new Map();
const descriptions = new Map();
const issues = [];
const allDiscoveredLinks = new Set();

async function auditPage(path) {
  const url = `${BASE}${path}`;
  const res = await fetch(url);
  const html = await res.text();

  if (res.status !== 200) {
    issues.push(`[${path}] status ${res.status}, expected 200`);
    return;
  }

  const title = extract(html, /<title>(.*?)<\/title>/);
  const description = extract(html, /<meta name="description" content="([^"]*)"/);
  const canonical = extract(html, /<link rel="canonical" href="([^"]*)"/);
  const robotsMeta = extract(html, /<meta name="robots" content="([^"]*)"/);
  const h1s = extractAll(html, /<h1[^>]*>/g);
  const jsonLdBlocks = extractAll(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  const ogTags = ["og:title", "og:description", "og:url", "og:type", "og:site_name"].map((p) => ({
    prop: p,
    present: html.includes(`property="${p}"`) || html.includes(`property='${p}'`),
  }));
  const twitterCard = html.includes('name="twitter:card"');
  const viewport = html.includes('name="viewport"');
  const langAttr = extract(html, /<html[^>]*lang="([^"]*)"/);
  const imgTags = [...html.matchAll(/<img\s[^>]*>/g)].map((m) => m[0]);
  const imgsMissingAlt = imgTags.filter((tag) => !/\salt="/.test(tag));

  if (!title) issues.push(`[${path}] missing <title>`);
  else {
    if (titles.has(title)) issues.push(`[${path}] duplicate title with ${titles.get(title)}: "${title}"`);
    titles.set(title, path);
  }

  if (!description) issues.push(`[${path}] missing meta description`);
  else {
    if (descriptions.has(description))
      issues.push(`[${path}] duplicate meta description with ${descriptions.get(description)}`);
    descriptions.set(description, path);
  }

  if (!canonical) issues.push(`[${path}] missing canonical link`);
  else {
    const canonicalPath = new URL(canonical).pathname;
    if (canonicalPath !== path) issues.push(`[${path}] canonical points to ${canonicalPath}, not self`);
  }

  if (h1s.length === 0) issues.push(`[${path}] no <h1> found`);
  if (h1s.length > 1) issues.push(`[${path}] multiple <h1> tags (${h1s.length})`);

  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(block);
    } catch {
      issues.push(`[${path}] invalid JSON-LD block`);
    }
  }
  if (jsonLdBlocks.length === 0) issues.push(`[${path}] no JSON-LD found`);

  for (const { prop, present } of ogTags) {
    if (!present) issues.push(`[${path}] missing ${prop}`);
  }
  if (!twitterCard) issues.push(`[${path}] missing twitter:card`);
  if (!viewport) issues.push(`[${path}] missing viewport meta tag`);
  if (langAttr !== "en-IN") issues.push(`[${path}] html lang is "${langAttr}", expected "en-IN"`);
  if (imgsMissingAlt.length > 0) issues.push(`[${path}] ${imgsMissingAlt.length} <img> missing alt`);

  const isLegal = LEGAL_ROUTES.includes(path);
  if (isLegal && robotsMeta !== "noindex, follow")
    issues.push(`[${path}] legal page missing noindex (got "${robotsMeta}")`);
  if (!isLegal && robotsMeta) issues.push(`[${path}] non-legal page unexpectedly has robots meta: "${robotsMeta}"`);

  for (const link of findInternalLinks(html)) allDiscoveredLinks.add(link);
}

async function main() {
  const { routes } = await getSitemapRoutes();
  console.log(`sitemap.xml: ${routes.length} routes\n`);

  const allRoutes = [...new Set([...routes, ...LEGAL_ROUTES])];

  for (const path of allRoutes) {
    await auditPage(path);
  }

  // Broken-link pass: every internal link discovered while crawling must 200.
  const checked = new Set();
  for (const link of allDiscoveredLinks) {
    if (checked.has(link)) continue;
    checked.add(link);
    try {
      const res = await fetch(`${BASE}${link}`);
      if (res.status !== 200) issues.push(`broken internal link: ${link} -> ${res.status}`);
    } catch (e) {
      issues.push(`broken internal link: ${link} -> fetch error ${e.message}`);
    }
  }

  // robots.txt sanity
  const robotsRes = await fetch(`${BASE}/robots.txt`);
  const robotsTxt = await robotsRes.text();
  if (!robotsTxt.includes("Sitemap:")) issues.push("robots.txt missing Sitemap: line");
  if (!/Allow:\s*\/\s*$/m.test(robotsTxt)) issues.push("robots.txt missing Allow: / rule");

  // 404 sanity
  const notFoundRes = await fetch(`${BASE}/this-route-does-not-exist/`);
  if (notFoundRes.status !== 404) issues.push(`custom 404 route returned ${notFoundRes.status}, expected 404`);

  console.log(`Crawled ${allRoutes.length} sitemap+legal routes.`);
  console.log(`Checked ${checked.size} unique internal links for broken-link pass.`);
  console.log();

  if (issues.length === 0) {
    console.log("✅ No issues found.");
  } else {
    console.log(`❌ ${issues.length} issue(s):\n`);
    for (const issue of issues) console.log(" - " + issue);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
