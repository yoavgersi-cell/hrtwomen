import type { ArticleData } from "@/lib/config";

// Deep rewrite of /articles/progesterone-side-effects (same URL, so existing
// rankings carry over). Targets the large progesterone query cluster in
// Search Console: side effects, benefits, after menopause, after
// hysterectomy, 100 mg / 200 mg, creams, perimenopause. Facts checked
// 2026-10-25 against the FDA Prometrium label, the British Menopause Society
// progestogen guidance (May 2026), the Menopause Society 2022 statement, the
// E3N cohort (Fournier 2005), the progesterone hot-flash trials and the FDA
// 2026 labeling approvals.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  prometriumLabel: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/019781s026lbl.pdf",
  bms: "https://thebms.org.uk/wp-content/uploads/2026/05/14-NEW-BMS-TfC-Progestogens-and-endometrial-protection-MAY2026-A.pdf",
  mja: "https://www.mja.com.au/journal/2005/182/5/transdermal-progesterone-creams-postmenopausal-women-more-hype-hope",
  nams2022: "https://doi.org/10.1097/GME.0000000000002028",
  e3n: "https://www.hal.inserm.fr/inserm-00129104",
  prior2023: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10241804",
  fdaFeb:
    "https://www.fda.gov/news-events/press-announcements/fda-approves-labeling-changes-menopausal-hormone-therapy-products",
  jamaWhi: "https://doi.org/10.1001/jama.2024.6542",
};

