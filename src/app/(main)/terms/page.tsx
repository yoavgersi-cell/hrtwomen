import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of HRT Women (hrtwomen.com), including our informational-only nature, affiliate disclosure, and limitation of liability.",
  alternates: { canonical: "https://www.hrtwomen.com/terms" },
};

const UPDATED = "September 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-[#191919]">Terms of Service</h1>
      <p className="mb-6 text-sm text-gray-400">Last updated: {UPDATED}</p>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of hrtwomen.com
          (the &quot;Site&quot;), operated by HRT Women (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By using the Site, you agree to these Terms. If you do not agree, please do
          not use the Site.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Informational Purpose Only - Not Medical Advice</h2>
        <p>
          HRT Women is an independent comparison and information publisher. All content is provided
          for general informational purposes only and is <strong>not medical advice</strong>. We are not
          a doctor, pharmacy, or telehealth provider, and using the Site does not create a
          doctor-patient relationship. Menopause hormone therapy is a prescription treatment with
          risks and potential side effects, and whether it is appropriate for you is a decision for a
          licensed clinician. Always consult a licensed healthcare professional before
          making any medical decision or starting, stopping, or changing a treatment.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Affiliate Disclosure</h2>
        <p>
          The Site contains affiliate links. If you click a link to a provider and take a qualifying
          action, we may earn a commission at no additional cost to you. Our rankings and reviews are
          determined independently - see our{" "}
          <Link href="/disclaimer" className="font-semibold text-[#A8285E] hover:underline">disclosure</Link>{" "}
          and{" "}
          <Link href="/how-we-rank" className="font-semibold text-[#A8285E] hover:underline">ranking methodology</Link>.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">No Warranty on Accuracy</h2>
        <p>
          We work to keep information accurate and current, but provider offerings, pricing, and
          policies change frequently. The Site is provided &quot;as is&quot; without warranties of any
          kind. Always confirm current details - especially pricing and treatment terms - directly on
          the provider&apos;s own website before making a decision.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Intellectual Property</h2>
        <p>
          The content, design, and branding on this Site are owned by HRT Women or its licensors and
          are protected by applicable intellectual-property laws. You may not copy, reproduce, or
          redistribute our content without permission. Third-party names and logos are the property of
          their respective owners and are used for identification only.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Third-Party Websites</h2>
        <p>
          The Site links to third-party websites we do not control. We are not responsible for the
          content, products, services, or privacy practices of those sites. Accessing them is at your
          own risk and subject to their terms.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, HRT Women and its operators will not be liable for
          any indirect, incidental, or consequential damages arising from your use of the Site or
          reliance on its content, including decisions made about treatments or providers. Your use of
          the Site is at your own risk.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Eligibility</h2>
        <p>The Site is intended for adults aged 18 and older.</p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Changes take effect when posted, and continued
          use of the Site means you accept the revised Terms.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Contact</h2>
        <p>
          Questions about these Terms? Reach us via our{" "}
          <Link href="/contact" className="font-semibold text-[#A8285E] hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
