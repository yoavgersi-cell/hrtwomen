import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Award, BookOpen, Search, BarChart3 } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About HRT Women - Our Mission, Team & Review Methodology",
  description:
    "Learn how hrtwomen.com independently ranks and reviews online menopause and HRT providers. Our editorial methodology, review process, medical advisory approach, and commitment to unbiased comparisons.",
  alternates: {
    canonical: "https://www.hrtwomen.com/about",
  },
};

export default async function AboutPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const teamSchema = experts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "hrtwomen.com",
    url: "https://www.hrtwomen.com",
    employee: experts.map((e) => ({
      "@type": "Person",
      name: e.credentials ? `${e.name}, ${e.credentials}` : e.name,
      jobTitle: e.role,
      description: e.bio,
    })),
  } : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {teamSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />}
      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            About HRT Women
          </h1>
          <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-gray-500">
            We help women make informed decisions about menopause and perimenopause
            hormone therapy by independently comparing telehealth providers on pricing,
            clinical support, and treatment options.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our Mission</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Online menopause care has grown rapidly, with a growing number of telehealth providers
            now offering prescription hormone therapy like estradiol and progesterone online. For women,
            this creates a confusing landscape of options with varying pricing, treatment range,
            clinician expertise, and follow-up support.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            HRT Women exists to simplify this decision. We independently research,
            compare, and review every major provider so you can find the right fit for your
            needs, budget, and privacy - without spending hours doing the research yourself.
          </p>
        </section>

        {/* What we do - icons grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-[22px] font-bold text-[#191919]">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Search, title: "Research Providers", desc: "We evaluate every major telehealth HRT provider on pricing, treatment options, medical oversight, and patient experience." },
              { icon: BarChart3, title: "Compare Side by Side", desc: "Our comparison tools let you see exactly how providers differ on the factors that matter most to you." },
              { icon: BookOpen, title: "Educate Patients", desc: "Our articles and guides help you understand menopause symptoms, HRT options, risks, costs, and what to expect from care." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C2366E]/5">
                  <Icon className="h-5 w-5 text-[#A8285E]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1 text-[15px] font-bold text-[#191919]">{title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial team */}
        <ExpertTeam experts={experts} />

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How We Rank Providers</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            Our rankings are based on a weighted evaluation across six core categories.
            We update our assessments regularly as providers change their pricing, services,
            and treatment offerings.
          </p>
          <div className="space-y-4">
            {[
              { category: "Medical Credibility", weight: "25%", desc: "Licensed, menopause-trained clinicians, thorough intake and health history review, risk screening, and evidence-based prescribing protocols." },
              { category: "Treatment Access", weight: "20%", desc: "Range of treatments offered (estradiol patches, pills, gels and creams, progesterone, vaginal estrogen, and non-hormonal options), plus state availability." },
              { category: "Pricing & Value", weight: "20%", desc: "Total cost including membership, medication, consultations, and delivery. Pricing transparency, insurance options, and absence of hidden fees." },
              { category: "Patient Experience", weight: "15%", desc: "Intake process ease, time to first visit, platform quality, customer support responsiveness, and delivery reliability." },
              { category: "Clinical Support", weight: "10%", desc: "Ongoing follow-up visits, dose and formulation adjustments, side-effect management, and clinician messaging between visits." },
              { category: "Flexibility", weight: "10%", desc: "Membership terms, cancellation policy, ability to pause or switch treatments, and HSA/FSA acceptance." },
            ].map(({ category, weight, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="shrink-0 rounded bg-[#C2366E] px-2.5 py-1 text-[12px] font-bold text-white">{weight}</span>
                <div>
                  <p className="text-[14px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[13px] text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-[1.75] text-gray-600">
            Want the full picture? Read our detailed{" "}
            <Link href="/how-we-rank" className="font-semibold text-[#A8285E] hover:underline">
              ranking &amp; review methodology
            </Link>{" "}
            - the factors we score, where our data comes from, and how we pick winners.
          </p>
        </section>

        {/* Editorial standards */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial Standards</h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Independence.</strong> Our editorial team operates
              independently. Provider rankings and reviews are determined by our evaluation criteria,
              not by commercial relationships.
            </p>
            <p>
              <strong className="text-[#191919]">Transparency.</strong> We clearly disclose that some
              providers compensate us through affiliate partnerships. This may affect how providers are
              displayed but does not influence our ratings or review content.
            </p>
            <p>
              <strong className="text-[#191919]">Evidence-based.</strong> Our medical content references
              published clinical research, FDA information, and established medical guidelines when
              discussing hormone therapy options, their benefits, and their risks.
            </p>
            <p>
              <strong className="text-[#191919]">Regular updates.</strong> We continuously review and
              update our rankings, reviews, and articles as providers change their offerings, new clinical
              data emerges, and the market evolves.
            </p>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Users className="h-8 w-8 shrink-0 text-[#A8285E]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6</p>
                <p className="text-[12px] text-gray-500">Weighted ranking categories</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Award className="h-8 w-8 shrink-0 text-[#A8285E]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">3</p>
                <p className="text-[12px] text-gray-500">Providers independently reviewed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Shield className="h-8 w-8 shrink-0 text-[#A8285E]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6+</p>
                <p className="text-[12px] text-gray-500">Expert articles and guides published</p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Medical Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[15px] leading-[1.75] text-gray-600">
              HRT Women is not a medical provider and does not prescribe medications.
              The information on this site is for general information and comparison purposes only and
              should not replace professional medical advice. Hormone therapy is a prescription
              treatment that requires evaluation and supervision by a licensed healthcare provider, and
              it carries risks (such as blood clots, stroke, and certain cancers) that vary by individual.
              Whether HRT is appropriate for you is a decision for a licensed clinician. Individual
              results vary. Side effects may occur.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[16px] font-bold text-[#191919]">Ready to compare providers?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[44px] items-center justify-center rounded-lg bg-[#C2366E] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#A12A5A]"
            >
              Compare Providers
            </Link>
            <Link
              href="/find-your-match"
              className="inline-flex h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-[14px] font-semibold text-[#191919] transition-colors hover:bg-gray-50"
            >
              Take the Quiz
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