export const PROGESTERONE_GUIDE: ArticleData = {
  slug: "progesterone-side-effects",
  title: "Progesterone for Menopause: Benefits, Side Effects, Doses and What to Expect (2026)",
  description:
    "Why progesterone is part of HRT, micronized progesterone vs progestins, 100 mg vs 200 mg, side effects and how to manage them, bleeding, breast cancer, sleep, creams, and progesterone after hysterectomy.",
  category: "Treatments",
  readTime: "28 min read",
  publishedAt: "2026-09-30",
  updatedAt: "2026-10-25",
  heroColor: "#FDEEF3",
  author: "HRT Women Editorial Team",
  keyTakeaways: [
    "If you have a uterus and take estrogen for menopause, you need a progestogen - usually micronized progesterone - to protect the uterine lining from overgrowth and endometrial cancer.",
    "Micronized progesterone (Prometrium and generics) is chemically identical to your body's progesterone; progestins are synthetic relatives with different side-effect profiles.",
    "Common regimens are 200 mg at bedtime for 12-14 days a month (cyclical, with a monthly bleed) or 100 mg every night (continuous, usually no bleed once settled).",
    "The most common side effects are drowsiness, dizziness, breast tenderness, bloating and PMS-like mood changes; taking it at bedtime and adjusting the type or route often helps.",
    "Over-the-counter progesterone creams are not considered reliable for protecting the uterus, and Prometrium contains peanut oil - avoid it if you're allergic to peanuts.",
  ],
  sections: [
    {
      heading: "What does progesterone do in menopause hormone therapy?",
      body: `<p><strong>In menopause hormone therapy, progesterone's main job is to protect the lining of the uterus. Estrogen on its own makes the lining (endometrium) grow; progesterone keeps that growth in check and prevents the overgrowth that can lead to endometrial cancer. That's why women who still have a uterus take a progestogen alongside estrogen.</strong></p>
<p>Before menopause, your ovaries make progesterone in the second half of each cycle, after ovulation. It prepares the uterine lining for a possible pregnancy and, if pregnancy doesn't happen, its fall triggers your period. As ovulation becomes irregular in perimenopause, many cycles produce little or no progesterone - one reason periods can become heavy and unpredictable - and after menopause your body makes very little.</p>
<p>When you take estrogen to treat hot flashes, night sweats or other symptoms, the uterine lining responds as it would to your own estrogen: it thickens. Without progesterone to balance it, that thickening can progress to endometrial hyperplasia and, over time, endometrial cancer. Adding a progestogen prevents this.</p>
<h3>Progesterone, progestin, progestogen: the terms</h3>
<ul><li><strong>Progesterone</strong> - the hormone your body makes. In medicine, "micronized progesterone" is a manufactured version chemically identical to it.</li><li><strong>Progestins</strong> - synthetic compounds that act on progesterone receptors but have different chemical structures (for example, medroxyprogesterone acetate, norethindrone acetate, levonorgestrel).</li><li><strong>Progestogen</strong> - the umbrella term covering both.</li></ul>
<p>This guide covers all of them, with a focus on micronized progesterone - the most commonly recommended option in menopause care today - and answers the questions women most often ask about side effects, doses, bleeding and safety.</p>
<h3>Progesterone at a glance</h3>
<table><tr><th>Question</th><th>Short answer</th></tr><tr><td>Who needs it?</td><td>Women with a uterus taking systemic estrogen</td></tr><tr><td>Who usually doesn't?</td><td>Women after hysterectomy (with some exceptions), and most women using only low-dose vaginal estrogen</td></tr><tr><td>Most common form</td><td>Oral micronized progesterone capsules (100 mg or 200 mg)</td></tr><tr><td>Typical regimens</td><td>200 mg nightly for 12-14 days a month, or 100 mg nightly</td></tr><tr><td>Most common side effect</td><td>Drowsiness - which is why it's taken at bedtime</td></tr><tr><td>Main caution</td><td>Prometrium contains peanut oil</td></tr></table>`,
    },
    {
      heading: "Why do you need progesterone with estrogen?",
      body: `<p><strong>Because estrogen alone raises the risk of endometrial cancer in women who have a uterus, and a progestogen prevents that. This is one of the best-established facts in menopause medicine - so well established that the FDA kept the boxed warning about endometrial cancer for estrogen-alone products when it removed other boxed warnings in 2025-2026.</strong></p>
<p>The lesson was learned the hard way. In the 1970s, when estrogen alone was widely prescribed to women with a uterus, studies found a several-fold increase in endometrial cancer. Adding a progestogen became standard practice, and combined regimens dramatically reduce that risk.</p>
<p>The British Menopause Society's ${ext(SRC.bms, "2026 guidance on progestogens and endometrial protection")} states that women with a uterus taking systemic estrogen need progestogen for 12-14 days a month in a sequential regimen, or daily in a continuous combined regimen. The Menopause Society's ${ext(SRC.nams2022, "2022 position statement")} likewise recommends adequate progestogen for women with a uterus on systemic estrogen.</p>
<h3>What "adequate" means</h3>
<p>Protection depends on the type of progestogen, the dose and how many days a month you take it. Too little, or too few days, may not fully protect the lining. That's why doses aren't arbitrary - and why changing your progestogen, or skipping it, should only be done with your clinician.</p>
<h3>Even with a progestogen, report unusual bleeding</h3>
<p>No regimen eliminates risk entirely. Bleeding that's heavy, persistent beyond the first few months of continuous treatment, or that starts after a long bleed-free stretch should always be reported, because it may need investigation.</p>`,
    },
    {
      heading: "Who needs progesterone, and who doesn't?",
      body: `<p><strong>You need a progestogen if you have a uterus and take systemic estrogen (pills, patches, gels or sprays). You usually don't need one if you've had a hysterectomy, or if you use only low-dose vaginal estrogen - though there are exceptions.</strong></p>
<table><tr><th>Your situation</th><th>Progestogen needed?</th></tr><tr><td>Uterus + systemic estrogen</td><td><strong>Yes</strong></td></tr><tr><td>Hysterectomy + systemic estrogen</td><td>Usually no</td></tr><tr><td>Hysterectomy for endometriosis</td><td>Sometimes - a progestogen may be recommended to reduce the risk of remaining endometriosis being stimulated</td></tr><tr><td>Partial (subtotal) hysterectomy with the cervix kept</td><td>Ask - some women may still have endometrial tissue</td></tr><tr><td>Endometrial ablation</td><td>Yes - islands of lining can remain</td></tr><tr><td>Low-dose vaginal estrogen only</td><td>Usually no</td></tr><tr><td>Levonorgestrel IUD in place</td><td>The IUD may provide the progestogen - confirm with your clinician</td></tr></table>
<p>If you're not sure which applies to you - for example, you don't know whether your cervix was removed or why your hysterectomy was done - ask your clinician or check your surgical records before starting estrogen.</p>`,
    },
    {
      heading: "What is the difference between micronized progesterone and progestins?",
      body: `<p><strong>Micronized progesterone is identical to the progesterone your body makes; progestins are synthetic compounds with different structures. Both protect the uterus, but they differ in side effects, effects on mood and blood lipids, and - according to observational research - possibly in breast cancer risk.</strong></p>
<table><tr><th>Progestogen</th><th>Type</th><th>Common use in menopause care</th><th>Notes</th></tr><tr><td><strong>Micronized progesterone</strong> (Prometrium, generics)</td><td>Body-identical</td><td>Oral capsule, cyclical or continuous</td><td>Can cause drowsiness; contains peanut oil; often preferred today</td></tr><tr><td><strong>Medroxyprogesterone acetate</strong> (MPA)</td><td>Progestin</td><td>Tablets; used in the WHI trial</td><td>Linked to higher breast cancer risk in combination with estrogen in WHI</td></tr><tr><td><strong>Norethindrone acetate</strong></td><td>Progestin</td><td>In some combination tablets and patches</td><td>Effective endometrial protection</td></tr><tr><td><strong>Levonorgestrel</strong></td><td>Progestin</td><td>Hormonal IUD; some combination patches</td><td>IUD delivers progestogen mainly to the uterus</td></tr><tr><td><strong>Drospirenone</strong></td><td>Progestin</td><td>In some combination products</td><td>Different side-effect profile</td></tr></table>
<h3>Why many clinicians prefer micronized progesterone</h3>
<ul><li>It's body-identical, and many women tolerate it well.</li><li>Its sedating effect can help sleep when taken at bedtime.</li><li>Observational data, such as the French ${ext(SRC.e3n, "E3N cohort")}, found a lower breast cancer risk with estrogen plus micronized progesterone than with estrogen plus synthetic progestins over the time studied - though these are observational findings, not randomized trial results.</li><li>It appears to have a more neutral effect on cholesterol than some progestins.</li></ul>
<h3>Why a progestin might be chosen instead</h3>
<ul><li>Some women get too sleepy or dizzy on progesterone.</li><li>Some prefer a combination product (one pill or one patch containing both hormones).</li><li>A levonorgestrel IUD can treat heavy bleeding and provide contraception in perimenopause.</li><li>Peanut allergy rules out Prometrium (though some generic formulations differ - check with your pharmacist).</li></ul>`,
    },
    {
      heading: "What is micronized progesterone (Prometrium)?",
      body: `<p><strong>Micronized progesterone is an FDA-approved oral form of progesterone that is chemically identical to the body's own. The brand Prometrium and its generics come as 100 mg and 200 mg capsules; in menopause care they're used to prevent endometrial overgrowth in women taking estrogen.</strong></p>
<p>"Micronized" means the progesterone is milled into very fine particles and suspended in oil, which allows it to be absorbed when swallowed. According to the ${ext(SRC.prometriumLabel, "FDA prescribing information")}:</p>
<ul><li>Capsules come in <strong>100 mg and 200 mg</strong> strengths.</li><li>They contain <strong>peanut oil</strong> - Prometrium is contraindicated in people allergic to peanuts.</li><li>Blood levels peak within about three hours of a dose.</li><li>If you have trouble swallowing the capsules, the label advises taking them with a glass of water while standing.</li></ul>
<p>Prometrium was among the first six hormone therapy products whose labels the FDA ${ext(SRC.fdaFeb, "updated in February 2026")}, removing the boxed warnings about cardiovascular disease, breast cancer and probable dementia. Read more in <a href="/articles/hrt-black-box-warning-removed">HRT's black box warning removed</a>.</p>
<h3>Is micronized progesterone "bioidentical"?</h3>
<p>Yes. Micronized progesterone is one of the FDA-approved bioidentical hormones - you don't need a compounded product to get body-identical progesterone. See <a href="/articles/bioidentical-hormones-explained">bioidentical hormones explained</a>.</p>`,
    },
    {
      heading: "How is progesterone taken for menopause? Cyclical vs continuous",
      body: `<p><strong>There are two main ways: cyclical (sequential), where you take progesterone for 12-14 days each month and usually have a monthly bleed, and continuous combined, where you take it every day and most women eventually stop bleeding.</strong></p>
<table><tr><th></th><th>Cyclical (sequential)</th><th>Continuous combined</th></tr><tr><td><strong>Typical micronized progesterone dose</strong></td><td>200 mg at bedtime for 12-14 days of each month</td><td>100 mg at bedtime every day</td></tr><tr><td><strong>Bleeding</strong></td><td>A withdrawal bleed after each progesterone course</td><td>Irregular spotting is common in the first months, then usually none</td></tr><tr><td><strong>Usually used</strong></td><td>Perimenopause or early postmenopause, when periods are recent</td><td>Once you're clearly postmenopausal (often 12 months or more after your last period)</td></tr><tr><td><strong>Long-term note</strong></td><td>BMS guidance notes very long-term sequential use (over 5 years) may carry a small endometrial risk depending on dose and duration</td><td>Generally preferred for long-term use after menopause</td></tr></table>
<p>These are common patterns, not a prescription - your clinician may adjust the dose or schedule depending on your bleeding, side effects, estrogen dose and history.</p>
<h3>Why the switch from cyclical to continuous?</h3>
<p>Starting continuous treatment too soon after your last period often causes unpredictable bleeding, because your own hormones are still fluctuating. Cyclical regimens give a predictable bleed during this phase; once you're further from menopause, continuous treatment usually leads to no bleeding at all, which many women prefer.</p>
<h3>Higher estrogen doses may need more progestogen</h3>
<p>If your estrogen dose is increased, your clinician may also increase your progestogen to keep the lining protected. Don't change one without asking about the other.</p>`,
    },
    {
      heading: "Oral, vaginal, IUD or cream: which forms of progesterone work?",
      body: `<p><strong>Oral micronized progesterone and progestin tablets, combination patches, and the levonorgestrel IUD are established ways to protect the uterus. Vaginal progesterone is used off-label by some clinicians. Over-the-counter and compounded progesterone creams are not considered reliable for endometrial protection.</strong></p>
<h3>Oral capsules</h3><p>The standard option, with the most evidence for micronized progesterone. Usually taken at bedtime.</p>
<h3>Vaginal progesterone</h3><p>Some clinicians prescribe micronized progesterone capsules or gels vaginally, off-label, to reduce side effects such as drowsiness or mood changes, because more acts locally on the uterus. This is a specialist decision.</p>
<h3>Levonorgestrel IUD</h3><p>A hormonal IUD releases progestin mainly into the uterus, so less reaches the rest of the body. In perimenopause it can also reduce heavy bleeding and provide contraception. It needs an in-person fitting and replacement on a schedule your clinician sets for HRT use.</p>
<h3>Combination patches and tablets</h3><p>Some products contain estrogen and a progestin together - convenient, but less flexible for adjusting each hormone separately.</p>
<h3>Progesterone creams: why they're not enough</h3>
<p>Progesterone creams - over-the-counter "natural progesterone" products and some compounded creams - are absorbed variably through the skin. The British Menopause Society notes that ${ext(SRC.bms, "absorption is variable and may not provide sufficient endometrial protection")}, and a review in the <em>Medical Journal of Australia</em> concluded that ${ext(SRC.mja, "claims for transdermal progesterone creams are overstated")}. If you use systemic estrogen and have a uterus, don't rely on a cream for protection. If you've been prescribed an estrogen-plus-progesterone cream, ask your clinician how your uterine lining is being protected.</p>`,
    },
    {
      heading: "What are the benefits of progesterone in menopause?",
      body: `<p><strong>Progesterone's main, proven benefit in menopause therapy is protecting the uterine lining when you take estrogen. Many women also find bedtime micronized progesterone helps them sleep. Evidence that progesterone on its own treats hot flashes is mixed.</strong></p>
<h3>1. Protecting the uterus</h3><p>This is the reason it's prescribed. By preventing estrogen-driven overgrowth of the endometrium, a progestogen makes estrogen therapy safe for women with a uterus.</p>
<h3>2. Sleep</h3><p>Micronized progesterone has a calming, sedating effect for many women - largely through a breakdown product that acts on the brain's GABA system, the same system targeted by some sleep and anti-anxiety medicines. Taken at bedtime, this side effect becomes a benefit for women whose sleep is disrupted in perimenopause.</p>
<h3>3. Hot flashes - mixed evidence</h3><p>A 2012 randomized trial in <em>Menopause</em> found that oral micronized progesterone 300 mg at bedtime reduced hot flashes and night sweats in healthy postmenopausal women compared with placebo. However, a later trial in perimenopausal women by the same research group, published in ${ext(SRC.prior2023, "<em>Scientific Reports</em> in 2023")}, did not find a significant difference from placebo on its primary outcome. Progesterone alone is not a standard first-line hot flash treatment; estrogen remains far more effective, and several non-hormonal options have stronger evidence.</p>
<h3>4. Heavy, irregular perimenopausal bleeding</h3><p>Progestogens - especially the levonorgestrel IUD - are used to control heavy bleeding in perimenopause, when cycles without ovulation leave the lining unbalanced.</p>
<h3>What progesterone isn't proven to do</h3><p>Progesterone is sometimes marketed for "hormone balance," weight loss, anxiety, bone building or anti-ageing. These claims aren't established, and it shouldn't be used in place of evidence-based treatment for those concerns.</p>`,
    },
    {
      heading: "What are the most common side effects of progesterone?",
      body: `<p><strong>The most common side effects of micronized progesterone are drowsiness and dizziness (especially soon after a dose), breast tenderness, bloating, headaches and mood changes that can feel like PMS. Many settle within the first few months, and taking it at bedtime avoids most of the daytime drowsiness.</strong></p>
<table><tr><th>Side effect</th><th>Why it happens</th><th>What usually helps</th></tr><tr><td><strong>Drowsiness, dizziness</strong></td><td>Sedating breakdown products of oral progesterone</td><td>Take at bedtime; don't drive until you know how it affects you</td></tr><tr><td><strong>Breast tenderness</strong></td><td>Hormonal effect on breast tissue (often combined with estrogen)</td><td>Often settles; dose review if persistent</td></tr><tr><td><strong>Bloating, fluid retention</strong></td><td>Hormonal effects on fluid balance and the gut</td><td>Often settles; consider a different progestogen or route</td></tr><tr><td><strong>Mood changes, irritability, low mood</strong></td><td>Some women are sensitive to progestogens ("progestogen intolerance")</td><td>Try a different progestogen, a shorter or different regimen, vaginal use or an IUD</td></tr><tr><td><strong>Headaches</strong></td><td>Hormone fluctuations</td><td>Review regimen; continuous rather than cyclical may help</td></tr><tr><td><strong>Spotting or irregular bleeding</strong></td><td>Lining adjusting to the regimen</td><td>Common early on; report if heavy or persistent</td></tr><tr><td><strong>Nausea</strong></td><td>Gastrointestinal effect</td><td>Usually mild; take with a light snack if advised</td></tr></table>
<h3>Progestogen intolerance</h3><p>Some women feel noticeably worse during the progestogen part of a cyclical regimen - low, irritable, anxious or bloated, like severe PMS. If this happens, it's worth discussing alternatives: a different progestogen, a continuous lower dose, vaginal administration (off-label) or a levonorgestrel IUD, which delivers progestin mainly to the uterus. Don't simply stop the progestogen while continuing estrogen.</p>
<h3>Does progesterone cause weight gain?</h3><p>Progesterone can cause bloating and fluid retention, which may feel like weight gain, but it isn't established as a cause of fat gain. Midlife weight changes usually have several causes, including age, muscle loss, activity and sleep.</p>`,
    },
    {
      heading: "What are the serious side effects and warnings for progesterone?",
      body: `<p><strong>Serious side effects are uncommon, but you should seek urgent care for signs of a blood clot or stroke, a severe allergic reaction, or sudden vision changes, and report unexplained vaginal bleeding or breast lumps promptly.</strong></p>
<h3>Seek emergency care for</h3><ul><li>Chest pain, sudden shortness of breath or coughing up blood</li><li>Pain, swelling or warmth in one leg</li><li>Sudden weakness or numbness, facial drooping, slurred speech, severe headache or sudden vision loss</li><li>Signs of a severe allergic reaction - swelling of the face, lips or throat, difficulty breathing (relevant to peanut allergy with Prometrium)</li></ul>
<h3>Contact your clinician for</h3><ul><li>Unexplained, heavy or persistent vaginal bleeding</li><li>A breast lump or other breast changes</li><li>Yellowing of the skin or eyes</li><li>Depression that is new or worsening</li><li>Severe or persistent dizziness</li></ul>
<h3>Who should not take progesterone</h3><p>Contraindications on the prescribing information include, among others, a peanut allergy (for Prometrium), unexplained vaginal bleeding, known or suspected breast cancer, active or past blood clots, stroke or heart attack, and liver disease. Many of these are the same as for estrogen therapy. Your clinician will review your full history.</p>`,
    },
    {
      heading: "Does progesterone increase breast cancer risk?",
      body: `<p><strong>Combined estrogen-plus-progestogen therapy is associated with a small increase in breast cancer risk that grows with longer use. Observational evidence suggests micronized progesterone may carry less breast risk than synthetic progestins, but this hasn't been confirmed in large randomized trials.</strong></p>
<h3>What the evidence shows</h3>
<ul><li><strong>WHI:</strong> the Women's Health Initiative's combined arm, which used the progestin medroxyprogesterone acetate, found about 8 more invasive breast cancers per 10,000 women per year. The estrogen-alone arm, in women without a uterus, did not show an increase - and long-term follow-up found fewer cases than placebo, as summarised in the ${ext(SRC.jamaWhi, "2024 JAMA review")}. This pointed to the progestogen as an important factor.</li><li><strong>E3N:</strong> in the French ${ext(SRC.e3n, "E3N cohort")} of more than 54,000 postmenopausal women, estrogen combined with synthetic progestins was associated with higher breast cancer risk (relative risk about 1.4), while estrogen combined with micronized progesterone was not associated with a significant increase (relative risk about 0.9) over the period studied. The authors suggested micronized progesterone may be preferable for short-term HRT.</li></ul>
<h3>The caveats</h3>
<ul><li>E3N is observational - women weren't randomly assigned to treatments, so other differences could explain part of the result.</li><li>Follow-up was relatively short; longer use may change the picture.</li><li>The absolute risk change for most women starting HRT near menopause is small, but not zero.</li></ul>
<h3>What it means for you</h3><p>If you have a uterus and take estrogen, you need a progestogen - the breast cancer question is about <em>which</em> one, not <em>whether</em>. It's reasonable to ask your clinician whether micronized progesterone suits you. Keep up with mammography, and report breast changes. Women with a history of breast cancer are generally advised against systemic HRT.</p>`,
    },
    {
      heading: "Does progesterone help with sleep and anxiety?",
      body: `<p><strong>Many women find bedtime micronized progesterone helps them fall asleep and stay asleep, thanks to its calming effect on the brain. It isn't approved as a sleep or anxiety treatment, and some women experience the opposite - low mood or irritability.</strong></p>
<p>Sleep problems are common in perimenopause and menopause, driven by night sweats, falling progesterone and anxiety. Oral micronized progesterone is broken down into compounds that act on GABA-A receptors in the brain, producing a sedative, calming effect - which is why the FDA label warns about drowsiness and dizziness and why it's taken at bedtime.</p>
<ul><li>If sleep is your main problem and you have night sweats, treating the night sweats with estrogen (plus progesterone if you have a uterus) often helps most.</li><li>For persistent insomnia, cognitive behavioural therapy for insomnia (CBT-I) is the first-line treatment.</li><li>If progesterone worsens your mood or anxiety, tell your clinician - a different progestogen or route may suit you better.</li></ul>`,
    },
    {
      heading: "What bleeding is normal on progesterone?",
      body: `<p><strong>On a cyclical regimen, a withdrawal bleed a few days after each progesterone course is expected. On a continuous regimen, irregular spotting is common for the first months and usually settles. Bleeding that is heavy, prolonged, or starts after months without bleeding should be reported.</strong></p>
<table><tr><th>Regimen</th><th>Expected</th><th>Report to your clinician</th></tr><tr><td>Cyclical</td><td>A regular bleed starting around the end of, or after, the progesterone days</td><td>Bleeding at other times of the month, very heavy or prolonged bleeds</td></tr><tr><td>Continuous</td><td>Light, irregular spotting in the first few months</td><td>Bleeding that persists beyond the settling-in period, gets heavier, or starts after a bleed-free stretch</td></tr><tr><td>Any regimen</td><td>-</td><td>Bleeding after sex; any bleeding that worries you</td></tr></table>
<p>Unexpected bleeding on HRT is often caused by the regimen itself, but it can sometimes signal a problem in the uterine lining, so it may need an ultrasound or other assessment - sometimes in person.</p>
<h3>Can progesterone stop periods?</h3><p>On a continuous regimen after menopause, most women stop bleeding once settled. In perimenopause, cyclical progesterone usually makes bleeding more predictable rather than stopping it, and a levonorgestrel IUD often reduces or stops periods.</p>`,
    },
    {
      heading: "How is progesterone used in perimenopause?",
      body: `<p><strong>In perimenopause, progesterone is used with estrogen as part of HRT (usually cyclically), and progestogens - especially the levonorgestrel IUD - are used to manage heavy, irregular bleeding. Progesterone on its own is sometimes prescribed at a clinician's discretion, though it's not a standard treatment for hot flashes.</strong></p>
<ul><li><strong>With estrogen:</strong> a cyclical regimen gives a predictable monthly bleed while your own cycles are still irregular.</li><li><strong>Levonorgestrel IUD:</strong> provides uterine protection for HRT, reduces heavy bleeding and works as contraception - useful because HRT doesn't prevent pregnancy.</li><li><strong>Progesterone alone:</strong> some clinicians use it for sleep or certain bleeding patterns; the evidence for hot flashes in perimenopause is weak.</li><li><strong>Contraception:</strong> still needed if pregnancy is possible - commonly until one year after your last period if over 50, or two years if under 50.</li></ul>
<p>See <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a> for the full picture.</p>`,
    },
    {
      heading: "Do you need progesterone after a hysterectomy?",
      body: `<p><strong>Usually not. If your uterus has been removed, there's no lining to protect, so estrogen alone is standard. Exceptions include a hysterectomy for endometriosis, or a partial hysterectomy where some endometrial tissue may remain.</strong></p>
<p>Estrogen-alone therapy has a different - and in some respects more reassuring - evidence base: in the Women's Health Initiative, women without a uterus who took estrogen alone did not have increased breast cancer risk. Taking a progestogen you don't need adds side effects without benefit.</p>
<p>If you had a hysterectomy for endometriosis, some clinicians recommend continuing a progestogen (or using combined therapy) for a period, because estrogen alone could stimulate remaining endometriosis. Tell your clinician why your hysterectomy was done and whether your ovaries and cervix were removed.</p>
<h3>Side effects of progesterone after hysterectomy</h3><p>If you are prescribed progesterone after a hysterectomy, the side effects are the same as for anyone else - drowsiness, dizziness, breast tenderness, bloating and possible mood changes. If you're unsure why you've been prescribed it, ask: it may not be needed.</p>`,
    },
    {
      heading: "Is 200 mg of progesterone a high dose for menopause?",
      body: `<p><strong>No - 200 mg of micronized progesterone at bedtime is a standard dose for cyclical regimens, typically taken for 12-14 days each month. In continuous regimens, 100 mg nightly is more common. Higher doses are sometimes used when estrogen doses are higher or bleeding needs better control.</strong></p>
<ul><li><strong>100 mg nightly</strong> - common in continuous combined regimens after menopause.</li><li><strong>200 mg nightly for 12-14 days a month</strong> - common in cyclical regimens.</li><li><strong>Adjustments</strong> - your clinician may change the dose based on your estrogen dose, bleeding pattern and side effects.</li></ul>
<p>If 200 mg makes you very drowsy or dizzy, talk to your clinician rather than cutting the dose yourself - an inadequate dose may not fully protect the uterine lining.</p>`,
    },
    {
      heading: "Do you need blood tests to check progesterone levels?",
      body: `<p><strong>Generally no. Progesterone doses in menopause therapy are chosen to protect the uterine lining, based on evidence about dose and duration - not adjusted to a target blood level. Blood or saliva progesterone levels don't reliably tell you whether your uterus is protected.</strong></p>
<p>Oral progesterone produces blood levels that rise and fall within hours, and much of its effect depends on how the body processes it. Monitoring is clinical: your bleeding pattern, side effects and, when needed, an ultrasound or other assessment of the uterine lining. Be cautious of services that sell repeated hormone panels or saliva tests to "balance" progesterone.</p>`,
    },
    {
      heading: "What if you miss a dose of progesterone?",
      body: `<p><strong>Follow the instructions in your patient information leaflet and from your prescriber. In general, take a missed bedtime dose if you remember the same night; if it's nearly time for the next dose, skip it rather than doubling up.</strong> Missing doses repeatedly - especially in a cyclical regimen - can cause irregular bleeding and may reduce protection of the uterine lining. Setting a nightly reminder helps. Tell your clinician if you're often missing doses or if bleeding changes.</p>`,
    },
    {
      heading: "Can you take progesterone without estrogen?",
      body: `<p><strong>Yes, in some situations - for example, some clinicians prescribe progesterone alone in perimenopause for sleep or bleeding patterns. But progesterone alone is not a substitute for estrogen for treating hot flashes, vaginal dryness or bone loss, and it isn't needed for uterine protection if you're not taking estrogen.</strong> Discuss what you want treatment to achieve; estrogen-based HRT or a non-hormonal option may fit better.</p>`,
    },
    {
      heading: "How can you get progesterone online?",
      body: `<p><strong>Licensed online menopause providers can prescribe progesterone - usually as part of an HRT regimen after reviewing your history.</strong></p>
<ul><li><a href="/reviews/winona">Winona</a> lists FDA-approved progesterone capsules from about $39/month, alongside estradiol options; a physician reviews your online intake.</li><li><a href="/reviews/gala">Gala</a> includes progesterone in its one flat plan, advertised from about $79/month, with oral or vaginal options.</li><li><a href="/reviews/midi">Midi Health</a> clinicians prescribe to your own pharmacy after a video visit, so generic micronized progesterone may be covered by your insurance.</li></ul>
<p>Whichever you use, confirm your progestogen dose and regimen match your estrogen, and ask how to report bleeding or side effects. Our guide to <a href="/articles/how-to-get-hrt-online">how to get HRT online</a> walks through the process, and our <a href="/">provider rankings</a> compare all three.</p>`,
    },
    {
      heading: "Progesterone glossary",
      body: `<ul><li><strong>Endometrium:</strong> the lining of the uterus.</li><li><strong>Endometrial hyperplasia:</strong> overgrowth of the lining, which can progress to cancer if untreated.</li><li><strong>Unopposed estrogen:</strong> estrogen taken without a progestogen by a woman with a uterus.</li><li><strong>Micronized progesterone:</strong> body-identical progesterone milled into fine particles for oral absorption.</li><li><strong>Progestin:</strong> a synthetic compound that acts like progesterone.</li><li><strong>Progestogen:</strong> the umbrella term for progesterone and progestins.</li><li><strong>Cyclical (sequential) regimen:</strong> progestogen for part of each month, usually with a monthly bleed.</li><li><strong>Continuous combined regimen:</strong> estrogen and progestogen every day, usually leading to no bleeding.</li><li><strong>Withdrawal bleed:</strong> the bleed that follows each progestogen course in a cyclical regimen.</li><li><strong>Levonorgestrel IUD:</strong> a hormonal intrauterine device that releases progestin mainly into the uterus.</li><li><strong>Progestogen intolerance:</strong> PMS-like side effects some women experience with progestogens.</li></ul>`,
    },
    {
      heading: "The bottom line on progesterone",
      body: `<p>If you have a uterus and take estrogen for menopause symptoms, a progestogen isn't optional - it's what makes estrogen therapy safe for your uterus. Micronized progesterone, taken at bedtime, is the most commonly recommended option today: body-identical, often well tolerated, and associated in observational research with less breast risk than some synthetic progestins. Side effects like drowsiness, bloating and mood changes are common but usually manageable by adjusting the dose, the regimen, the type or the route.</p>
<p>Don't rely on over-the-counter progesterone creams for protection, don't skip your progestogen while continuing estrogen, and report unexpected bleeding. If you have a peanut allergy, ask about alternatives to Prometrium. For the bigger picture, read <a href="/articles/what-is-hrt">What is HRT?</a>, <a href="/articles/is-hrt-safe">Is HRT safe?</a> and our <a href="/articles/menopause-complete-guide">complete menopause guide</a>.</p>
<p><em>This article is general information, not medical advice. Sources are linked throughout and were checked on October 25, 2026. A licensed clinician who knows your history should decide what, if any, treatment is right for you.</em></p>`,
    },
  ],
};
