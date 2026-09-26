import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAnalytics } from "@/components/google-analytics";
import { hreflangLanguages } from "@/lib/regions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.hrtwomen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HRT Women - Compare the Best Online HRT Providers for Women",
    template: "%s | HRT Women",
  },
  description:
    "Compare the best online menopause and HRT treatments of 2026 - licensed menopause telehealth providers ranked by treatment options, price, clinician expertise and real support.",
  keywords: [
    "HRT for women",
    "online HRT",
    "menopause treatment online",
    "hormone replacement therapy",
    "perimenopause treatment",
    "estrogen therapy",
    "menopause telehealth",
    "best online HRT providers",
  ],
  openGraph: {
    title: "HRT Women - Compare the Best Online HRT Providers for Women",
    description:
      "Independent, side-by-side comparisons of top online menopause and HRT providers - ranked on treatment, price and support.",
    type: "website",
    siteName: "HRT Women",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "HRT Women - Compare the Best Online HRT Providers for Women",
    description:
      "Independent, side-by-side comparisons of top online menopause and HRT providers.",
  },
  other: {
    "geo.region": "US",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
    "content-language": "en-US",
  },
  alternates: {
    canonical: SITE_URL,
    languages: hreflangLanguages(SITE_URL, "/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HRT Women",
              url: SITE_URL,
              areaServed: { "@type": "Country", name: "United States" },
              description:
                "Independent guides and provider comparisons for online menopause HRT - expert reviews, pricing research, and side-by-side comparisons.",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HRT Women",
              url: SITE_URL,
              description:
                "Compare trusted online menopause and HRT providers side by side.",
            }),
          }}
        />
        <MetaPixel />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
