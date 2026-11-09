import type { ArticleData } from "@/lib/config";

// Trend pillar: hot flashes and night sweats treatment under the October
// 2026 guidelines. Facts checked 2026-11-02 and linked inline: ACOG Clinical
// Practice Guideline No. 13 (Oct 15, 2026); ACP guideline on pharmacologic
// treatment of menopausal VMS (Annals, Oct 5, 2026); FDA label updates for
// three more estradiol patches (Oct 30, 2026); SWAN duration data (JAMA
// Intern Med 2015); Mayo Clinic workplace-cost study (Mayo Clin Proc 2023);
// fezolinetant SKYLIGHT and elinzanetant OASIS trial results; Veozah boxed
// warning (Dec 2024); Lynkuet approval (Oct 24, 2025); NAMS 2023 nonhormone
// position statement; Elkins 2013 hypnosis RCT. Where sources differ (e.g.
// liver-test schedules), the copy points readers to the current label.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  acog: "https://www.acog.org/news/2026/10/acog-expands-recommendations-for-management-of-menopause-symptoms/",
  acogJournal:
    "https://journals.lww.com/greenjournal/fulltext/10.1097/aog.0000000000006428~acog-clinical-practice-guideline-management-of",
  acp: "https://www.acponline.org/acp-newsroom/acp-recommends-hormonal-therapy-as-a-first-line-treatment-for-menopausal-vasomotor-symptoms",
  fdaPatches: "https://www.hhs.gov/press-room/fda-advances-menopause-care-hormone-therapy-labeling-access.html",
  swan: "https://jamanetwork.com/journals/jama/fullarticle/2110996",
  mayoWork:
    "https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-study-puts-price-tag-on-cost-of-menopause-symptoms-for-women-in-the-workplace",
  veozahBoxed:
    "https://drugtopics.com/view/fda-updates-veozah-label-with-boxed-warning-for-rare-but-serious-liver-injury",
  fezoAafp: "https://www.aafp.org/afp/2024/0300/steps-fezolinetant-menopause-symptoms",
  lynkuet:
    "https://www.businesswire.com/news/home/20251017138908/en/Bayer%E2%80%99s-Lynkuet%C2%AE-elinzanetant-the-First-and-Only-Neurokinin-1-and-Neurokinin-3-Receptor-Antagonist-Receives-FDA-Approval-for-Moderate-to-Severe-Hot-Flashes-Due-to-Menopause",
  nams2023: "https://menopause.org/wp-content/uploads/press-release/nonhormone-therapy-position-statement-release.pdf",
  nams2022: "https://doi.org/10.1097/GME.0000000000002028",
};

