import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - FTC Disclosure & Affiliate Information",
  description:
    "FTC disclosure, affiliate relationship details, medical disclaimer, and revenue model transparency for hrtwomen.com.",
  alternates: {
    canonical: "https://www.hrtwomen.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-[#191919]">Disclaimer</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-[#191919]">
          FTC Disclosure
        </h2>
        <p>
          In accordance with the Federal Trade Commission guidelines, HRT Women
          discloses that this website contains affiliate links. When you click
          on a link and make a purchase or sign up for a service, we may receive
          a commission at no additional cost to you.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Affiliate Relationships
        </h2>
        <p>
          HRT Women participates in affiliate programs with various menopause and hormone
          therapy providers and telehealth platforms. This means we may earn
          referral fees when visitors click through our links and complete
          qualifying actions. These relationships help support the operation of
          this website.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Editorial Independence
        </h2>
        <p>
          Our affiliate relationships do not influence our rankings or reviews.
          Providers are evaluated based on objective criteria including clinician
          expertise, treatment range, pricing transparency, and user feedback. We are committed to
          providing honest, independent assessments regardless of compensation.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Medical Disclaimer
        </h2>
        <p>
          The content on HRT Women is for general information purposes only and is not
          intended as medical advice. Hormone replacement therapy is a prescription
          treatment that carries potential risks and side effects, including an increased
          risk of blood clots, stroke, and certain cancers for some women. Whether HRT is
          appropriate for you is a decision for a licensed healthcare professional -
          always consult one before starting, stopping, or changing any medication.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Revenue Model
        </h2>
        <p>
          HRT Women generates revenue primarily through affiliate commissions.
          When you use our links to visit a provider&apos;s website and take a
          qualifying action (such as scheduling a consultation or making a
          purchase), we may receive compensation. This model allows us to
          provide free, accessible comparisons to our visitors.
        </p>
      </div>
    </div>
  );
}
