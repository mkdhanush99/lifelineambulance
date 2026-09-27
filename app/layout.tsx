import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { CustomCursor } from "@/components/CustomCursor";
import { JsonLd } from "@/components/JsonLd";
import { ConsentProvider } from "@/components/ConsentProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Ambulance Service in Hyderabad | Life Line Ambulance Service",
    description:
      "Life Line Ambulance Service provides ambulance transport in Hyderabad for emergencies, hospital transfers, ICU, ventilator and outstation journeys. Call 9951244266.",
    path: "/",
  }),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  // Unset until the client supplies a Search Console verification code.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ConsentProvider>
          <MotionConfig reducedMotion="user">
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </MotionConfig>
          <MobileCallBar />
          <CustomCursor />
          <CookieConsent />
          <Analytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
