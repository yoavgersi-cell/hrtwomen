import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ComparisonCard } from "@/components/comparison-card";
import { SocialProofBand, providerVisitStat } from "@/components/social-proof-bubble";
import { Sidebar } from "@/components/sidebar";
import { EditorialContent } from "@/components/editorial-content";
import { FaqAccordion } from "@/components/faq-accordion";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { getConfig } from "@/lib/config-store";
import { CONTENT_LAST_UPDATED } from "@/lib/config";

export const revalidate = 60;

const SITE_URL = "https://www.hrtwomen.com";

export const metadata: Metadata = {
  title: {
    absolute: "Online HRT for Women: Best Menopause Providers of 2026, Compared",
  },
  description:
    "Online HRT for women, compared: the best menopause and perimenopause telehealth providers of 2026, ranked by treatment options, pricing, insurance and clinician support.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Online HRT for Women: Best Menopause Providers of 2026, Compared",
    description:
      "Compare the best HRT options of 2026 - top online providers ranked by treatment, price, support and value.",
    url: SITE_URL,
    type: "website",
  },
};

export default async function HomePage() {
  const config = await getConfig();
  const { providerOrder, positions } = config.ranking;

  const displayList = providerOrder
    .map((id, index) => {
      const provider = config.providers.find((p) => p.id === id);
      if (!provider) return null;
      const position = positions[index] || positions[positions.length - 1];
      return {
        id: provider.id,
        name: provider.name,
        tagline: provider.tagline,
        logo: provider.logo,
        smallLogo: provider.smallLogo,
        highlights: provider.highlights,
        affiliateUrl: provider.affiliateUrl,
        ctaText: provider.ctaText,
        rank: index + 1,
        rating: position.score,
        ratingLabel: position.label,
        starRating: position.starRating,
        badge: position.badge,
      };
    })
    .filter(Boolean) as Array<{
      id: string;
      name: string;
      tagline: string;
      logo: string;
      smallLogo: string;
      highlights: string[];
      affiliateUrl: string;
      ctaText: string;
      rank: number;
      rating: number;
      ratingLabel: string;
      starRating?: number;
      badge?: string;
    }>;

  const sidebarProviders = providerOrder
    .map((id) => config.providers.find((p) => p.id === id))
    .filter(Boolean) as typeof config.providers;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const author = config.experts?.[0];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Online HRT for Women: Best Menopause Providers of 2026, Compared",
    description:
      "Compare treatment options, pricing, medical support and overall value across the top online HRT providers of 2026.",
    url: SITE_URL,
    inLanguage: "en-US",
    datePublished: "2026-06-01",
    dateModified: CONTENT_LAST_UPDATED,
    isPartOf: { "@type": "WebSite", name: "HRT Women", url: SITE_URL },
    about: { "@type": "Thing", name: "Menopause HRT providers" },
    ...(author && {
      author: { "@type": "Organization", name: author.name, url: `${SITE_URL}/about` },
    }),
    ...pageReviewSchema("/"),
    publisher: {
      "@type": "Organization",
      name: "HRT Women",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: displayList.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/reviews/${product.id}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection
        backgroundImageUrl={config.hero.backgroundImageUrl}
        imageAlt={config.hero.imageAlt}
        updatedLabel={config.hero.updatedLabel}
        h1={config.hero.h1}
        h2={config.hero.h2}
        description={config.hero.description}
      />

      {/* E-E-A-T byline strip - medical review status for a YMYL topic */}
      <section className="mx-auto max-w-[1200px] px-4 pt-3">
        <MedicalReviewBar path="/" className="max-w-[760px]" />
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pt-4 pb-6">
        <div className="flex gap-6 items-start">
          <div className="min-w-0 flex-1 space-y-4">
            {displayList.map((product, idx) => (
              <div key={product.id}>
                <ComparisonCard product={product} socialProof={config.cardSocialProof} />
                {idx === 0 && (
                  <SocialProofBand number={providerVisitStat(product.id)} text={`visited ${product.name} this month`} />
                )}
              </div>
            ))}
          </div>
          <Sidebar config={config.sidebar} providers={sidebarProviders} />
        </div>
      </section>

      <EditorialContent />
      <FaqAccordion items={config.faqs} />
    </>
  );
}
