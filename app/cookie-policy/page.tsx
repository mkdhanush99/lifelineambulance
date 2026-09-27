import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/cookie-policy/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Cookie Policy", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Life Line Ambulance Service",
  description:
    "How this website uses cookies, and how you can control them, including the consent choices that will apply if analytics or advertising cookies are added.",
  path: PATH,
  noindex: true,
});

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" breadcrumb={BREADCRUMB}>
      <LegalSection title="1. What cookies are">
        <p>
          Cookies are small text files a website can store in your browser to remember information
          about your visit.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookie categories used on this site">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Necessary</strong> — required for the website&rsquo;s basic functionality. These
            don&rsquo;t require consent.
          </li>
          <li>
            <strong>Analytics</strong> — would help us understand how the site is used, if added.
          </li>
          <li>
            <strong>Advertising / marketing</strong> — would support ad measurement, such as Google
            Ads conversion tracking, if added.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. The consent banner and your choice">
        <p>
          On your first visit, this site shows a banner where you can accept all cookies, reject
          optional ones, or manage Analytics and Advertising individually. Your choice is saved in
          your browser&rsquo;s local storage (not a tracking cookie itself) so we don&rsquo;t ask
          again on later visits. You can clear this by clearing your browser&rsquo;s site data for
          this website.
        </p>
      </LegalSection>

      <LegalSection title="4. Current state of analytics and advertising">
        <p>
          Even where you accept Analytics or Advertising cookies, those cookies are only set once
          we&rsquo;ve configured an active Google Analytics or Google Ads account for this site.
          Until then, accepting these categories has no effect — no analytics or advertising
          cookies are actually placed.
        </p>
      </LegalSection>

      <LegalSection title="5. Controlling cookies in your browser">
        <p>
          Most browsers let you view, delete or block cookies through their settings. Blocking all
          cookies may affect how some websites function.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact us">
        <p>For any question about this policy, call {PHONE_DISPLAY}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
