import type { Metadata } from "next";
import Link from "next/link";
import { STATES } from "@/lib/states";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";

export const revalidate = 60;

const SITE_URL = "https://www.hrtwomen.com";

export const metadata: Metadata = {
  title: { absolute: "Online Menopause HRT by State (2026) | HRT Women" },
  description:
    "Get menopause hormone therapy online in your state. Compare licensed telehealth providers for estradiol, progesterone, and non-hormonal options - pick your state to see who serves you.",
  alternates: { canonical: `${SITE_URL}/online-hrt` },
  openGraph: {
    title: "Online Menopause HRT by State (2026)",
    description: "Compare licensed online menopause HRT providers that serve your state.",
    url: `${SITE_URL}/online-hrt`,
    type: "website",
  },
};

export default function OnlineHrtIndex() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/online-hrt`,
    url: `${SITE_URL}/online-hrt`,
    name: "Online Menopause HRT by State",
    isPartOf: { "@type": "WebSite", name: "HRT Women", url: SITE_URL },
    ...pageReviewSchema("/online-hrt"),
  };

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <h1 className="mb-4 text-3xl font-bold text-[#191919]">Online Menopause HRT by State</h1>
      <MedicalReviewBar path="/online-hrt" className="mb-5 max-w-[760px]" compact />
      <p className="mb-4 max-w-2xl text-[16px] leading-[1.7] text-gray-700">
        Menopause and perimenopause hormone therapy is widely available online through licensed telehealth
        providers - with a health-history intake, a video or asynchronous visit with a licensed clinician, and
        prescriptions sent to a pharmacy or delivered to your door. Because clinicians are licensed state by
        state, choose your state below to see which providers serve your area.
      </p>
      <p className="mb-8 max-w-2xl text-[15px] leading-[1.7] text-gray-600">
        Prefer to jump straight in? See our{" "}
        <Link href="/" className="font-semibold text-[#A8285E] hover:underline">full provider comparison</Link>{" "}
        or read the{" "}
        <Link href="/articles/is-hrt-safe" className="font-semibold text-[#A8285E] hover:underline">
          guide to HRT safety
        </Link>.
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
        {STATES.map((s) => (
          <Link
            key={s.slug}
            href={`/online-hrt/${s.slug}`}
            className="block rounded-md px-3 py-2 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-[#A8285E]"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
