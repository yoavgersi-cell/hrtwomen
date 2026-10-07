import Link from "next/link";
import { ComparisonCard } from "@/components/comparison-card";
import type { SiteConfig } from "@/lib/config";

interface TopProviderCardsProps {
  config: SiteConfig;
  /** How many ranked providers to show (defaults to the top 3). */
  limit?: number;
  /** Eyebrow heading above the cards. */
  title?: string;
  /** Optional "matching quiz" link shown under the cards. Omit to hide it. */
  quizHref?: string;
  /** Prefix for internal review links (empty on the single-site build). */
  linkPrefix?: string;
  /** pageType/sourceFlow passed through to CTA tracking. */
  pageType?: "listing" | "review" | "battle" | "quiz_results";
  sourceFlow?: "main_comparison" | "provider_review" | "battle_page" | "matching_flow";
}

/**
 * The homepage's ranked comparison cards, packaged as a drop-in block. Builds
 * the same displayList the homepage does (ranking.providerOrder + positions)
 * and renders the real <ComparisonCard> for the top N providers - so any page
 * that wants "our top-rated providers" gets the full card (logo, bullets,
 * rating badge, Visit Site CTA) instead of a thin link list.
 */
export function TopProviderCards({
  config,
  limit = 3,
  title = "Top-Rated Providers",
  quizHref,
  linkPrefix = "",
  pageType = "listing",
  sourceFlow = "main_comparison",
}: TopProviderCardsProps) {
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
    .filter(Boolean)
    .slice(0, limit) as Array<{
      id: string;
      name: string;
      tagline: string;
      logo: string;
      highlights: string[];
      affiliateUrl: string;
      ctaText: string;
      rank: number;
      rating: number;
      ratingLabel: string;
      starRating?: number;
      badge?: string;
    }>;

  if (displayList.length === 0) return null;

  return (
    <div className="my-8">
      {title && (
        <p className="mb-3 text-[13px] font-bold uppercase tracking-wider text-gray-500">
          {title}
        </p>
      )}
      <div className="space-y-4">
        {displayList.map((product) => (
          <ComparisonCard
            key={product.id}
            product={product}
            socialProof={config.cardSocialProof}
            linkPrefix={linkPrefix}
            pageType={pageType}
            sourceFlow={sourceFlow}
          />
        ))}
      </div>
      {quizHref && (
        <Link
          href={quizHref}
          className="mt-4 block text-center text-[13px] font-semibold text-[#A8285E] hover:underline"
        >
          Not sure? Take our free matching quiz →
        </Link>
      )}
    </div>
  );
}
