// ───── The product catalog ─────
// Shopping-style product entries for the HRT product carousel. Every entry is
// a real product the provider sells, with an image taken from the provider's
// own product creative (supplied by the site operator - never generated) and
// a price that matches the verified figures used across the site (see the
// pricing notes at the top of src/lib/seeds/hrt.ts). A null image renders the
// provider-logo tile fallback; never invent a product shot.
//
// Honesty rules for this file:
//  - fdaStatus is set only when verified (Winona: tablets, patch and
//    progesterone capsules FDA-approved; body creams compounded). Gala's
//    FDA-approved vs compounded status is unresolved, so it is left unset.
//  - No provider marketing claims ("natural", "plant-derived", "balance") in
//    names or descriptions - plain product facts only.
//  - Prices carry their condition in priceNote and an as-of date in
//    PRODUCT_PRICES_AS_OF.

export type CatalogProduct = {
  id: string;
  providerId: string;
  /** Product title, e.g. "Estrogen Patch". */
  name: string;
  /** Short form label shown as the image chip, e.g. "Patch", "Body cream". */
  form: string;
  /** Verified regulatory status; omit when not confirmed. */
  fdaStatus?: "fda-approved" | "compounded";
  /** One factual sentence: what it is and what it's used for. */
  description: string;
  /** Headline price, e.g. "$89". */
  price: string;
  /** Shown before the price, e.g. "From" for a starting price. */
  pricePrefix?: string;
  /** Shown after the price; defaults to "/mo". */
  priceUnit?: string;
  /** Struck-through regular price when the headline is promotional. */
  regularPrice?: string;
  /** The honest condition attached to the price. */
  priceNote: string;
  shipping: string;
  image: string | null;
};

/** Month the catalog prices were last checked (shown under the carousel). */
export const PRODUCT_PRICES_AS_OF = "October 2026";

export const PRODUCT_CATALOG: CatalogProduct[] = [
  // ── Winona ── prices from Winona's product cards (operator screenshot,
  // Oct 2026), matching the verified $89 / $149 figures in hrt.ts.
  {
    id: "winona-estrogen-progesterone-cream",
    providerId: "winona",
    name: "Estrogen + Progesterone Body Cream",
    form: "Body cream",
    fdaStatus: "compounded",
    description:
      "A compounded body cream combining estrogen and progesterone, applied to the skin for whole-body menopause symptoms.",
    price: "$89",
    priceNote: "Monthly subscription - physician review, messaging and shipping included",
    shipping: "Free shipping",
    image: "/products/winona-estrogen-progesterone-cream.webp",
  },
  {
    id: "winona-estrogen-cream",
    providerId: "winona",
    name: "Estrogen Body Cream",
    form: "Body cream",
    fdaStatus: "compounded",
    description:
      "A compounded estrogen body cream applied to the skin for hot flashes, night sweats and other whole-body symptoms.",
    price: "$89",
    priceNote: "Monthly subscription - physician review, messaging and shipping included",
    shipping: "Free shipping",
    image: "/products/winona-estrogen-cream.webp",
  },
  {
    id: "winona-estrogen-patch",
    providerId: "winona",
    name: "Estrogen Patch",
    form: "Patch",
    fdaStatus: "fda-approved",
    description:
      "An FDA-approved estradiol skin patch that delivers a steady dose of estrogen through the skin for hot flashes and night sweats.",
    price: "$149",
    priceNote: "Monthly subscription - physician review, messaging and shipping included",
    shipping: "Free shipping",
    image: "/products/winona-estrogen-patch.webp",
  },

  // ── Gala ── Gala does not publish per-product prices; every product is
  // covered by one plan advertised from $79/month (verified in hrt.ts).
  {
    id: "gala-estradiol",
    providerId: "gala",
    name: "Estradiol (Pill or Patch)",
    form: "Pill or patch",
    description:
      "Estradiol, the main estrogen your body stops making, as a daily pill or a skin patch for hot flashes, sleep and mood symptoms.",
    price: "$79",
    pricePrefix: "From",
    priceNote: "One flat plan - clinician, check-ins, medication and shipping included",
    shipping: "Shipping included",
    image: "/products/gala-estradiol.webp",
  },
  {
    id: "gala-progesterone",
    providerId: "gala",
    name: "Progesterone",
    form: "Oral capsule",
    description:
      "Progesterone capsules that protect the uterine lining when you take estrogen and still have a uterus.",
    price: "$79",
    pricePrefix: "From",
    priceNote: "Covered by the same flat plan - not billed separately",
    shipping: "Shipping included",
    image: "/products/gala-progesterone.webp",
  },
  {
    id: "gala-vaginal-estradiol",
    providerId: "gala",
    name: "Vaginal Estradiol",
    form: "Local treatment",
    description:
      "Low-dose vaginal estradiol that treats vaginal dryness and urinary symptoms locally rather than whole-body symptoms.",
    price: "$79",
    pricePrefix: "From",
    priceNote: "Covered by the same flat plan - not billed separately",
    shipping: "Shipping included",
    image: "/products/gala-vaginal-estradiol.webp",
  },
];

/** Numeric value for sorting ("$89" → 89). */
export function productPriceValue(p: CatalogProduct): number {
  return Number(p.price.replace(/[^0-9.]/g, "")) || 9999;
}
