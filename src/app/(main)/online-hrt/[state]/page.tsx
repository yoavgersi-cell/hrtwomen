import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { ComparisonCard } from "@/components/comparison-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { ExpertByline } from "@/components/expert-byline";
import { getConfig } from "@/lib/config-store";
import { CONTENT_LAST_UPDATED } from "@/lib/config";
import { STATES, STATE_BY_SLUG } from "@/lib/states";

export const revalidate = 60;

const SITE_URL = "https://www.hrtwomen.com";

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = STATE_BY_SLUG.get(state);
  if (!s) return {};
  const url = `${SITE_URL}/online-hrt/${s.slug}`;
  const title = `Online Menopause HRT in ${s.name} (2026)`;
  const description =
    `Compare licensed online menopause HRT providers serving ${s.name}. Telehealth visits with ${s.abbr}-licensed clinicians for estradiol, progesterone, vaginal estrogen, and non-hormonal options.`;
  return {
    title: { absolute: `${title} | HRT Women` },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const s = STATE_BY_SLUG.get(state);
  if (!s) return notFound();

  const config = await getConfig();
  const { positions } = config.ranking;

  // Providers available in this state = ranking order, minus any that exclude it.
  const availableIds = config.ranking.providerOrder.filter((id) => {
    const p = config.providers.find((pr) => pr.id === id);
    return p && !(p.excludedStates ?? []).includes(s.abbr);
  });

  const displayList = availableIds
    .map((id, index) => {
      const provider = config.providers.find((p) => p.id === id)!;
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
    });

  const topName = displayList[0]?.name ?? "our top-rated provider";
  const topSlug = displayList[0]?.id ?? "";
  const [c0, c1, c2] = s.cities;
  const citiesPhrase = s.cities.length >= 3 ? `${c0}, ${c1}, and ${c2}` : s.cities.join(" and ");

  const faqs = [
    {
      question: `Is online HRT available in ${s.name}?`,
      answer: `Yes. Licensed telehealth providers can evaluate women across ${s.name} - from ${citiesPhrase} to smaller towns and rural areas - for menopause and perimenopause symptoms and, when appropriate, prescribe hormone therapy. A clinician licensed in ${s.name} reviews your health history before anything is prescribed.`,
    },
    {
      question: `Do I need to visit a clinic in ${s.name} in person?`,
      answer: `Usually not. Many women in ${s.name} can complete the process online - a health-history intake, a video or messaging visit with a licensed clinician, and a prescription sent to a pharmacy or delivered. You should still keep up with routine screenings such as mammograms and pelvic exams, and some situations (like unexpected bleeding) need in-person care.`,
    },
    {
      question: `How do I get my HRT prescription filled in ${s.name}?`,
      answer: `Depending on the provider, your prescription is either shipped to your ${s.name} address or sent to a local pharmacy of your choice. Check each provider's current fulfillment options - and whether it serves ${s.name} - before you sign up.`,
    },
    {
      question: `How much does online HRT cost in ${s.name}?`,
      answer: `Cost depends on the provider's membership or visit fees, the medication and form prescribed (patch, pill, gel, cream, or vaginal estrogen), and whether the provider accepts your insurance - some do, some are cash-pay only. Compare current pricing on each provider's own site before you decide.`,
    },
  ];

  const author = config.experts?.[0];
  const reviewer = config.experts?.[1];
  const url = `${SITE_URL}/online-hrt/${s.slug}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Online Menopause HRT in ${s.name} (2026)`,
    description: `Compare licensed online menopause HRT providers serving women in ${s.name}.`,
    url,
    inLanguage: "en-US",
    dateModified: CONTENT_LAST_UPDATED,
    isPartOf: { "@type": "WebSite", name: "HRT Women", url: SITE_URL },
    about: { "@type": "Thing", name: `Menopause hormone therapy in ${s.name}` },
    ...(author && { author: { "@type": "Organization", name: author.name, url: `${SITE_URL}/about` } }),
    ...(reviewer && { reviewedBy: { "@type": "Organization", name: reviewer.name } }),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Online Menopause HRT by State", item: `${SITE_URL}/online-hrt` },
      { "@type": "ListItem", position: 3, name: s.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        backgroundImageUrl=""
        imageAlt=""
        updatedLabel="Last Updated: September 2026"
        h1={`Online Menopause HRT in ${s.name}`}
        h2={`Compare licensed telehealth menopause providers serving ${s.name}`}
        description={`Clinician-guided hormone therapy for perimenopause and menopause in ${s.name} - estradiol, progesterone, vaginal estrogen, and non-hormonal options. Compare your options below.`}
      />

      {(author || reviewer) && (
        <section className="mx-auto max-w-[1200px] px-4 pt-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {author && <ExpertByline expert={author} label="Written by" />}
            {reviewer && <ExpertByline expert={reviewer} label="Reviewed by" />}
          </div>
        </section>
      )}

      {/* Breadcrumb */}
      <section className="mx-auto max-w-[1200px] px-4 pt-4">
        <nav className="text-[13px] text-gray-500">
          <Link href="/" className="hover:text-[#A8285E] hover:underline">Home</Link>
          <span className="px-1.5">/</span>
          <Link href="/online-hrt" className="hover:text-[#A8285E] hover:underline">By State</Link>
          <span className="px-1.5">/</span>
          <span className="text-[#191919]">{s.name}</span>
        </nav>
      </section>

      {/* Provider comparison */}
      <section className="mx-auto max-w-[900px] px-4 pt-6 pb-6">
        <div className="space-y-4">
          {displayList.map((product) => (
            <ComparisonCard key={product.id} product={product} socialProof={config.cardSocialProof} />
          ))}
        </div>
      </section>

      {/* Valuable, state-specific editorial */}
      <div className="mx-auto max-w-[1200px] px-4 pb-12 text-[16px] leading-[1.7] text-gray-800">
        <hr className="mb-8 border-gray-200" />

        <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
          Getting Menopause HRT in {s.name}
        </h2>
        <p className="mb-4">
          If you live in {s.name} - whether in {citiesPhrase}, or a smaller community across {s.region} -
          you no longer have to wait months for a menopause-savvy clinician to get help with hot flashes, sleep
          problems, or other perimenopause and menopause symptoms. Licensed online providers can evaluate you and,
          where appropriate, prescribe treatment by telehealth. Below is how it works, how prescriptions are filled
          in {s.name}, and how to choose.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          How Online Menopause Care Works in {s.name}
        </h2>
        <ol className="mb-4 ml-5 list-decimal space-y-2">
          <li><strong>Share your symptoms and health history.</strong> You complete an online intake covering your cycle, symptoms, and personal and family history (such as clots, stroke, or breast cancer).</li>
          <li><strong>Meet a licensed clinician.</strong> Providers work with clinicians licensed in {s.name}; they weigh benefits and risks and decide whether hormone therapy, a non-hormonal option, or an in-person referral is right for you.</li>
          <li><strong>Start treatment and follow up.</strong> If prescribed, your medication ships to your {s.name} address or goes to a local pharmacy, with follow-up visits to adjust your dose as needed.</li>
        </ol>
        <p className="mb-4">
          Not sure where to start? {topName} is our current top pick - read our{" "}
          {topSlug ? (
            <Link href={`/reviews/${topSlug}`} className="font-semibold text-[#A8285E] hover:underline">
              full {topName} review
            </Link>
          ) : (
            <Link href="/reviews" className="font-semibold text-[#A8285E] hover:underline">in-depth reviews</Link>
          )}
          , see the full{" "}
          <Link href="/" className="font-semibold text-[#A8285E] hover:underline">HRT comparison</Link>, or
          browse our{" "}
          <Link href="/articles/estrogen-patch-vs-pill" className="font-semibold text-[#A8285E] hover:underline">
            estrogen patch vs. pill
          </Link>{" "}
          guide.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          Prescriptions &amp; Pharmacy Access Across {s.name}
        </h2>
        <p className="mb-4">
          The providers listed above serve women in <strong>{s.name}</strong> - from busy metros like{" "}
          {c0} to rural areas far from the nearest menopause clinic. Depending on the provider, medication
          is shipped to your {s.abbr} address or sent to a local pharmacy, and refills are managed through your
          online care team. For many women in{" "}
          {s.name}, the biggest advantage is access: clinicians who focus on menopause, without a long wait for an
          appointment or time off work for every follow-up.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          Is Online HRT Legal in {s.name}?
        </h2>
        <p className="mb-4">
          Yes. Telehealth is an established, legal way to receive care in {s.name} when a licensed clinician is
          involved. Hormone therapy is prescription-only, so a clinician licensed in {s.name} must review your
          health history before anything can be prescribed - that safeguard is a feature, not a hurdle. Availability
          of a specific provider can vary by state, so the comparison above reflects options that serve {s.name}.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          {s.name} vs. Visiting a Clinic Near You
        </h2>
        <p className="mb-4">
          Searching &quot;HRT near me&quot; in {s.name} will surface local gynecologists and women&apos;s-health
          clinics, and those are a good fit for complex histories or if you prefer to be seen in person. For many
          women, online care is more convenient and can mean shorter waits - but it doesn&apos;t replace routine
          screenings with your local doctor. Not sure your symptoms are menopause-related? Start with our guide to{" "}
          <Link href="/articles/perimenopause-symptoms" className="font-semibold text-[#A8285E] hover:underline">
            perimenopause symptoms
          </Link>, and read{" "}
          <Link href="/articles/is-hrt-safe" className="font-semibold text-[#A8285E] hover:underline">
            is HRT safe?
          </Link>{" "}before you decide.
        </p>

        <p className="mt-8 text-[13.5px] text-gray-500">
          This page is general information, not medical advice. Hormone therapy is a prescription treatment with
          risks, including blood clots, stroke, and certain cancers; whether it is right for you is a decision for
          you and a licensed clinician. Always confirm
          current pricing, availability, and terms directly with the provider.
        </p>
      </div>

      <FaqAccordion items={faqs} />
    </>
  );
}