export const HOT_FLASHES_TREATMENT: ArticleData = {
  slug: "hot-flashes-treatment",
  title: "How to Stop Hot Flashes (2026): Every Treatment Ranked",
  description:
    "How to stop hot flashes and night sweats in 2026: every treatment ranked using the new ACOG and ACP guidelines - hormone therapy, Veozah, Lynkuet, SSRIs, gabapentin, CBT, hypnosis and lifestyle - with effectiveness numbers, risks, costs and how to get treated.",
  category: "Treatments",
  readTime: "40 min read",
  publishedAt: "2026-11-02",
  updatedAt: "2026-11-02",
  heroColor: "#FCE4EC",
  author: "HRT Women Editorial Team",
  takeawaysTitle: "⚡ Key takeaways & quick verdict",
  keyTakeaways: [
    "Hot flashes affect up to 80% of women in the menopause transition and last a median of 7.4 years among women with frequent symptoms - longer for many Black and Hispanic women.",
    "October 2026 brought two new US guidelines that agree: estrogen-based hormone therapy is the first-line treatment for bothersome hot flashes and night sweats in women who can take it (ACP, Oct 5; ACOG, Oct 15).",
    "Good non-hormonal options now exist: fezolinetant (Veozah) and elinzanetant (Lynkuet) cut moderate-to-severe hot flashes by roughly 2.5 to 3 more per day than placebo; SSRIs/SNRIs, gabapentin, CBT and clinical hypnosis also help.",
    "Verdict: if hot flashes or night sweats are disrupting your sleep, work or mood, see a clinician - most women can get substantial relief within 4 to 12 weeks. Skip supplements marketed for hot flashes; evidence doesn't support them.",
  ],
  sections: [
    {
      heading: "What is the best treatment for hot flashes in 2026?",
      body: `<p><strong>For most healthy women under 60 or within 10 years of menopause, estrogen-based hormone therapy is the most effective treatment for hot flashes and night sweats - and in October 2026 both the American College of Physicians and the American College of Obstetricians and Gynecologists named it the first-line choice. For women who can't or don't want to use hormones, fezolinetant, elinzanetant, certain antidepressants, gabapentin, CBT and clinical hypnosis all have evidence.</strong></p>
<p>Hot flashes are the defining symptom of menopause - and one of the most undertreated. Many women are told to "ride it out," not realizing that symptoms often last the better part of a decade. October 2026 changed the conversation: two major US medical societies issued new guidelines within ten days of each other, and the FDA finished another round of hormone therapy label updates.</p>
<p>This guide ranks every option by the evidence, using the new guidelines, and explains what each one means for real decisions: how well it works, how fast, the risks, the costs and how to get it.</p>
<h3>Hot flash treatments ranked at a glance</h3>
<table><tr><th>Rank</th><th>Treatment</th><th>How well it works</th><th>Guideline status (Oct 2026)</th></tr><tr><td>1</td><td>Estrogen hormone therapy (with progestogen if you have a uterus)</td><td>Most effective - commonly cited around a 75% reduction in frequency vs placebo</td><td>First-line (ACP); strong recommendation (ACOG)</td></tr><tr><td>2</td><td>Elinzanetant (Lynkuet)</td><td>About 3 fewer moderate-severe hot flashes/day vs placebo</td><td>Strong (ACOG); third-line (ACP)</td></tr><tr><td>2</td><td>Fezolinetant (Veozah)</td><td>About 2.3-2.6 fewer/day vs placebo</td><td>Strong (ACOG); third-line (ACP)</td></tr><tr><td>4</td><td>SNRIs (venlafaxine, desvenlafaxine)</td><td>Moderate</td><td>Strong (ACOG); second-line (ACP)</td></tr><tr><td>4</td><td>SSRIs (paroxetine, escitalopram)</td><td>Modest to moderate</td><td>Strong (ACOG); third-line (ACP)</td></tr><tr><td>6</td><td>Gabapentin</td><td>Modest to moderate; helps night sweats</td><td>Third-line (ACP)</td></tr><tr><td>6</td><td>Oxybutynin</td><td>Moderate</td><td>Recommended (Menopause Society 2023)</td></tr><tr><td>8</td><td>Clinical hypnosis, CBT</td><td>Meaningful reduction in frequency or bother</td><td>Conditional (ACOG); recommended (Menopause Society)</td></tr><tr><td>9</td><td>Weight loss, exercise, mindfulness, acupuncture</td><td>Small to modest, variable</td><td>Conditional or limited</td></tr><tr><td>-</td><td>Supplements, herbs, phytoestrogens</td><td>Not supported</td><td>Not recommended</td></tr></table>
<p>Ranking reflects effectiveness and guideline support for typical women; your best option depends on your health history. Details and sources for each are below.</p>`,
    },
    {
      heading: "What changed in October 2026?",
      body: `<p><strong>Three things: the American College of Physicians published a guideline naming estrogen therapy the first-line drug treatment for hot flashes (October 5); ACOG published its first full menopause-symptom guideline since 2014, strongly recommending hormone therapy and the two newest non-hormonal drugs (October 15); and the FDA approved updated labels for three more estradiol patches without the old boxed warnings on heart disease, breast cancer and dementia (October 30).</strong></p>
<table><tr><th>Date</th><th>Development</th><th>What it means</th></tr><tr><td>Oct 5, 2026</td><td>${ext(SRC.acp, "ACP guideline")} on drug treatment of menopausal hot flashes (Annals of Internal Medicine)</td><td>Estrogen first-line; SNRIs second-line; SSRIs, gabapentin, fezolinetant or elinzanetant third-line; reassess at 8-12 weeks</td></tr><tr><td>Oct 15, 2026</td><td>${ext(SRC.acog, "ACOG Clinical Practice Guideline No. 13")}</td><td>Strong recommendations for hormone therapy, fezolinetant, elinzanetant and SSRIs/SNRIs; conditional for CBT, mindfulness, exercise, hypnosis and acupuncture</td></tr><tr><td>Oct 30, 2026</td><td>${ext(SRC.fdaPatches, "FDA approves updated labels")} for three more estradiol patches</td><td>Boxed warnings on heart disease, breast cancer and probable dementia removed (the information stays elsewhere in the label); FDA said it wasn't aware of an imminent nationwide patch shortage</td></tr></table>
<h3>Where the two guidelines agree - and differ</h3>
<p>Both put estrogen first for women who can take it. They differ in how they order the non-hormonal drugs. ACP ranks SNRIs (venlafaxine, desvenlafaxine) second and places the newer neurokinin drugs alongside SSRIs and gabapentin as third-line - partly reflecting cost and the shorter track record of the new drugs. ACOG gives fezolinetant, elinzanetant and SSRIs/SNRIs strong recommendations without a strict sequence. In practice, both leave room for you and your clinician to choose based on your health, preferences and coverage.</p>
<p>ACOG also lists what it doesn't support for these symptoms: progestogen on its own, DHEA, testosterone, and phytoestrogens or herbal supplements. (See our <a href="/articles/testosterone-for-women">testosterone for women guide</a> for where testosterone does have evidence.)</p>
<p>The label changes are covered in depth in <a href="/articles/hrt-black-box-warning-removed">our black box warning guide</a>.</p>`,
    },
    {
      heading: "How common are hot flashes, and how long do they last?",
      body: `<p><strong>Up to 80% of women have hot flashes or night sweats during the menopause transition. In the landmark SWAN study, women with frequent hot flashes had them for a median of 7.4 years in total, including a median of 4.5 years after their final period - and Black women had them longest, at a median of about 10 years.</strong></p>
<p>The Study of Women's Health Across the Nation followed more than 3,000 women of different ethnic backgrounds through menopause. Its 2015 analysis in ${ext(SRC.swan, "JAMA Internal Medicine")} upended the idea that hot flashes are a brief phase.</p>
<table><tr><th>Group (women with frequent hot flashes)</th><th>Median total duration</th></tr><tr><td>African American women</td><td>10.1 years</td></tr><tr><td>Hispanic women</td><td>8.9 years</td></tr><tr><td>Non-Hispanic white women</td><td>6.5 years</td></tr><tr><td>Chinese women</td><td>5.4 years</td></tr><tr><td>Japanese women</td><td>4.8 years</td></tr><tr><td>All women in the analysis</td><td>7.4 years</td></tr></table>
<p>Women whose hot flashes started earlier - while still having periods - tended to have them longest. Some women have hot flashes into their 60s and 70s.</p>
<h3>The cost of hot flashes at work</h3>
<p>A 2023 Mayo Clinic study of women aged 45 to 60 found 13.4% reported at least one adverse work outcome due to menopause symptoms, and estimated about $1.8 billion a year in lost work time in the US - rising to about $26.6 billion when medical costs are included (${ext(SRC.mayoWork, "Mayo Clinic")}). Hot flashes and night-sweat-driven sleep loss are central to that burden.</p>`,
    },
    {
      heading: "What causes hot flashes?",
      body: `<p><strong>Hot flashes start in the brain. Falling estrogen changes the activity of a group of neurons in the hypothalamus (called KNDy neurons) that influence the body's temperature control center. Signaling through a brain chemical called neurokinin B narrows the range of temperatures your body tolerates, so small rises in core temperature trigger an exaggerated cooling response: flushing, sweating and a racing heart.</strong></p>
<p>Understanding this mechanism explains the newest treatments. Fezolinetant blocks the neurokinin 3 (NK3) receptor; elinzanetant blocks both NK1 and NK3. Estrogen works upstream, calming the same neurons. SSRIs, SNRIs and gabapentin work through other pathways in the brain's temperature regulation.</p>
<h3>What a hot flash feels like</h3>
<ul><li>A sudden wave of heat, usually in the chest, neck and face</li><li>Flushing and sweating, sometimes drenching</li><li>Rapid heartbeat or palpitations</li><li>Anxiety or a sense of dread just before or during</li><li>Chills as the body over-cools afterward</li><li>Typically lasting 1 to 5 minutes</li></ul>
<p>Night sweats are hot flashes during sleep. They're a leading cause of the sleep disruption many women report in perimenopause and menopause.</p>
<h3>Common triggers</h3>
<p>Warm rooms, hot drinks, alcohol, spicy food, stress, tight or synthetic clothing and smoking can set off or worsen hot flashes in many women. Higher body weight has also been linked to more hot flashes, especially earlier in the transition.</p>`,
    },
    {
      heading: "Is hormone therapy the most effective treatment for hot flashes?",
      body: `<p><strong>Yes. Estrogen is the most effective treatment available. Systematic reviews have found it reduces hot flash frequency by around 75% compared with placebo, and lowers severity even more. Women with a uterus take it with a progestogen to protect the uterine lining.</strong></p>
<p>Both October 2026 guidelines put estrogen first for women seeking treatment who have no reason to avoid it. ACOG's guideline links its strongest recommendation to starting before age 60 or within 10 years of menopause, consistent with ${ext(SRC.nams2022, "The Menopause Society's 2022 position statement")}.</p>
<h3>Forms of estrogen for hot flashes</h3>
<table><tr><th>Form</th><th>Examples</th><th>Notes</th></tr><tr><td>Patch</td><td>Estradiol patches, changed once or twice weekly</td><td>Lower clot risk than pills; demand surged after the label change</td></tr><tr><td>Gel or spray</td><td>Estradiol gel, spray</td><td>Transdermal; daily application</td></tr><tr><td>Pill</td><td>Estradiol tablets</td><td>Inexpensive generic; higher clot risk than skin forms</td></tr><tr><td>Ring (systemic)</td><td>Estradiol acetate ring</td><td>Changed every 3 months</td></tr><tr><td>Combination pill</td><td>Estradiol plus progesterone in one capsule</td><td>For women with a uterus</td></tr></table>
<p>Compare routes in <a href="/articles/estrogen-patch-vs-pill">estrogen patch vs pill</a>, and the progestogen side in our <a href="/articles/progesterone-side-effects">progesterone guide</a>.</p>
<h3>How fast it works</h3>
<p>Many women notice fewer hot flashes within 2 to 4 weeks, with full effect by about 12 weeks. ACP recommends reassessing any treatment at 8 to 12 weeks.</p>
<h3>Risks to weigh</h3>
<p>Blood clots (lower with transdermal estrogen), stroke, a small increase in breast cancer risk with longer use of combined therapy, and endometrial cancer if estrogen is taken without a progestogen by a woman with a uterus. For most healthy women starting near menopause, guidelines judge the benefits for bothersome symptoms to outweigh these risks. Read <a href="/articles/is-hrt-safe">is HRT safe?</a> for the numbers, and our <a href="/articles/estradiol">estradiol guide</a> for forms, doses and side effects.</p>`,
    },
    {
      heading: "Who should not use hormone therapy for hot flashes?",
      body: `<p><strong>Systemic estrogen is generally avoided by women with a history of breast cancer or other estrogen-sensitive cancers, blood clots, stroke, heart attack, active liver disease or unexplained vaginal bleeding. Women in these groups usually have effective non-hormonal options.</strong></p>
<ul><li><strong>Breast cancer history:</strong> non-hormonal treatment is standard; see the breast cancer section below.</li><li><strong>Prior blood clot or stroke:</strong> systemic estrogen is usually avoided.</li><li><strong>Heart disease:</strong> starting HRT is generally not recommended for cardiovascular protection or in women with established disease.</li><li><strong>Starting after 60 or more than 10 years past menopause:</strong> approached more cautiously because baseline risks are higher.</li><li><strong>Migraine with aura, high clot risk, smoking:</strong> transdermal estrogen is often preferred if HRT is used at all.</li></ul>
<p>If you aren't sure whether you're a candidate, that's exactly the conversation to have with a clinician - and the non-hormonal sections below show you aren't out of options either way.</p>`,
    },
    {
      heading: "Does Veozah (fezolinetant) work for hot flashes?",
      body: `<p><strong>Yes. In the SKYLIGHT 1 and 2 trials, fezolinetant 45 mg once daily reduced moderate-to-severe hot flashes by roughly 2.3 to 2.6 more episodes per day than placebo after 12 weeks, with effects often noticeable in the first week. It carries a boxed warning for rare but serious liver injury, so liver blood tests are required.</strong></p>
<p>Approved in May 2023, fezolinetant (Veozah) was the first neurokinin 3 receptor antagonist for hot flashes - a non-hormonal drug that targets the brain mechanism directly (${ext(SRC.fezoAafp, "AAFP review")}).</p>
<ul><li><strong>Dose:</strong> one 45 mg tablet daily.</li><li><strong>Speed:</strong> benefit often appears within one to four weeks.</li><li><strong>Liver safety:</strong> after post-marketing reports of liver injury, the FDA added a ${ext(SRC.veozahBoxed, "boxed warning in December 2024")}. Blood tests are required before starting and regularly during the first months - follow the schedule in the current label. Stop and seek care for symptoms such as yellowing skin or eyes, dark urine, nausea, fatigue or abdominal pain.</li><li><strong>Not for:</strong> people with cirrhosis or severe kidney impairment.</li><li><strong>Cost:</strong> brand-only; coverage and prior authorization vary.</li></ul>
<p>ACOG strongly recommends fezolinetant for hot flashes; ACP places it among third-line options for women who can't take estrogen or SNRIs.</p>`,
    },
    {
      heading: "Does Lynkuet (elinzanetant) work for hot flashes and night sweats?",
      body: `<p><strong>Yes. Elinzanetant, approved by the FDA on October 24, 2025, reduced moderate-to-severe hot flashes by about 3 more episodes per day than placebo at weeks 4 and 12 in the OASIS 1 and 2 trials, and also improved sleep disturbance. It's taken once daily at bedtime and requires liver monitoring.</strong></p>
<p>Lynkuet is the first drug that blocks both the neurokinin 1 and neurokinin 3 receptors (${ext(SRC.lynkuet, "Bayer announcement")}). The dual action may explain its effect on sleep.</p>
<table><tr><th></th><th>Veozah (fezolinetant)</th><th>Lynkuet (elinzanetant)</th></tr><tr><td>Approved</td><td>May 2023</td><td>October 24, 2025</td></tr><tr><td>Target</td><td>NK3 receptor</td><td>NK1 and NK3 receptors</td></tr><tr><td>Dose</td><td>45 mg once daily</td><td>120 mg once daily at bedtime</td></tr><tr><td>Effect vs placebo</td><td>About 2.3-2.6 fewer hot flashes/day at 12 weeks</td><td>About 3.0-3.3 fewer/day at weeks 4 and 12</td></tr><tr><td>Sleep</td><td>Indirect benefit via fewer night sweats</td><td>Improved sleep disturbance in trials</td></tr><tr><td>Main safety issue</td><td>Boxed warning: rare serious liver injury</td><td>Liver enzyme elevations; drowsiness</td></tr><tr><td>Monitoring</td><td>Liver tests per label</td><td>Liver tests per label</td></tr></table>
<p>The trials weren't head-to-head, so the numbers can't be compared directly. In OASIS, more women stopped elinzanetant than placebo (12.5% vs 4.1%), often due to side effects such as sleepiness. In September 2026, the FDA accepted Bayer's application for a new indication: hot flashes caused by endocrine therapy for breast cancer - a group with few good options. A decision is pending.</p>`,
    },
    {
      heading: "Do antidepressants help hot flashes?",
      body: `<p><strong>Yes. Certain SSRIs and SNRIs reduce hot flashes even in women without depression, typically at lower doses than used for depression. Low-dose paroxetine (7.5 mg) has been FDA-approved for hot flashes since 2013. ACP ranks the SNRIs venlafaxine and desvenlafaxine as second-line, with SSRIs such as escitalopram and paroxetine third-line.</strong></p>
<table><tr><th>Medicine</th><th>Type</th><th>Notes</th></tr><tr><td>Paroxetine 7.5 mg</td><td>SSRI</td><td>FDA-approved for hot flashes; avoid with tamoxifen</td></tr><tr><td>Escitalopram</td><td>SSRI</td><td>Off-label; generally well tolerated</td></tr><tr><td>Venlafaxine</td><td>SNRI</td><td>Off-label; often used in breast cancer survivors</td></tr><tr><td>Desvenlafaxine</td><td>SNRI</td><td>Off-label; ACP second-line</td></tr></table>
<p><strong>Who they suit:</strong> women who can't take estrogen, women with both hot flashes and low mood or anxiety, and many breast cancer survivors.</p>
<p><strong>Side effects:</strong> nausea, dry mouth, sleep changes and - relevant for many women - reduced sexual desire or orgasm difficulty. Stopping should be gradual.</p>
<p><strong>Tamoxifen warning:</strong> paroxetine and fluoxetine strongly inhibit an enzyme (CYP2D6) needed to activate tamoxifen and are generally avoided in women taking it; venlafaxine is often preferred.</p>`,
    },
    {
      heading: "Do gabapentin and oxybutynin help hot flashes?",
      body: `<p><strong>Yes, both have evidence. Gabapentin, an anti-seizure and nerve-pain medicine, reduces hot flashes and is especially useful for night sweats when taken at bedtime. Oxybutynin, a bladder medicine, also reduces hot flashes and was added to The Menopause Society's recommended list in 2023, but long-term use raises concerns about cognition in older adults.</strong></p>
<ul><li><strong>Gabapentin:</strong> off-label; drowsiness and dizziness are common, which can be helpful at night but limits daytime use. ACP lists it as a third-line option.</li><li><strong>Oxybutynin:</strong> off-label for hot flashes; dry mouth, constipation and blurred vision are common. Anticholinergic drugs have been linked to cognitive decline with long-term use in older people, so it's less suitable after about 65.</li><li><strong>Clonidine:</strong> an older blood pressure medicine with modest effect; side effects limit its use.</li></ul>`,
    },
    {
      heading: "Do CBT and hypnosis work for hot flashes?",
      body: `<p><strong>Yes - and they're among the most underused options. Cognitive behavioral therapy (CBT) reduces how much hot flashes bother you and improves sleep, while clinical hypnosis has been shown to reduce hot flash frequency itself. In a 2013 randomized trial, hypnosis cut hot flash frequency by about 74%, compared with 17% in a control group.</strong></p>
<p>ACOG's 2026 guideline gives CBT, mindfulness, exercise, clinical hypnosis and acupuncture conditional recommendations. The ${ext(SRC.nams2023, "Menopause Society's 2023 non-hormone statement")} recommends CBT and clinical hypnosis.</p>
<h3>CBT for hot flashes</h3>
<p>Menopause-specific CBT typically runs four to six sessions, in groups, one-on-one or self-guided with a book or app. It teaches paced breathing during flashes, reframing anxious thoughts ("everyone can see me sweating"), and sleep strategies. It reduces the distress and interference of hot flashes more than their raw frequency, and it also helps insomnia and mood.</p>
<h3>Clinical hypnosis</h3>
<p>Hypnotherapy for hot flashes uses guided relaxation and "cooling" mental imagery, usually over about five weekly sessions plus daily self-practice with audio recordings. It has no drug side effects, making it attractive for breast cancer survivors and women who prefer to avoid medication.</p>`,
    },
    {
      heading: "Do lifestyle changes help hot flashes?",
      body: `<p><strong>Lifestyle changes help some women, especially with mild symptoms, but the effects are usually modest. Weight loss has the best evidence among lifestyle measures; avoiding personal triggers, keeping cool and limiting alcohol can make hot flashes more bearable. They're worth doing alongside treatment, not instead of it if symptoms are severe.</strong></p>
<table><tr><th>Strategy</th><th>Evidence</th><th>Practical tip</th></tr><tr><td>Weight loss (if overweight)</td><td>Recommended by The Menopause Society; benefit in some trials</td><td>Even modest loss may help; see <a href="/articles/glp1-menopause">GLP-1s and menopause</a> if considering medication</td></tr><tr><td>Exercise</td><td>Mixed for hot flashes; strong for sleep, mood, bone and heart</td><td>Doesn't reliably reduce flashes, but improves how you cope</td></tr><tr><td>Avoiding triggers</td><td>Common sense; limited trials</td><td>Track alcohol, hot drinks, spicy food, stress</td></tr><tr><td>Cooling</td><td>Limited trials; low risk</td><td>Layers, fans, cool bedroom (around 65°F/18°C), breathable fabrics</td></tr><tr><td>Quitting smoking</td><td>Smoking is linked to more hot flashes</td><td>Also cuts clot and heart risk</td></tr><tr><td>Paced breathing</td><td>Less effective in rigorous trials than first hoped</td><td>Can help in the moment, especially as part of CBT</td></tr></table>`,
    },
    {
      heading: "Do supplements work for hot flashes?",
      body: `<p><strong>No supplement has convincing evidence of reducing hot flashes better than placebo. ACOG's 2026 guideline says phytoestrogens and herbal supplements lack support, and The Menopause Society doesn't recommend over-the-counter supplements or cannabinoids for hot flashes.</strong></p>
<table><tr><th>Supplement</th><th>What the evidence shows</th><th>Safety notes</th></tr><tr><td>Black cohosh</td><td>Not better than placebo in better-quality trials</td><td>Rare reports of liver injury</td></tr><tr><td>Soy isoflavones</td><td>Small, inconsistent effects</td><td>Generally safe as food</td></tr><tr><td>Red clover</td><td>Not consistently effective</td><td>Contains plant estrogens</td></tr><tr><td>Evening primrose oil</td><td>Not effective</td><td>May interact with blood thinners</td></tr><tr><td>"Menopause blends"</td><td>Untested combinations</td><td>Doses and contents vary; supplements aren't held to drug standards</td></tr><tr><td>Cannabis products</td><td>Not recommended</td><td>Effects on sleep and mood vary</td></tr></table>
<p>The placebo response in hot flash trials is substantial - often a 20-30% reduction - which explains why many products seem to help at first. If you take supplements, tell your clinician, as some interact with medications.</p>`,
    },
    {
      heading: "What is a stellate ganglion block for hot flashes?",
      body: `<p><strong>A stellate ganglion block is an injection of local anesthetic near a bundle of nerves in the neck. Small studies suggest it can reduce hot flashes for weeks to months, and The Menopause Society lists it among options with some evidence. It's a procedure done by a pain specialist and is usually considered when other treatments aren't suitable.</strong></p>
<p>It's most often discussed for women who can't use hormones, such as some breast cancer survivors. Availability, insurance coverage and long-term data are limited, so it's a specialist option rather than a routine one.</p>`,
    },
    {
      heading: "How do you stop night sweats?",
      body: `<p><strong>Night sweats are hot flashes during sleep, so the same treatments work - hormone therapy is most effective, and elinzanetant improved sleep disturbance in its trials; gabapentin at bedtime is another option. Bedroom cooling, moisture-wicking bedding and limiting evening alcohol help too.</strong></p>
<h3>A practical night-sweat plan</h3>
<ol><li><strong>Cool the room:</strong> around 65°F (18°C), a fan, layered bedding you can kick off.</li><li><strong>Dress for it:</strong> moisture-wicking sleepwear; keep a spare set and towel by the bed.</li><li><strong>Cut evening triggers:</strong> alcohol, heavy or spicy dinners, hot baths right before bed.</li><li><strong>Treat the cause:</strong> talk to a clinician about HRT or non-hormonal options - most effective step for frequent night sweats.</li><li><strong>Treat the insomnia, too:</strong> CBT for insomnia (CBT-I) helps when poor sleep persists even after sweats improve.</li></ol>
<h3>When night sweats aren't menopause</h3>
<p>See a clinician promptly if night sweats come with fever, unexplained weight loss, swollen lymph nodes, a persistent cough or drenching sweats that started suddenly - these can signal infection or other conditions. Some medications (including certain antidepressants and diabetes medicines) and an overactive thyroid can also cause sweating.</p>`,
    },
    {
      heading: "What is the best hot flash treatment after breast cancer?",
      body: `<p><strong>Women with a history of breast cancer are generally treated without estrogen. Options include venlafaxine and other SNRIs, gabapentin, CBT and clinical hypnosis, and - with oncology input - fezolinetant. An application for elinzanetant specifically for hot flashes caused by breast cancer endocrine therapy is under FDA priority review.</strong></p>
<p>Hot flashes can be severe after breast cancer, especially with tamoxifen, aromatase inhibitors or treatment-induced menopause, and some women stop their cancer therapy because of them. Key points:</p>
<ul><li><strong>Tamoxifen users:</strong> avoid strong CYP2D6 inhibitors such as paroxetine and fluoxetine; venlafaxine is a common choice.</li><li><strong>Non-drug options</strong> - CBT and hypnosis - have particularly strong appeal and evidence in this group.</li><li><strong>Coordinate with your oncology team</strong> before starting any new treatment.</li></ul>`,
    },
    {
      heading: "Can you treat hot flashes in perimenopause?",
      body: `<p><strong>Yes. Hot flashes often start while periods are still happening, and treatment doesn't need to wait for menopause. Options include HRT with a cyclical progestogen or a hormonal IUD, low-dose combined hormonal contraception for suitable women who also need birth control, and the non-hormonal options above.</strong></p>
<p>Women who start having hot flashes early in the transition tend to have them longest, according to SWAN - another reason not to wait. Remember that menopausal HRT isn't contraception. See <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a> and <a href="/articles/perimenopause-symptoms">perimenopause symptoms</a>.</p>`,
    },
    {
      heading: "Do hot flashes come back after stopping HRT?",
      body: `<p><strong>They can. Roughly half of women have hot flashes return after stopping hormone therapy, whether they stop suddenly or taper. If symptoms return, restarting HRT or switching to a non-hormonal option are both reasonable.</strong></p>
<p>There's no mandatory stop date for HRT; current guidance supports individualized decisions about duration, with yearly reviews. Some women try a gradual reduction to see whether they still need treatment. If hot flashes return and are bothersome, many clinicians consider continuing therapy appropriate for healthy women who understand the risks. ACP notes that the optimal duration isn't known, with three to five years common in practice.</p>`,
    },
    {
      heading: "How fast does each hot flash treatment work?",
      body: `<p><strong>The new neurokinin drugs act fastest - fezolinetant and elinzanetant showed effects within the first one to four weeks. Estrogen typically helps within two to four weeks with full effect by about 12 weeks. Antidepressants and gabapentin usually work within a few weeks; CBT and hypnosis build over the course of the program.</strong></p>
<table><tr><th>Treatment</th><th>First improvement</th><th>Judge it by</th></tr><tr><td>Estrogen</td><td>2-4 weeks</td><td>8-12 weeks</td></tr><tr><td>Fezolinetant</td><td>Often within week 1</td><td>4-12 weeks</td></tr><tr><td>Elinzanetant</td><td>Within weeks 1-4</td><td>4-12 weeks</td></tr><tr><td>SNRIs/SSRIs</td><td>1-4 weeks</td><td>8-12 weeks</td></tr><tr><td>Gabapentin</td><td>1-4 weeks (dose is built up)</td><td>8-12 weeks</td></tr><tr><td>CBT</td><td>During the 4-6 session course</td><td>End of course</td></tr><tr><td>Clinical hypnosis</td><td>During the ~5-week program</td><td>End of program</td></tr></table>
<p>ACP's guideline advises assessing whether treatment is working after 8 to 12 weeks, then adjusting the dose or switching if needed.</p>`,
    },
    {
      heading: "Hot flash treatments: side effects compared",
      body: `<p><strong>Every effective treatment has trade-offs. Estrogen's main risks are clots, stroke and (with combined therapy over time) breast cancer; the neurokinin drugs need liver monitoring; antidepressants can affect sexual function; gabapentin causes drowsiness; oxybutynin causes dry mouth and may affect cognition with long-term use in older adults.</strong></p>
<table><tr><th>Treatment</th><th>Common side effects</th><th>Serious but uncommon risks</th></tr><tr><td>Estrogen (+ progestogen)</td><td>Breast tenderness, bloating, spotting</td><td>Blood clots, stroke; breast cancer with longer combined use; endometrial cancer without progestogen</td></tr><tr><td>Fezolinetant</td><td>Abdominal pain, diarrhea, insomnia, back pain</td><td>Liver injury (boxed warning)</td></tr><tr><td>Elinzanetant</td><td>Sleepiness, fatigue, headache, dizziness</td><td>Liver enzyme elevations</td></tr><tr><td>SSRIs/SNRIs</td><td>Nausea, dry mouth, sexual side effects, sleep changes</td><td>Discontinuation symptoms if stopped abruptly; drug interactions (e.g., tamoxifen)</td></tr><tr><td>Gabapentin</td><td>Drowsiness, dizziness, unsteadiness</td><td>Falls in older adults; misuse potential</td></tr><tr><td>Oxybutynin</td><td>Dry mouth, constipation, blurred vision</td><td>Possible cognitive effects with long-term use in older adults</td></tr><tr><td>CBT, hypnosis</td><td>None significant</td><td>-</td></tr></table>`,
    },
    {
      heading: "Can you combine hot flash treatments?",
      body: `<p><strong>Sometimes. CBT, hypnosis and lifestyle measures can be combined with any medication. Adding vaginal estrogen to systemic HRT is common. Combining two drug treatments for hot flashes - for example estrogen with a neurokinin drug - hasn't been well studied and should only be done under a clinician's guidance.</strong></p>
<p>Common, sensible combinations include HRT plus CBT for insomnia; an SNRI plus CBT for women with hot flashes and anxiety; and any treatment plus bedroom cooling and trigger management. If one medicine helps only partly, clinicians usually adjust the dose or switch before adding a second drug.</p>`,
    },
    {
      heading: "Are hot flashes worse after a hysterectomy?",
      body: `<p><strong>If both ovaries are removed before natural menopause, hot flashes often start suddenly and can be severe, because estrogen drops abruptly. A hysterectomy that keeps the ovaries doesn't cause immediate menopause, though some women reach menopause a little earlier afterward.</strong></p>
<p>Women without a uterus can use estrogen alone - no progestogen is needed - which simplifies treatment. For women whose ovaries are removed before about 45, hormone therapy is generally recommended until around the average age of menopause, both for symptoms and to protect bones and the heart. See <a href="/articles/how-to-get-hrt-online">how to get HRT online</a> for HRT after hysterectomy.</p>`,
    },
    {
      heading: "How do hot flashes affect sleep, mood and brain fog?",
      body: `<p><strong>Night sweats fragment sleep, and poor sleep worsens mood, concentration and memory - so treating hot flashes often improves "brain fog," irritability and energy too. ACOG's 2026 guideline addresses hot flashes, sleep and mood together for this reason.</strong></p>
<p>Many women don't connect their 3 a.m. wake-ups with hot flashes, because they don't remember the sweat - only the waking. If you wake frequently, feel unrested and notice foggy days, ask whether night-time hot flashes could be the driver. Effective treatment of hot flashes, plus CBT-I for persistent insomnia, is often the most effective "brain fog" treatment there is.</p>
<p>That said, new depression, severe anxiety or memory problems deserve their own evaluation - not every midlife symptom is hormonal.</p>`,
    },
    {
      heading: "How can you manage hot flashes at work?",
      body: `<p><strong>Practical changes help: dress in layers, keep a desk fan and cold water, sit near a window or vent, schedule demanding tasks for times you feel best, and treat night sweats so you're not exhausted. Many employers now offer menopause support; it's reasonable to ask for simple adjustments.</strong></p>
<ul><li><strong>Temperature control:</strong> a personal fan, access to a cooler workspace, breathable uniforms.</li><li><strong>Flexibility:</strong> short breaks during a bad flash; flexible start times after poor nights.</li><li><strong>Meetings:</strong> water, layers, and a seat near the door if you sometimes need to step out.</li><li><strong>Treatment:</strong> the single biggest workplace intervention is effective treatment - the Mayo Clinic study's $1.8 billion in lost work time reflects how many women go without.</li></ul>
<p>Check your employer's benefits too: some health plans and employee programs now cover menopause care, including virtual clinics.</p>`,
    },
    {
      heading: "Does acupuncture help hot flashes?",
      body: `<p><strong>The evidence is mixed. Some trials show modest improvement, but acupuncture often performs similarly to sham acupuncture, suggesting much of the benefit may be non-specific. ACOG's 2026 guideline gives acupuncture a conditional recommendation; it's low-risk when done by a licensed practitioner.</strong></p>
<p>If you'd like to try it, treat it as a time-limited experiment - for example, a course of sessions over several weeks - and track your hot flashes to see whether it's worth continuing. It shouldn't delay more effective treatment if symptoms are severe.</p>`,
    },
    {
      heading: "Can women over 65 still get treatment for hot flashes?",
      body: `<p><strong>Yes. Some women still have bothersome hot flashes in their late 60s and beyond. Continuing hormone therapy past 65 can be reasonable for some healthy women after individual review, and non-hormonal options remain available - though oxybutynin and high-dose gabapentin need extra care in older adults.</strong></p>
<p>Starting systemic HRT for the first time after 60, or more than 10 years after menopause, is approached more cautiously because baseline risks of stroke and heart disease are higher. Fezolinetant, elinzanetant, SNRIs, CBT and hypnosis are all options to discuss. Medicare drug plans commonly cover generic estradiol, SSRIs/SNRIs and gabapentin; coverage of the newer brand drugs varies.</p>`,
    },
    {
      heading: "Which hot flash treatment is right for you?",
      body: `<p><strong>The right treatment depends mainly on four things: whether you can safely take estrogen, how severe your symptoms are, what else you're dealing with (sleep, mood, vaginal symptoms, weight), and your preferences about medication. This decision guide shows how clinicians commonly match treatments to situations.</strong></p>
<table><tr><th>Your situation</th><th>Options clinicians commonly consider first</th></tr><tr><td>Healthy, under 60 or within 10 years of menopause, bothersome hot flashes</td><td>Estrogen therapy (transdermal often preferred), with progestogen if you have a uterus</td></tr><tr><td>Hot flashes plus vaginal dryness</td><td>Systemic HRT; add <a href="/articles/vaginal-estrogen">vaginal estrogen</a> if needed</td></tr><tr><td>Can't take estrogen (clot, stroke, some cancers)</td><td>SNRI or SSRI, fezolinetant or elinzanetant, gabapentin, CBT, hypnosis</td></tr><tr><td>Hot flashes plus depression or anxiety</td><td>SNRI/SSRI (treats both), or HRT plus mental health care</td></tr><tr><td>Night sweats wrecking sleep</td><td>HRT, elinzanetant, or bedtime gabapentin; CBT-I</td></tr><tr><td>Breast cancer survivor</td><td>Venlafaxine, gabapentin, CBT, hypnosis; fezolinetant with oncology input</td></tr><tr><td>On tamoxifen</td><td>Avoid paroxetine and fluoxetine; venlafaxine often preferred</td></tr><tr><td>Prefer no medication</td><td>CBT, clinical hypnosis, trigger management, weight loss if relevant</td></tr><tr><td>Still having periods and need contraception</td><td>Low-dose combined hormonal contraception (if suitable) or HRT plus a hormonal IUD</td></tr><tr><td>Over 65 with ongoing hot flashes</td><td>Individual review; continuing HRT may be reasonable for some; non-hormonal options; avoid long-term oxybutynin</td></tr></table>`,
    },
    {
      heading: "How much do hot flash treatments cost?",
      body: `<p><strong>Generic estradiol and progesterone, generic SSRIs/SNRIs and gabapentin are usually inexpensive, especially with insurance. Veozah and Lynkuet are brand-only and can be expensive without coverage, often requiring prior authorization. CBT and hypnosis costs depend on whether you use a therapist, group program or self-guided app or book.</strong></p>
<table><tr><th>Treatment</th><th>Typical cost picture</th></tr><tr><td>Generic estradiol pill or patch + progesterone</td><td>Usually low copays; online cash-pay plans bundle care and medication - see <a href="/articles/online-hrt-cost">online HRT cost</a></td></tr><tr><td>Brand estrogen products</td><td>Higher; coverage varies</td></tr><tr><td>Fezolinetant (Veozah), elinzanetant (Lynkuet)</td><td>Brand-only; coverage and prior authorization vary; manufacturer savings programs may help commercially insured patients</td></tr><tr><td>Generic SSRIs/SNRIs, gabapentin</td><td>Usually inexpensive</td></tr><tr><td>Low-dose paroxetine 7.5 mg (brand)</td><td>Higher than generic paroxetine at other doses</td></tr><tr><td>CBT or hypnosis</td><td>Therapist fees vary; self-guided programs are cheapest</td></tr><tr><td>Supplements</td><td>Ongoing cost without proven benefit</td></tr></table>
<p>Prices change and vary by plan and pharmacy; check your formulary and compare cash prices before filling.</p>`,
    },
    {
      heading: "Can you get hot flash treatment online?",
      body: `<p><strong>Yes. Licensed telehealth services prescribe HRT for hot flashes after an online intake or video visit, and some also prescribe non-hormonal options. Winona and Gala focus on estrogen and progesterone delivered to your door; Midi Health's clinicians can prescribe hormonal and non-hormonal treatments to your own pharmacy, often billed to insurance.</strong></p>
<table><tr><th>Provider</th><th>Hot flash treatment</th><th>How you pay</th></tr><tr><td><a href="/reviews/winona">Winona</a></td><td>Estradiol tablets, patch or cream, progesterone; physician-reviewed intake, no video visit</td><td>Cash; listed from about $39-$149 per product</td></tr><tr><td><a href="/reviews/gala">Gala</a></td><td>Estradiol pill or patch, progesterone; flat plan</td><td>Cash; advertised from $79/month</td></tr><tr><td><a href="/reviews/midi">Midi Health</a></td><td>Hormonal and non-hormonal options via video visits; prescriptions to your pharmacy</td><td>Most commercial PPO plans; self-pay available</td></tr></table>
<p>For non-hormonal brand drugs such as Veozah and Lynkuet, a service that sends prescriptions to your pharmacy and can order liver tests is usually the better fit. Compare providers in <a href="/articles/best-online-hrt-providers-compared">our online HRT comparison</a> and see <a href="/articles/how-to-get-hrt-online">how to get HRT online</a>.</p>`,
    },
    {
      heading: "How should you track hot flashes before seeing a clinician?",
      body: `<p><strong>Keep a simple diary for one to two weeks: how many hot flashes and night sweats you have, how severe they are, what seemed to trigger them, and how they affect sleep, work and mood. It makes your appointment faster and helps you judge whether treatment is working.</strong></p>
<table><tr><th>Track</th><th>Example</th></tr><tr><td>Number per day and night</td><td>8 daytime, 3 night sweats</td></tr><tr><td>Severity (mild, moderate, severe)</td><td>Moderate: sweating, had to stop what I was doing</td></tr><tr><td>Possible triggers</td><td>Wine with dinner, warm meeting room</td></tr><tr><td>Sleep</td><td>Woke 3 times, 5 hours total</td></tr><tr><td>Impact</td><td>Left a meeting; irritable; low energy</td></tr><tr><td>Periods</td><td>Last period date; any heavy or unusual bleeding</td></tr></table>
<p>Moderate-to-severe frequency is what trials measured, so your diary lines up with how treatments were tested. Reassess after 8 to 12 weeks of any treatment, as ACP recommends.</p>`,
    },
    {
      heading: "What questions should you ask about hot flash treatment?",
      body: `<p><strong>Ask whether you're a candidate for hormone therapy, which form suits you, what non-hormonal options fit your history, how quickly to expect results, what monitoring you'll need, and how long treatment should last.</strong></p>
<ul><li>Am I a good candidate for estrogen, and would a patch or gel be safer for me than a pill?</li><li>Do I need a progestogen, and which one?</li><li>If not hormones, which non-hormonal option fits my health and medications?</li><li>For Veozah or Lynkuet: what's my liver-test schedule, and will insurance cover it?</li><li>How soon should I notice improvement, and when do we reassess?</li><li>What side effects should I report?</li><li>How long might I need treatment, and how would we stop?</li><li>Could anything else be causing my sweats?</li></ul>`,
    },
    {
      heading: "Are hot flashes linked to heart disease or other health risks?",
      body: `<p><strong>Research, including from SWAN, has linked frequent or persistent hot flashes to less favorable cardiovascular risk markers and, in some studies, higher cardiovascular risk. That doesn't mean hot flashes cause heart disease, but it's a good reason to check blood pressure, cholesterol and blood sugar in midlife.</strong></p>
<p>Hot flashes, and the sleep loss from night sweats, are also linked to mood symptoms and reduced quality of life. Treating them is about more than comfort. Whatever treatment you choose, menopause is a good time for a full heart-health check - see our <a href="/articles/menopause-complete-guide">complete menopause guide</a>.</p>`,
    },
    {
      heading: "Hot flashes: myths vs facts",
      body: `<table><tr><th>Myth</th><th>Fact</th></tr><tr><td>Hot flashes only last a year or two</td><td>Median 7.4 years for women with frequent symptoms in SWAN; longer for many</td></tr><tr><td>You just have to tough it out</td><td>Effective treatments exist; most women improve within weeks</td></tr><tr><td>HRT is too dangerous for anyone</td><td>For most healthy women near menopause, guidelines judge benefits to outweigh risks</td></tr><tr><td>Natural supplements work as well as medicine</td><td>No supplement beats placebo convincingly</td></tr><tr><td>Non-hormonal means not effective</td><td>Fezolinetant, elinzanetant and SNRIs significantly reduce hot flashes</td></tr><tr><td>Antidepressants for hot flashes mean you're depressed</td><td>They reduce hot flashes independently of mood</td></tr><tr><td>Once you stop HRT, you're done with hot flashes</td><td>About half of women have them return</td></tr><tr><td>Night sweats are always menopause</td><td>Infections, medications and other conditions can cause them too</td></tr></table>`,
    },
    {
      heading: "Hot flash glossary",
      body: `<ul><li><strong>Vasomotor symptoms (VMS):</strong> hot flashes and night sweats.</li><li><strong>Hot flash / hot flush:</strong> a sudden feeling of heat with flushing and sweating.</li><li><strong>Night sweats:</strong> hot flashes during sleep.</li><li><strong>KNDy neurons:</strong> hypothalamic neurons involved in temperature regulation that become overactive as estrogen falls.</li><li><strong>Neurokinin B / NK3 receptor:</strong> the signaling pathway targeted by fezolinetant and elinzanetant.</li><li><strong>Thermoneutral zone:</strong> the range of core temperature the body tolerates without sweating or shivering; it narrows in menopause.</li><li><strong>Systemic HRT:</strong> estrogen that reaches the whole body (pill, patch, gel, spray, ring).</li><li><strong>Progestogen:</strong> progesterone or a progestin, added to protect the uterine lining.</li><li><strong>SSRI/SNRI:</strong> antidepressant classes that also reduce hot flashes.</li><li><strong>CBT / CBT-I:</strong> cognitive behavioral therapy, and its insomnia-focused version.</li><li><strong>SWAN:</strong> the Study of Women's Health Across the Nation, a long-running US study of the menopause transition.</li></ul>`,
    },
    {
      heading: "How we researched this guide",
      body: `<p><strong>This guide is based on the October 2026 ACOG and ACP guidelines, FDA announcements, peer-reviewed trials and The Menopause Society's position statements, checked on November 2, 2026.</strong> Effect sizes come from the named trials and are averages; your response may differ. We don't recommend doses or specific products, and we flag where sources differ. HRT Women earns commissions from some providers; that doesn't change our editorial conclusions. See our <a href="/medical-review-policy">medical review policy</a>.</p>`,
    },
    {
      heading: "Final verdict & next steps",
      body: `<p><strong>Hot flashes are common, long-lasting and highly treatable. In 2026, the guidance is clearer than it has been in two decades: estrogen therapy first for women who can take it, and a strong set of non-hormonal options - including two new targeted drugs - for women who can't or prefer not to.</strong></p>
<ol><li><strong>Track your symptoms</strong> for one to two weeks.</li><li><strong>Check your eligibility</strong> for hormone therapy - read <a href="/articles/is-hrt-safe">is HRT safe?</a> and <a href="/articles/what-is-hrt">what is HRT?</a></li><li><strong>Talk to a clinician</strong> - in person or online - about the options in the ranking table.</li><li><strong>Give treatment 8 to 12 weeks,</strong> then reassess.</li><li><strong>Skip supplements</strong> marketed for hot flashes.</li><li><strong>Don't ignore red flags:</strong> sweats with fever, weight loss or swollen glands need evaluation.</li></ol>
<p>Ready to compare providers? See our <a href="/">online HRT rankings</a>.</p>
<p><em>This article is general information, not medical advice. A licensed clinician should decide which treatment, if any, is right for you.</em></p>`,
    },
    {
      heading: "References & further reading",
      body: `<ul><li>${ext(SRC.acog, "ACOG: Expanded recommendations for management of menopause symptoms (Oct 2026)")}</li><li>${ext(SRC.acogJournal, "ACOG Clinical Practice Guideline: Management of Menopause-Related Vasomotor, Sleep, and Mood Symptoms. Obstet Gynecol. 2026")}</li><li>${ext(SRC.acp, "ACP recommends hormonal therapy as a first-line treatment for menopausal vasomotor symptoms (Oct 2026)")}</li><li>${ext(SRC.fdaPatches, "HHS/FDA: hormone therapy labeling updates (Oct 30, 2026)")}</li><li>${ext(SRC.swan, "Avis NE, et al. Duration of menopausal vasomotor symptoms over the menopause transition. JAMA Intern Med. 2015")}</li><li>${ext(SRC.mayoWork, "Mayo Clinic: cost of menopause symptoms in the workplace (2023)")}</li><li>${ext(SRC.fezoAafp, "AAFP: fezolinetant for menopausal symptoms")}</li><li>${ext(SRC.veozahBoxed, "FDA boxed warning for Veozah liver injury (Dec 2024)")}</li><li>${ext(SRC.lynkuet, "Lynkuet (elinzanetant) FDA approval (Oct 2025)")}</li><li>${ext(SRC.nams2023, "The Menopause Society: 2023 nonhormone therapy position statement")}</li><li>${ext(SRC.nams2022, "The Menopause Society: 2022 hormone therapy position statement")}</li><li>Elkins GR, et al. Clinical hypnosis in the treatment of postmenopausal hot flashes: a randomized controlled trial. Menopause. 2013.</li></ul>`,
    },
  ],
};
