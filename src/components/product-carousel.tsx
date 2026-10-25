import { Truck, ShieldCheck, FlaskConical } from "lucide-react";
import {
  PRODUCT_CATALOG,
  PRODUCT_PRICES_AS_OF,
  productPriceValue,
  type CatalogProduct,
} from "@/lib/product-catalog";
import { ProviderCta } from "@/components/provider-cta";
import type { Provider } from "@/lib/config";
import { AFFILIATE_PROVIDER_IDS } from "@/lib/config";

// ───── Product carousel ─────
// Shopping-style HRT product cards in a scroll-snap strip: product image,
// form chip, title, verified FDA status, price with its honest condition,
// provider and shipping. Everything is server-rendered text (readable by
// search and AI crawlers), and the whole card is the affiliate CTA.
//
// Schema: one ItemList of Product + Offer per page (withSchema on ONE
// carousel only). Deliberately NO aggregateRating / review - re-publishing
// Trustpilot scores as product rating markup is a review-snippet policy risk
// (same decision as the review pages).

function SupplementBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[10.5px] font-bold text-gray-700 ring-1 ring-gray-200">
      Dietary supplement - not HRT
    </span>
  );
}

function FdaBadge({ status }: { status: CatalogProduct["fdaStatus"] }) {
  if (status === "fda-approved")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-bold text-emerald-800 ring-1 ring-emerald-200">
        <ShieldCheck className="h-3 w-3" strokeWidth={2.5} />
        FDA-approved
      </span>
    );
  if (status === "compounded")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10.5px] font-bold text-amber-800 ring-1 ring-amber-200">
        <FlaskConical className="h-3 w-3" strokeWidth={2.5} />
        Compounded
      </span>
    );
  return null;
}

