import type { ArticleData } from "@/lib/config";

// Deep rewrite of /articles/estrogen-patch-vs-pill (same URL). Targets the
// route cluster in Search Console: patch vs pill, are patches safer, spray vs
// patch, patch vs cream, cost comparison. Facts checked 2026-10-25: BMJ 2019
// VTE study (Vinogradova), BMJ 2010 stroke study (Renoux), Mayo Clinic brand
// list, FDA patch-availability update, Menopause Society 2022.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  bmjVte: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6326068",
  bmjStroke: "https://www.bmj.com/content/340/bmj.c2519",
  mayo: "https://www.mayoclinic.org/drugs-supplements/estradiol-transdermal-route/description/DRG-20075306",
  fdaPatch:
    "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-update-estradiol-transdermal-patch-availability",
  nams2022: "https://doi.org/10.1097/GME.0000000000002028",
  npr: "https://www.npr.org/2026/03/10/nx-s1-5742817/menopause-hormone-therapy-shortages",
};

export const ESTROGEN_PATCH_VS_PILL: ArticleData = {
  slug: "estrogen-patch-vs-pill",
  title: "Estrogen Patch vs Pill (2026): Which Is Safer, Cheaper and Right for You?",
  description:
    "Estrogen patch vs pill compared: blood clot and stroke risk, effectiveness, side effects, cost, convenience, gels and sprays, and who should choose which form of HRT.",
  category: "Treatments",
  readTime: "22 min read",
  publishedAt: "2026-09-26",
  updatedAt: "2026-10-25",
  heroColor: "#FCE4EC",
  author: "HRT Women Editorial Team",
  keyTakeaways: [
    "Patches and pills relieve hot flashes and night sweats about equally well - the main differences are safety profile, convenience and cost.",
    "Oral estrogen passes through the liver first; in a large BMJ study, oral HRT was linked to higher blood clot risk while transdermal (skin) HRT was not.",
    "Low-dose patches were not linked to increased stroke risk in a large UK study, while oral estrogen was associated with a modest increase.",
    "Patches, gels or sprays are usually preferred for women with higher clot risk, migraine, obesity or high blood pressure; pills are often cheaper and simpler.",
    "Whichever estrogen you choose, you still need a progestogen if you have a uterus.",
  ],
  sections: [
    {
      heading: "Is an estrogen patch or pill better?",
      body: `<p><strong>Neither is better for everyone. Both relieve menopause symptoms effectively. Patches (and other skin forms) avoid the liver's first pass and are associated with lower blood clot and stroke risk in observational studies, which makes them the usual choice for women with extra risk factors. Pills are simple, familiar and often cheaper. The right choice depends on your health, preferences and budget.</strong></p>
<table><tr><th></th><th>Estrogen pill</th><th>Estrogen patch</th></tr><tr><td><strong>Symptom relief</strong></td><td>Effective</td><td>Effective</td></tr><tr><td><strong>Blood clot risk</strong></td><td>Increased in observational studies</td><td>Not increased in a large BMJ study</td></tr><tr><td><strong>Stroke risk</strong></td><td>Modest increase</td><td>Not increased at low doses in a large UK study</td></tr><tr><td><strong>How often</strong></td><td>Daily</td><td>Once or twice a week, depending on brand</td></tr><tr><td><strong>Common hassles</strong></td><td>Remembering a daily dose</td><td>Skin irritation, patches peeling off</td></tr><tr><td><strong>Cost</strong></td><td>Generic oral estradiol is often among the cheapest options</td><td>Often more expensive; supply has been tight in 2026</td></tr><tr><td><strong>Often preferred for</strong></td><td>Healthy women without extra clot or stroke risk who want simplicity</td><td>Higher clot risk, obesity, migraine, high blood pressure, smokers, gallbladder concerns</td></tr></table>
<p>This guide explains each difference in detail, covers gels, sprays and creams too, and helps you prepare for the conversation with your clinician. For the basics of hormone therapy, see <a href="/articles/what-is-hrt">What is HRT?</a></p>`,
    },
    {
      heading: "What are the different forms of estrogen for menopause?",
      body: `<p><strong>Estrogen for menopause comes as pills, skin patches, gels, sprays, vaginal rings that deliver whole-body doses, and low-dose vaginal products for local symptoms. Most modern products contain estradiol, the same estrogen the ovaries make.</strong></p>
<table><tr><th>Form</th><th>How it's used</th><th>Reaches</th><th>Examples (US brands)</th></tr><tr><td><strong>Pill</strong></td><td>Swallowed daily</td><td>Whole body, via the liver first</td><td>Generic estradiol tablets; conjugated estrogens</td></tr><tr><td><strong>Patch</strong></td><td>Stuck to the skin, changed once or twice a week</td><td>Whole body, through the skin</td><td>Climara, Vivelle-Dot, Minivelle, Alora, generics</td></tr><tr><td><strong>Gel</strong></td><td>Rubbed onto the skin daily</td><td>Whole body, through the skin</td><td>Divigel, EstroGel, Elestrin</td></tr><tr><td><strong>Spray</strong></td><td>Sprayed onto the forearm daily</td><td>Whole body, through the skin</td><td>Evamist</td></tr><tr><td><strong>Systemic vaginal ring</strong></td><td>Inserted in the vagina, replaced periodically</td><td>Whole body</td><td>Higher-dose rings</td></tr><tr><td><strong>Low-dose vaginal estrogen</strong></td><td>Cream, tablet/insert or ring</td><td>Mainly local tissues</td><td>For dryness and urinary symptoms</td></tr></table>
<p>Brand names are from the ${ext(SRC.mayo, "Mayo Clinic's estradiol transdermal listing")}; availability and formulary coverage vary. "Transdermal" means through the skin - patches, gels and sprays all work this way.</p>`,
    },
    {
      heading: "Why does the route of estrogen matter?",
      body: `<p><strong>When you swallow estrogen, it's absorbed from the gut and passes through the liver before reaching the rest of the body. This "first-pass" effect changes how the liver makes clotting factors and other proteins. Estrogen absorbed through the skin largely bypasses this step.</strong></p>
<p>That difference is the main reason oral and transdermal estrogen have different risk profiles:</p>
<ul><li><strong>Clotting factors:</strong> oral estrogen increases the liver's production of proteins involved in clotting - a plausible reason for the higher blood clot risk seen with pills.</li><li><strong>Other liver proteins:</strong> oral estrogen also raises levels of proteins such as sex hormone-binding globulin, and can raise triglycerides.</li><li><strong>Gallbladder:</strong> oral estrogen is thought to increase the risk of gallbladder problems more than transdermal routes.</li><li><strong>Steadier levels:</strong> patches release estrogen continuously, avoiding the daily peaks and dips of a pill - which may help women whose migraines are triggered by hormone fluctuations.</li></ul>
<p>Both routes deliver estradiol to the same receptors in the brain, vagina and bones, which is why symptom relief is similar.</p>`,
    },
    {
      heading: "Are estrogen patches safer than pills for blood clots?",
      body: `<p><strong>The best available evidence suggests yes. In a large study published in the BMJ in 2019, oral HRT was associated with an increased risk of blood clots (venous thromboembolism), while transdermal HRT was not associated with increased risk.</strong></p>
<p>The ${ext(SRC.bmjVte, "study")}, by Vinogradova and colleagues, analysed UK primary care records of more than 80,000 women aged 40 to 79 who had a blood clot, compared with nearly 400,000 matched women who didn't. Key findings:</p>
<ul><li><strong>Oral HRT</strong> was associated with about a 58% higher risk of blood clots overall (adjusted odds ratio 1.58).</li><li>Risk varied by product: conjugated equine estrogen with medroxyprogesterone acetate had the highest risk (odds ratio 2.10), and estradiol with dydrogesterone the lowest of the oral options (1.18).</li><li><strong>Transdermal HRT</strong> was not associated with increased risk (odds ratio 0.93, with a confidence interval spanning no effect).</li></ul>
<p>The authors concluded that transdermal treatment was the safest type of HRT when blood clot risk was assessed, and that it appeared underused.</p>
<h3>The caveats</h3><ul><li>This is an observational study, so it shows association, not proof - women given patches may differ from those given pills.</li><li>The absolute risk of a blood clot in a healthy woman in her 50s is low to begin with, so even a relative increase translates into a small number of extra cases.</li><li>A past blood clot is still generally a reason to avoid systemic HRT, or to decide with a specialist.</li></ul>`,
    },
    {
      heading: "Do estrogen patches have a lower stroke risk than pills?",
      body: `<p><strong>Possibly, at low doses. A large UK study published in the BMJ in 2010 found that low-dose estrogen patches were not associated with increased stroke risk, while oral estrogen was associated with a modest increase and higher-dose patches with an increased risk.</strong></p>
<p>In the ${ext(SRC.bmjStroke, "study by Renoux and colleagues")}, using UK General Practice Research Database records:</p>
<ul><li>Transdermal users overall had a stroke rate similar to non-users (rate ratio 0.95).</li><li>Low-dose patches: rate ratio 0.81 - not significantly different from non-users.</li><li>High-dose patches: rate ratio 1.89 - an increased risk.</li><li>Oral estrogen: rate ratio 1.28 - a modest increase, at both low and high doses.</li></ul>
<p>The authors noted that residual confounding couldn't be fully excluded, and the confidence interval for low-dose patches still allowed for a small increase. The practical takeaway many clinicians draw: for women with higher stroke risk, a low-dose transdermal route is usually preferred, and the lowest dose that controls symptoms makes sense.</p>`,
    },
    {
      heading: "Do patches and pills work equally well for hot flashes?",
      body: `<p><strong>Yes. At equivalent doses, oral and transdermal estradiol both relieve hot flashes, night sweats and other estrogen-deficiency symptoms effectively. Most women notice improvement within a few weeks and full benefit by around three months, whichever route they use.</strong></p>
<p>If symptoms aren't controlled on one route, the dose may need adjusting - or some women absorb a patch or gel less well than others, in which case switching route or brand can help. Your clinician judges the dose by your symptoms, not by a blood test.</p>
<p>Both routes also help vaginal dryness and protect bone, though some women on systemic estrogen still need low-dose vaginal estrogen for persistent genitourinary symptoms.</p>`,
    },
    {
      heading: "Who should choose an estrogen patch instead of a pill?",
      body: `<p><strong>A patch or other transdermal estrogen is usually preferred if you have a higher risk of blood clots or stroke, obesity, migraine (especially with aura), high blood pressure, gallbladder disease, or if you smoke - and for many women over 60 or further from menopause.</strong></p>
<ul><li><strong>Higher clot risk</strong> - obesity, a family history of clots, reduced mobility, or a known clotting tendency (a personal history of clots needs specialist input).</li><li><strong>Migraine</strong> - steady transdermal levels avoid the fluctuations that can trigger attacks.</li><li><strong>High blood pressure</strong> - should be controlled first; transdermal is generally favoured.</li><li><strong>Gallbladder disease</strong> - oral estrogen is thought to raise gallbladder risk more.</li><li><strong>Smoking</strong> - adds to cardiovascular and clot risk.</li><li><strong>Diabetes or raised triglycerides</strong> - transdermal avoids the liver's effect on triglycerides.</li><li><strong>Older age or longer since menopause</strong> - when risks are higher overall, the lower-risk route makes sense.</li></ul>
<p>These are general patterns; your clinician will weigh your full history.</p>`,
    },
    {
      heading: "Who might prefer an estrogen pill?",
      body: `<p><strong>A pill can be a good choice for healthy women in their late 40s or 50s without extra clot or stroke risk who prefer the simplicity of a daily tablet, have skin reactions to patches, or need the lowest-cost option.</strong></p>
<ul><li><strong>Simplicity:</strong> one tablet a day, no adhesive, no drying time.</li><li><strong>Skin problems:</strong> some women react to patch adhesive or find patches won't stay on.</li><li><strong>Cost:</strong> generic oral estradiol is often among the least expensive options, with or without insurance.</li><li><strong>Availability:</strong> tablets were less affected by the 2026 supply problems than some patch brands.</li><li><strong>Combination tablets:</strong> some women prefer a single tablet containing both estrogen and a progestogen.</li></ul>
<p>For a healthy woman starting near menopause, the absolute difference in risk between routes is small; personal preference and practicality reasonably play a big part.</p>`,
    },
    {
      heading: "Estradiol spray vs patch vs gel: what's the difference?",
      body: `<p><strong>Sprays, gels and patches are all transdermal, so they share the same lower-clot-risk profile. The differences are practical: patches are changed once or twice a week, while gels and sprays are applied daily and need time to dry.</strong></p>
<table><tr><th></th><th>Patch</th><th>Gel</th><th>Spray</th></tr><tr><td><strong>How often</strong></td><td>Once or twice a week (by brand)</td><td>Daily</td><td>Daily</td></tr><tr><td><strong>Where</strong></td><td>Lower abdomen or buttock, rotating sites</td><td>Arm, thigh or other skin area per label</td><td>Inner forearm</td></tr><tr><td><strong>Dose adjustment</strong></td><td>By patch strength</td><td>Flexible (amount applied)</td><td>Flexible (number of sprays)</td></tr><tr><td><strong>Main hassles</strong></td><td>Adhesive irritation, peeling</td><td>Drying time; avoid skin contact until dry</td><td>Drying time; avoid skin contact until dry</td></tr><tr><td><strong>Transfer risk</strong></td><td>Low</td><td>Can transfer to others before drying</td><td>Can transfer to others before drying</td></tr></table>
<h3>Protect children and pets with gels and sprays</h3><p>Estrogen from gels and sprays can transfer to other people or pets through skin contact before it dries. Follow the label: wash your hands after applying, let it dry fully, and cover the area if close contact with children or pets is likely.</p>`,
    },
    {
      heading: "What about estrogen creams?",
      body: `<p><strong>There are two very different kinds of estrogen cream: low-dose vaginal estrogen creams, which are FDA-approved and treat vaginal and urinary symptoms locally, and compounded "body creams," which are applied to the skin for whole-body symptoms and are not FDA-approved.</strong></p>
<ul><li><strong>Vaginal estrogen cream</strong> - minimal absorption, highly effective for dryness, painful sex and urinary symptoms, and suitable for most women long term.</li><li><strong>Compounded estrogen body creams</strong> - offered by some online services (Winona's estrogen body creams, for example, are compounded). They aren't FDA-approved, which means less standardised evidence on dosing consistency; ask why one is recommended over an approved patch, gel or spray. If you have a uterus, you still need adequate progestogen protection - progesterone in a cream isn't considered reliable for that.</li></ul>
<p>See <a href="/articles/bioidentical-hormones-explained">bioidentical hormones explained</a> and <a href="/articles/winona-products">Winona's products explained</a>.</p>`,
    },
    {
      heading: "How much do estrogen patches cost compared with pills?",
      body: `<p><strong>Generic estradiol tablets are usually the cheapest form of estrogen; patches, gels and sprays typically cost more, and brand-name products cost the most. What you actually pay depends on your insurance formulary, pharmacy and whether you use a subscription service.</strong></p>
<h3>Through insurance or a pharmacy</h3><p>Generic oral estradiol is often on a low formulary tier. Generic patches are frequently covered too, but may cost more; brand-name gels and sprays may need prior authorization. Compare pharmacy cash prices if paying out of pocket.</p>
<h3>Through online subscription providers</h3>
<table><tr><th>Provider</th><th>Pill</th><th>Patch</th></tr><tr><td><a href="/reviews/winona">Winona</a></td><td>Estradiol tablets from about $54/month</td><td>Estrogen patch from about $149/month</td></tr><tr><td><a href="/reviews/gala">Gala</a></td><td colspan="2">One plan advertised from about $79/month covering estradiol as a pill or patch</td></tr><tr><td><a href="/reviews/midi">Midi Health</a></td><td colspan="2">Prescribed to your pharmacy - you pay your plan's price for the medication, plus visit costs</td></tr></table>
<p>Prices change; confirm with each provider. Remember to add the cost of a progestogen if you have a uterus. Our <a href="/articles/how-to-get-hrt-online">guide to getting HRT online</a> compares the pricing models.</p>`,
    },
    {
      heading: "What should you know about the 2026 estradiol patch shortage?",
      body: `<p><strong>Demand for estradiol patches rose sharply after the FDA's 2025-2026 hormone therapy label changes, and some women had trouble finding their usual brand or strength. The FDA says patches remain available and supply has expanded, but availability can vary by pharmacy.</strong></p>
<p>In March 2026, ${ext(SRC.npr, "NPR reported")} a "mad scramble" to fill hormone therapy prescriptions, with CVS confirming shortfalls of several estrogen products. The ${ext(SRC.fdaPatch, "FDA later reported")} that supply of FDA-approved estradiol patches had nearly doubled over the previous year and that it was working with manufacturers to increase supply further.</p>
<ul><li>Order refills a week or two early.</li><li>Ask your pharmacist to check other locations or other approved brands at the same dose.</li><li>Ask your prescriber about an equivalent gel or spray if patches are unavailable.</li><li>Don't switch to a different dose or route without advice - and don't stop your progestogen.</li></ul>`,
    },
    {
      heading: "How do you use an estrogen patch correctly?",
      body: `<p><strong>Apply the patch to clean, dry, unbroken skin below the waist - usually the lower abdomen or buttock - press firmly for several seconds, rotate sites with each change, and follow your brand's schedule (once or twice a week).</strong></p>
<ul><li><strong>Avoid the breasts</strong> and areas where clothing rubs or skin folds.</li><li><strong>Skip lotions and oils</strong> on the application site - they stop the patch sticking.</li><li><strong>Rotate sites</strong> to reduce irritation; don't reuse the same spot within a week.</li><li><strong>If it falls off,</strong> follow your patient leaflet - usually reapply or apply a new patch and keep your original change schedule.</li><li><strong>Hot baths, saunas and long swims</strong> can loosen patches; check afterwards.</li><li><strong>Dispose safely</strong> - fold the used patch in half, sticky sides together, as it still contains hormone.</li></ul>
<p>Mild redness under the patch is common and usually fades; persistent rash or itching is a reason to try another brand or a gel.</p>`,
    },
    {
      heading: "Can you switch from an estrogen pill to a patch?",
      body: `<p><strong>Yes - switching between oral and transdermal estrogen is common, for example to lower clot risk, reduce migraines or fix side effects. Your clinician will choose an equivalent dose; many women switch directly, starting the patch the day after the last pill.</strong></p>
<p>Expect a few weeks of adjustment. If symptoms return or new side effects appear, the dose may need fine-tuning. Keep taking your progestogen throughout if you have a uterus, and report any change in bleeding.</p>`,
    },
    {
      heading: "Do you still need progesterone with a patch?",
      body: `<p><strong>Yes. The route of estrogen doesn't change the need for endometrial protection. If you have a uterus and use any systemic estrogen - pill, patch, gel or spray - you need an adequate progestogen.</strong> Options include oral micronized progesterone, other progestins, a combination patch that contains both hormones, or a levonorgestrel IUD. Read our guide to <a href="/articles/progesterone-side-effects">progesterone for menopause</a>.</p>`,
    },
    {
      heading: "Is estradiol different from other estrogens in pills?",
      body: `<p><strong>Yes. Most modern pills, patches, gels and sprays contain estradiol, which is identical to the main estrogen the ovaries make. Older products such as conjugated equine estrogens - used in the Women's Health Initiative - contain a mix of estrogens.</strong> In the 2019 BMJ study, risks varied between oral products, with conjugated estrogens plus medroxyprogesterone acetate carrying the highest clot risk of the combinations studied. Many clinicians now favour estradiol, often transdermal, with micronized progesterone - though decisions should always be individual.</p>`,
    },
    {
      heading: "Which form of estrogen is best for perimenopause?",
      body: `<p><strong>Any systemic form can be used in perimenopause; the choice follows the same safety and preference considerations as after menopause. Transdermal estrogen is often chosen for women with migraines, which commonly worsen in perimenopause.</strong> Perimenopausal regimens usually use a cyclical progestogen or a levonorgestrel IUD, and contraception may still be needed. See <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a>.</p>`,
    },
    {
      heading: "Questions to ask your clinician about estrogen patch vs pill",
      body: `<ul><li>Given my health history, is a patch, gel, spray or pill safest for me?</li><li>What dose would you start, and when will we review it?</li><li>Which progestogen will I take, and is it on a cyclical or continuous schedule?</li><li>Is this product covered by my insurance, or what will it cost?</li><li>What should I do if my patch brand is out of stock?</li><li>Which side effects should I report?</li></ul>`,
    },
    {
      heading: "The bottom line on estrogen patch vs pill",
      body: `<p>Patches and pills both work well for menopause symptoms. The case for patches - and gels and sprays - is safety: by bypassing the liver, transdermal estrogen was not associated with increased blood clot risk in a large BMJ study, and low-dose patches were not associated with increased stroke risk. That makes transdermal estrogen the usual choice for women with extra risk factors. The case for pills is simplicity and cost, and for healthy women starting near menopause the absolute difference in risk is small.</p>
<p>Whichever you choose, add a progestogen if you have a uterus, review treatment at around three months, and keep up with screening. For the evidence on HRT safety overall, read <a href="/articles/is-hrt-safe">Is HRT safe?</a> and our <a href="/articles/menopause-complete-guide">complete menopause guide</a>.</p>
<p><em>This article is general information, not medical advice. Sources are linked throughout and were checked on October 25, 2026. A licensed clinician who knows your history should help you choose.</em></p>`,
    },
  ],
};