function ProductCard({
  product,
  provider,
  position,
  pageType,
}: {
  product: CatalogProduct;
  provider: Provider;
  position: number;
  pageType: "listing" | "review" | "battle";
}) {
  return (
    <article className="flex w-[220px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md sm:w-[232px]">
      <ProviderCta
        href={provider.affiliateUrl}
        providerName={provider.name}
        providerSlug={provider.id}
        position={position}
        pageType={pageType}
        sourceFlow="main_comparison"
        className="flex flex-1 flex-col"
      >
        <div className="relative flex h-[160px] items-center justify-center border-b border-gray-100 bg-[#FBF6F8] p-3">
          <span className="absolute left-2 top-2 z-10 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#A8285E] ring-1 ring-[#F3D3E0]">
            {product.form}
          </span>
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={`${provider.name} ${product.name}`}
              loading="lazy"
              width={220}
              height={160}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={provider.logo} alt={`${provider.name} logo`} className="max-h-[36px] max-w-[120px] object-contain" />
          )}
        </div>

        <div className="flex flex-1 flex-col p-3.5">
          <h3 className="text-[14px] font-bold leading-snug text-[#191919]">{product.name}</h3>
          <p className="mt-0.5 text-[12px] font-medium text-gray-600">by {provider.name}</p>
          {product.kind === "supplement" ? (
            <div className="mt-2">
              <SupplementBadge />
            </div>
          ) : (
            product.fdaStatus && (
              <div className="mt-2">
                <FdaBadge status={product.fdaStatus} />
              </div>
            )
          )}
          <p className="mt-2 text-[12px] leading-snug text-gray-600 line-clamp-3">{product.description}</p>
          <div className="mt-2.5 flex items-baseline gap-1.5">
            {product.pricePrefix && (
              <span className="text-[11px] font-semibold text-gray-500">{product.pricePrefix}</span>
            )}
            <span className="text-[18px] font-extrabold tracking-tight text-[#191919] [font-variant-numeric:tabular-nums]">
              {product.price}
            </span>
            {(product.priceUnit ?? "/mo") && (
              <span className="text-[11px] font-semibold text-gray-500">{product.priceUnit ?? "/mo"}</span>
            )}
            {product.regularPrice && (
              <span className="text-[12px] font-medium text-gray-500 line-through [font-variant-numeric:tabular-nums]">
                {product.regularPrice}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-[11px] leading-snug text-gray-500">{product.priceNote}</p>
          <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[11.5px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              {product.shipping}
            </span>
            <span className="font-semibold text-[#A8285E]">View →</span>
          </div>
        </div>
      </ProviderCta>
    </article>
  );
}

export function ProductCarousel({
  providers,
  title = "Shop HRT treatments",
  subtitle = "Real products and published prices from licensed online menopause providers. Prescription required - a clinician reviews your health history first.",
  highlightProviderIds = [],
  onlyProviderIds,
  pageType = "listing",
  withSchema = false,
  pageUrl,
}: {
  providers: Provider[];
  title?: string;
  subtitle?: string;
  /** These providers' products sort first (e.g. a battle's two contenders). */
  highlightProviderIds?: string[];
  /** Restrict to specific providers (e.g. a review page's own provider). */
  onlyProviderIds?: string[];
  pageType?: "listing" | "review" | "battle";
  /** Emit Product+Offer ItemList schema. Enable on ONE carousel per page. */
  withSchema?: boolean;
  /** Absolute page URL, required for schema offer URLs. */
  pageUrl?: string;
}) {
  const byId = new Map(providers.map((p) => [p.id, p]));
  const highlight = new Set(highlightProviderIds);

  let items = PRODUCT_CATALOG.filter(
    (p) => byId.has(p.providerId) && AFFILIATE_PROVIDER_IDS.includes(p.providerId),
  );
  // Supplements only appear in provider-scoped carousels, never in the
  // general HRT ones (homepage, general articles).
  if (onlyProviderIds) items = items.filter((p) => onlyProviderIds.includes(p.providerId));
  else items = items.filter((p) => p.kind !== "supplement");
  // HRT products before supplements within a provider.
  const kindRank = (p: CatalogProduct) => (p.kind === "supplement" ? 1 : 0);
  // Provider ranking order first (the site's editorial order), then price.
  const rank = new Map(providers.map((p, i) => [p.id, i]));
  items = items.sort((a, b) => {
    const ha = highlight.has(a.providerId) ? 0 : 1;
    const hb = highlight.has(b.providerId) ? 0 : 1;
    if (ha !== hb) return ha - hb;
    const ra = rank.get(a.providerId) ?? 99;
    const rb = rank.get(b.providerId) ?? 99;
    if (ra !== rb) return ra - rb;
    if (kindRank(a) !== kindRank(b)) return kindRank(a) - kindRank(b);
    return productPriceValue(a) - productPriceValue(b);
  });

  if (items.length === 0) return null;

  const schema =
    withSchema && pageUrl
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: title,
          itemListElement: items
            .filter((p) => p.image)
            .map((p, i) => {
              const provider = byId.get(p.providerId)!;
              const freeShipping = /free|included/i.test(p.shipping);
              return {
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Product",
                  name: `${provider.name} ${p.name}`,
                  description: `${p.description} ${p.pricePrefix ? `${p.pricePrefix} ` : ""}${p.price}${p.priceUnit ?? "/mo"} (${p.priceNote}).${p.kind === "supplement" ? "" : " Prescription required."}`,
                  image: `https://www.hrtwomen.com${p.image}`,
                  brand: { "@type": "Brand", name: provider.name },
                  category: p.kind === "supplement" ? "Dietary supplement" : "Menopause hormone therapy",
                  offers: {
                    "@type": "Offer",
                    price: String(productPriceValue(p)),
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: pageUrl,
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      applicableCountry: "US",
                      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
                    },
                    ...(freeShipping && {
                      shippingDetails: {
                        "@type": "OfferShippingDetails",
                        shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "USD" },
                        shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
                      },
                    }),
                  },
                },
              };
            }),
        }
      : null;

  return (
    <section aria-label={title}>
      {schema && schema.itemListElement.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <h2 className="mb-1.5 text-[20px] font-bold text-[#191919]">{title}</h2>
      <p className="mb-4 max-w-[680px] text-[13.5px] leading-relaxed text-gray-500">{subtitle}</p>
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
        <div className="flex snap-x snap-mandatory gap-3">
          {items.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              provider={byId.get(p.providerId)!}
              position={i + 1}
              pageType={pageType}
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-[11.5px] text-gray-500">
        Prices as published by each provider, checked {PRODUCT_PRICES_AS_OF}; confirm at checkout.
        &quot;FDA-approved&quot; and &quot;Compounded&quot; labels appear only where we have verified them.
        {items.some((p) => p.kind === "supplement") &&
          " Dietary supplements are sold without a prescription, are not hormone therapy, and are not FDA-approved to treat menopause symptoms."}
      </p>
    </section>
  );
}
