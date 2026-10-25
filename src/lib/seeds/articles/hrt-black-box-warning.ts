import type { ArticleData } from "@/lib/config";

// Deep explainer on the biggest HRT story of 2025-2026: the FDA's removal of
// most boxed ("black box") warnings from menopausal hormone therapy. Every
// fact is tied to a source linked inline (researched 2026-10-24): FDA/HHS
// releases, the FDA expert-panel page, the 2002 WHI JAMA paper, the 2024 JAMA
// WHI review, society statements (Menopause Society, ACOG via
// Breastcancer.org, SWHR), NPR/eMarketer for demand data, and AP/Penguin/
// Today/Pharmaceutical Journal for the public-figure section. Where sources
// conflict, the copy says so rather than picking a number.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  fdaPanel:
    "https://www.fda.gov/patients/fda-expert-panels/fda-expert-panel-menopause-and-hormone-replacement-therapy-women-07172025",
  axiosPanel: "https://www.axios.com/2025/07/18/fda-menopause-hormone-therapy",
  ncHR: "https://www.center4research.org/f-d-a-panel-to-reassess-hormone-therapy-warnings/",
  fdaNov:
    "https://www.fda.gov/news-events/press-announcements/hhs-advances-womens-health-removes-misleading-fda-warnings-hormone-replacement-therapy",
  hhsFact:
    "https://www.hhs.gov/press-room/fact-sheet-fda-initiates-removal-of-black-box-warnings-from-menopausal-hormone-replacement-therapy-products.html",
  fdaRequest:
    "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-requests-labeling-changes-related-safety-information-clarify-benefitrisk-considerations",
  fdaFeb:
    "https://www.fda.gov/news-events/press-announcements/fda-approves-labeling-changes-menopausal-hormone-therapy-products",
  fdaPatch:
    "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-update-estradiol-transdermal-patch-availability",
  whi2002: "https://pubmed.ncbi.nlm.nih.gov/12117397/",
  jamaWhi: "https://doi.org/10.1001/jama.2024.6542",
  nams2022: "https://doi.org/10.1097/GME.0000000000002028",
  namsComment:
    "https://menopause.org/press-releases/the-menopause-society-comments-on-the-fda-announcement-on-hormone-therapy",
  bcoReact: "https://www.breastcancer.org/news/FDA-removes-black-box-warning-HRT",
  swhr: "https://swhr.org/celebrating-the-removal-but-cautioning-the-removal-of-all-warnings-on-hrt/",
  cnn: "https://www.cnn.com/2025/11/10/health/hormone-therapy-menopause-fda-warning-wellness",
  sgo: "https://www.sgo.org/news/fda-removes-black-box-warnings-on-hormone-replacement-therapy/",
  ajmc: "https://www.ajmc.com/view/fda-to-remove-black-box-warnings-from-hrt-debate-ensues",
  npr: "https://www.npr.org/2026/03/10/nx-s1-5742817/menopause-hormone-therapy-shortages",
  emarketer:
    "https://www.emarketer.com/content/hormone-therapy-prescriptions-climb-safety-label-changes-drive-women-s-health-demand",
  berry:
    "https://www.clickondetroit.com/health/2024/05/02/halle-berry-shouts-from-the-capitol-im-in-menopause-as-she-seeks-to-end-a-stigma-and-win-funding/",
  watts: "https://www.penguin.co.uk/books/465043/dare-i-say-it-by-watts-naomi/9781785045462",
  obama: "https://www.today.com/today/amp/tdna189234",
  pj: "https://pharmaceutical-journal.com/article/news/hrt-prescribing-increases-by-370-in-past-decade",
  stat: "https://www.statnews.com/2026/01/08/hormone-therapy-menopause-history-hype",
  swan: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2110996",
  testosterone: "https://academic.oup.com/jcem/article/104/11/4597/5556103",
  uspharm: "https://www.uspharmacist.com/article/fda-asks-for-removal-of-most-hrt-black-box-warnings",
  uspstf: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening",
  fdaVeozah:
    "https://www.fda.gov/drugs/drug-safety-and-availability/fda-adds-warning-about-rare-occurrence-serious-liver-injury-use-veozah-fezolinetant-hot-flashes-due",
};

export const HRT_BLACK_BOX_WARNING: ArticleData = {
  slug: "hrt-black-box-warning-removed",
  title: "HRT's Black Box Warning Removed: What Changed, Why, and What It Means for You (2026)",
  description:
    "The FDA removed most boxed warnings from menopause hormone therapy in 2025-2026. The full story: the 2002 study behind them, what changed, what still applies, what experts say, and what it means for you.",
  category: "Safety",
  readTime: "55 min read",
  publishedAt: "2026-10-24",
  updatedAt: "2026-10-24",
  heroColor: "#FCE4EC",
  author: "HRT Women Editorial Team",
  keyTakeaways: [
    "On November 10, 2025, HHS and the FDA announced the removal of the boxed warnings about cardiovascular disease, breast cancer and probable dementia from menopausal hormone therapy; the first updated labels were approved on February 12, 2026.",
    "The boxed warning about endometrial cancer stays for systemic estrogen-alone products - women with a uterus still need a progestogen with estrogen.",
    "The warnings dated from the 2002 Women's Health Initiative, whose participants averaged age 63 and used an older hormone combination; later analyses showed risks depend heavily on age, timing and type of therapy.",
    "Medical societies welcomed the change for low-dose vaginal estrogen, but ACOG, cancer societies and others stress that systemic HRT still carries individual risks - the warnings moved, the risks did not vanish.",
    "Demand surged after the change: prescriptions rose and some estradiol patches became hard to find in 2026.",
  ],
  sections: [
    {
      heading: "What happened to HRT's black box warning?",
      body: `<p><strong>On November 10, 2025, the US Department of Health and Human Services and the FDA announced they would remove the "black box" warnings about cardiovascular disease, breast cancer and probable dementia from menopausal hormone therapy products. On February 12, 2026, the FDA approved the first six updated labels. A boxed warning about endometrial cancer remains for systemic estrogen-alone products.</strong></p>
<p>For more than two decades, every estrogen product for menopause in the US carried the FDA's most serious form of warning: a black-bordered box at the top of the prescribing information. Those warnings traced back to a single landmark study, the Women's Health Initiative (WHI), whose first results in 2002 transformed how doctors and women thought about hormone therapy. Prescribing collapsed almost overnight and never fully recovered.</p>
<p>The ${ext(SRC.fdaNov, "November 2025 announcement")} reversed most of that. FDA Commissioner Marty Makary and HHS Secretary Robert F. Kennedy Jr. presented it as a correction of outdated, overstated risk messaging; many menopause specialists called it long overdue; others, including some cancer specialists and researchers, argued the process was rushed and that the change could be misread as "HRT is now risk-free."</p>
<p>This guide explains the whole story in plain language: what a boxed warning is, why HRT got one, what the 2002 study actually found, what changed in 2025-2026 and what didn't, what the major medical societies said, where the genuine scientific disagreements are, and - most importantly - what it means for you if you're taking HRT, considering it, or have a reason to avoid it.</p>
<h3>The story in one timeline</h3>
<table><tr><th>Date</th><th>Event</th></tr><tr><td><strong>July 2002</strong></td><td>WHI stops its estrogen-plus-progestin trial early and ${ext(SRC.whi2002, "publishes results in <em>JAMA</em>")} showing more breast cancer, heart disease, stroke and blood clots; boxed warnings follow on estrogen products</td></tr><tr><td><strong>2002-2020s</strong></td><td>Hormone therapy use falls dramatically; later WHI analyses and other research show risks vary by age, timing and type of therapy</td></tr><tr><td><strong>May 2024</strong></td><td>Actress Halle Berry joins senators at the US Capitol to push for menopause research funding, part of a wave of public advocacy</td></tr><tr><td><strong>July 17, 2025</strong></td><td>The FDA hosts an ${ext(SRC.fdaPanel, "expert panel on menopause and hormone therapy")}</td></tr><tr><td><strong>November 10, 2025</strong></td><td>HHS and the FDA announce removal of the cardiovascular, breast cancer and dementia boxed warnings; the FDA ${ext(SRC.fdaRequest, "requests labeling changes")} from manufacturers</td></tr><tr><td><strong>February 12, 2026</strong></td><td>The FDA ${ext(SRC.fdaFeb, "approves the first six updated labels")}, with more to follow</td></tr><tr><td><strong>2026</strong></td><td>Prescriptions rise; some estradiol patches become hard to find; the FDA ${ext(SRC.fdaPatch, "reports patch supply expanding")}</td></tr></table>`,
    },
    {
      heading: "What is a black box warning?",
      body: `<p><strong>A black box warning - officially a "boxed warning" - is the FDA's most prominent safety warning on a prescription drug label. It appears in a black border at the top of the prescribing information to highlight serious or life-threatening risks that prescribers and patients should weigh before using the medicine.</strong></p>
<p>Boxed warnings don't mean a drug is banned or that everyone who takes it will be harmed. Many widely used medicines carry them - including some antidepressants, some diabetes medicines and some anti-inflammatory drugs. The box is a signal to slow down and consider the risk carefully.</p>
<h3>How boxed warnings shape behaviour</h3>
<p>Because the box is the first thing a prescriber sees - and because it is printed on the patient information leaflet that comes in the pharmacy bag - it has a powerful effect on how a medicine is perceived. For menopausal hormone therapy, the boxed warning listed breast cancer, heart attacks, strokes, blood clots and probable dementia. For many women and doctors, that list became the defining fact about HRT, often without the context of how large or small those risks were, or for whom.</p>
<h3>What a boxed warning is not</h3>
<ul><li>It is not the only safety information - the full prescribing information contains detailed warnings, precautions and contraindications in other sections.</li><li>It does not tailor risk to the individual - it applies the same message to a 48-year-old with severe hot flashes and a 70-year-old starting therapy for the first time.</li><li>Removing it does not remove the risks - those still appear elsewhere in the label, as the FDA's own announcement emphasises.</li></ul>
<p>That last point is the most important thing to understand about the 2025-2026 change.</p>`,
    },
    {
      heading: "A short history of hormone therapy in America",
      body: `<p><strong>Hormone therapy has swung between enthusiasm and fear several times since estrogen products became available in the mid-20th century: heavy marketing in the 1960s, an endometrial cancer scare in the 1970s, peak use in the 1990s, a collapse after 2002, and a partial rehabilitation culminating in the 2025-2026 label changes.</strong></p>
<h3>1940s-1960s: estrogen goes mainstream</h3>
<p>Estrogen products for menopause have been prescribed in the US since the 1940s. In 1966, gynecologist Robert Wilson's bestselling book <em>Feminine Forever</em> promoted estrogen as a way to stay youthful; it was later revealed that its writing and promotion had been funded by the manufacturer of Premarin, as ${ext(SRC.stat, "STAT")} has recounted. Estrogen use climbed sharply.</p>
<h3>1970s: the endometrial cancer scare</h3>
<p>In the mid-1970s, studies found that women with a uterus who took estrogen alone ("unopposed" estrogen) had a several-fold higher risk of endometrial cancer - estimates ranged from about four to eight times higher. Estrogen use dropped steeply. The solution was to add a progestogen to protect the uterine lining, which became standard for women with a uterus - and is why the endometrial cancer boxed warning survives today.</p>
<h3>1980s-1990s: the heart-protection era</h3>
<p>Observational studies suggested women taking estrogen had less heart disease, and hormone therapy was widely prescribed for prevention as well as symptoms. But observational studies can mislead: women who chose hormone therapy tended to be healthier, wealthier and more health-conscious. The HERS trial, published in 1998, found that hormone therapy did not reduce heart events in women who already had heart disease - an early sign that the prevention story was more complicated.</p>
<h3>2002-2003: the WHI and the boxed warnings</h3>
<p>The 2002 WHI results showed combined hormone therapy did not prevent heart disease in a randomized trial and increased several serious risks. In 2003 the FDA required boxed warnings on menopausal hormone therapy products. Use fell dramatically.</p>
<h3>2000s-2020s: refining the picture</h3>
<p>Re-analyses by age and time since menopause, long-term WHI follow-up, the estrogen-alone results, and research on transdermal routes and micronized progesterone led professional societies to recommend individualized use, particularly for women under 60 or within 10 years of menopause. But the boxed warnings stayed - and many women and doctors continued to treat HRT as dangerous.</p>
<h3>2024-2026: advocacy and regulatory change</h3>
<p>Public advocacy, menopause-focused clinics and a new generation of clinicians pushed for change. The FDA's 2025 expert panel and November announcement, followed by the first label approvals in February 2026, closed this chapter - for now.</p>`,
    },
    {
      heading: "Why did HRT get a black box warning in the first place?",
      body: `<p><strong>HRT's boxed warnings came from the Women's Health Initiative, a huge US study whose estrogen-plus-progestin trial was stopped early in 2002 after finding more breast cancers, heart attacks, strokes and blood clots in women taking hormones than in women taking a placebo.</strong></p>
<h3>Hormone therapy before 2002</h3>
<p>Through the 1990s, hormone therapy was among the most prescribed medicines in the US. Observational studies had suggested women taking estrogen had less heart disease, and many doctors prescribed it not only for hot flashes but to prevent heart disease and other conditions of ageing. A JAMA study cited by ${ext(SRC.emarketer, "eMarketer")} found that 27% of postmenopausal women took hormone therapy in 1999.</p>
<h3>The Women's Health Initiative</h3>
<p>The WHI was designed to test, in randomized trials, whether hormone therapy actually prevented chronic disease. It enrolled tens of thousands of postmenopausal women aged 50 to 79. One trial gave women with a uterus a combination of conjugated equine estrogens (0.625 mg/day) and medroxyprogesterone acetate (2.5 mg/day), or a placebo. A second trial gave women who had had a hysterectomy estrogen alone, or a placebo.</p>
<h3>What the 2002 results showed</h3>
<p>The estrogen-plus-progestin trial was stopped after an average of about 5.2 years because the risks crossed a pre-set safety threshold. According to the ${ext(SRC.whi2002, "principal results published in <em>JAMA</em>")}, per 10,000 women per year, those taking hormones had:</p>
<table><tr><th>Outcome</th><th>Difference per 10,000 women per year (hormones vs placebo)</th></tr><tr><td>Coronary heart disease events</td><td>7 more</td></tr><tr><td>Strokes</td><td>8 more</td></tr><tr><td>Pulmonary embolisms (blood clots in the lung)</td><td>8 more</td></tr><tr><td>Invasive breast cancers</td><td>8 more</td></tr><tr><td>Colorectal cancers</td><td>6 fewer</td></tr><tr><td>Hip fractures</td><td>5 fewer</td></tr><tr><td>Deaths from all causes</td><td>No significant difference during the trial</td></tr></table>
<p>The headlines focused on the relative increases - a 26% higher risk of breast cancer, for example - which sounded alarming. The absolute numbers, in the table above, were small: a handful of extra events per 10,000 women each year. But the trial's central finding was clear: in this population, with this regimen, hormone therapy did not prevent heart disease, and the overall balance of risks and benefits did not support using it for chronic disease prevention.</p>
<h3>The reaction</h3>
<p>The impact was immediate and global. Women stopped hormone therapy en masse, doctors stopped prescribing it, medical training de-emphasised it, and the FDA added boxed warnings to estrogen products. By 2020, the same JAMA study cited above found only 4.7% of postmenopausal women were using hormone therapy - down from 27% in 1999.</p>`,
    },
    {
      heading: "What was wrong with applying the 2002 results to all women?",
      body: `<p><strong>The WHI was a well-designed trial, but its participants were mostly older women many years past menopause, it tested one specific older hormone combination, and its headline results were applied to all women of all ages. Later analyses showed risks depend heavily on age, time since menopause, and the type and route of hormones.</strong></p>
<h3>1. The women were older than typical HRT users</h3>
<p>The average WHI participant was 63 - more than a decade past the average age of menopause - and many had never had hormone therapy before. HHS's ${ext(SRC.hhsFact, "fact sheet")} on the 2025 decision cites exactly this: an average participant age of 63 and an older formulation, which it argues limits the relevance of the 2002 results to women starting therapy around menopause today. Most women seeking HRT today are in their late 40s or early 50s, with symptoms.</p>
<h3>2. The "timing hypothesis"</h3>
<p>Later analyses of the WHI and other studies found that women who started hormone therapy closer to menopause - under 60 or within about 10 years of their final period - did not show the increase in coronary heart disease seen in older women who started much later. This became known as the timing hypothesis: estrogen may be neutral or even favourable for blood vessels that are still relatively healthy, but harmful when started after atherosclerosis has developed. A ${ext(SRC.jamaWhi, "2024 review of the WHI trials in <em>JAMA</em>")} by WHI investigators concluded that hormone therapy is appropriate for managing menopausal symptoms in early menopause, while it should not be used to prevent chronic disease.</p>
<h3>3. Estrogen alone behaved differently</h3>
<p>The estrogen-alone trial in women without a uterus did not show the same increase in breast cancer. In long-term follow-up, women who took estrogen alone had a <em>lower</em> rate of breast cancer than those on placebo. This suggested that the progestin in the combined regimen, medroxyprogesterone acetate, played an important role in the breast cancer finding - and it is one reason many clinicians today prefer micronized progesterone, although direct trial evidence comparing the two is limited.</p>
<h3>4. Different hormones and routes</h3>
<p>WHI used oral conjugated equine estrogens. Many women today use estradiol - often through the skin as a patch, gel or spray. Observational studies suggest transdermal estrogen carries a lower risk of blood clots than oral estrogen because it avoids the first pass through the liver. The WHI did not test transdermal estradiol or micronized progesterone.</p>
<h3>5. Relative vs absolute risk</h3>
<p>Much of the fear came from how risks were communicated. A "26% increase" in breast cancer risk sounds very different from "about 8 extra cases per 10,000 women per year." Both are accurate; only one tells an individual woman how much her risk might change.</p>
<h3>What didn't change</h3>
<p>None of this means the WHI was wrong. Its core findings still stand: hormone therapy should not be used to prevent heart disease or dementia, starting it at older ages carries greater risk, and combined therapy is associated with a small increase in breast cancer risk with longer use. The debate in 2025 was never about whether HRT has risks - it was about whether a one-size-fits-all boxed warning accurately described those risks for the women most likely to use it.</p>`,
    },
    {
      heading: "What did the WHI estrogen-alone trial find?",
      body: `<p><strong>The WHI's second trial, in women who had had a hysterectomy, compared estrogen alone with placebo. It was stopped early in 2004, mainly because of an increase in stroke, but it did not show the increase in breast cancer seen with combined therapy - and in long-term follow-up, breast cancer was less common in the estrogen-alone group.</strong></p>
<p>This trial is often overlooked in public discussion of HRT, but it reshaped the scientific debate in three ways:</p>
<ul><li><strong>Breast cancer:</strong> without the progestin, there was no increase in breast cancer, and long-term follow-up found fewer cases than with placebo - pointing to the progestin component of the combined regimen as an important factor.</li><li><strong>Heart disease:</strong> overall there was no significant effect on coronary heart disease, and analyses by age suggested younger women fared better than older women.</li><li><strong>Stroke and clots:</strong> risks were increased, consistent with oral estrogen's effects - one reason today's practice favours lower doses and, for many women, transdermal routes.</li></ul>
<p>Because women without a uterus don't need a progestogen, the estrogen-alone results are the most relevant evidence for women after hysterectomy - and they are generally more reassuring than the combined-therapy results. WHI investigators summarised the long-term findings of both trials in the ${ext(SRC.jamaWhi, "2024 JAMA review")}.</p>`,
    },
    {
      heading: "How should you read HRT risk numbers? A worked example",
      body: `<p><strong>Look at absolute risk - how many extra cases per number of women over a period of time - rather than only the percentage increase. "About 8 extra breast cancers per 10,000 women per year" and "a 26% higher risk" describe the same WHI finding, but only the first tells you how much your own risk might change.</strong></p>
<h3>Translating the WHI numbers</h3>
<p>In the 2002 WHI results, women on combined therapy had about 8 more invasive breast cancers per 10,000 women per year than women on placebo. Spread over five years, that is roughly 40 extra cases per 10,000 women - about 0.4 percentage points. Put another way, the vast majority of women on combined therapy in the trial did not develop breast cancer because of it, while a small number did.</p>
<table><tr><th>Way of describing it</th><th>What it says</th><th>What it leaves out</th></tr><tr><td>"26% higher risk"</td><td>The relative increase</td><td>How common breast cancer is to begin with</td></tr><tr><td>"About 8 extra cases per 10,000 women per year"</td><td>The absolute increase in the trial population</td><td>That the trial population averaged 63, and used one older regimen</td></tr><tr><td>"About 0.4 percentage points over five years"</td><td>A personal-scale translation</td><td>That your own baseline risk depends on your age, genetics and other factors</td></tr></table>
<h3>Why this matters for decisions</h3>
<p>Absolute numbers let you weigh a small increase in one risk against substantial benefits - relief of severe hot flashes, better sleep, fewer fractures - in a way percentages alone can't. They also show why age matters so much: most serious events, such as strokes, are rarer in women in their 50s than in their 60s and 70s, so the same relative increase produces fewer extra events in younger women.</p>
<p>When you discuss HRT with a clinician, it's reasonable to ask: "What does this mean in numbers for someone like me?"</p>`,
    },
    {
      heading: "Why did it take more than 20 years to change the HRT warning?",
      body: `<p><strong>Label changes need strong evidence and regulatory action, and for years there was no new large trial to overturn the WHI's boxed warnings. Evidence accumulated gradually - through re-analyses, long-term follow-up and smaller trials - while concerns about liability, caution and the memory of 2002 kept the warnings in place.</strong></p>
<h3>The evidence that built up</h3>
<ul><li><strong>WHI re-analyses by age and time since menopause</strong> suggested younger women starting near menopause did not face the cardiovascular harms seen in older women.</li><li><strong>Long-term WHI follow-up</strong> showed the estrogen-alone group had fewer breast cancers than placebo, and that all-cause mortality was not increased overall.</li><li><strong>KEEPS</strong> (the Kronos Early Estrogen Prevention Study), which treated recently menopausal women, did not find that hormone therapy accelerated markers of atherosclerosis.</li><li><strong>ELITE</strong> (the Early versus Late Intervention Trial with Estradiol) found that oral estradiol slowed progression of carotid artery wall thickening in women who started within six years of menopause, but not in women who started ten or more years after - direct support for the timing hypothesis. Howard Hodis, ELITE's lead investigator, was one of the FDA's July 2025 panelists.</li><li><strong>Observational research</strong> on transdermal estrogen and micronized progesterone suggested more favourable clot and possibly breast profiles than the WHI regimen.</li></ul>
<h3>Why the label lagged</h3>
<ul><li>Removing a boxed warning is a significant regulatory step, and agencies tend to be cautious about reducing warnings.</li><li>The trials that supported the timing hypothesis were smaller and measured surrogate markers, not heart attacks and strokes directly.</li><li>The 2002 experience left a lasting institutional memory of how a widely trusted therapy turned out to have unexpected risks.</li><li>Professional guidelines evolved faster than the label: the Menopause Society's position statements had endorsed individualized HRT for younger women for years before the FDA acted.</li></ul>
<p>The 2025 decision was ultimately driven by a new FDA leadership's priorities and by sustained advocacy, as well as by the accumulated evidence - which is why both supporters and critics have strong views about it.</p>`,
    },
    {
      heading: "Why did so many women go without menopause treatment?",
      body: `<p><strong>After 2002, hormone therapy use collapsed - from 27% of postmenopausal women in 1999 to 4.7% in 2020, according to a JAMA study cited by eMarketer - while effective alternatives were limited and menopause training in medicine shrank. Many women with severe symptoms went untreated or were told to wait it out.</strong></p>
<h3>Three reasons</h3>
<ul><li><strong>Fear:</strong> the boxed warnings and headlines made both women and clinicians wary, even for women who were good candidates.</li><li><strong>Training gaps:</strong> as prescribing fell, fewer clinicians gained experience managing menopause, and many medical training programmes gave the topic little time.</li><li><strong>Under-recognition:</strong> symptoms like anxiety, joint pain, brain fog and recurrent urinary infections were often not connected to menopause, so women were sent down other diagnostic paths - as Halle Berry described when her symptoms were initially misdiagnosed.</li></ul>
<h3>The cost of untreated symptoms</h3>
<p>Frequent hot flashes can last for years - a median of ${ext(SRC.swan, "7.4 years in the SWAN study")} for women with frequent symptoms - disrupting sleep, work and relationships. Genitourinary symptoms tend to worsen without treatment. And untreated early menopause carries long-term bone and cardiovascular risks. Part of the motivation for the 2025 change was the recognition that fear had real costs too.</p>`,
    },
    {
      heading: "What happened at the FDA's July 2025 expert panel on hormone therapy?",
      body: `<p><strong>On July 17, 2025, the FDA hosted a two-hour public expert panel on menopause and hormone therapy. Most panelists argued that the boxed warnings overstated risks for women starting HRT around menopause and discouraged women from effective treatment. The panel did not vote and had no authority to change policy, but it set the stage for the November decision.</strong></p>
<h3>Who was on the panel</h3>
<p>The ${ext(SRC.fdaPanel, "FDA's event page")} lists panelists including Roberta Diaz Brinton (a neuroscientist at the University of Arizona), Kelly Casperson (urologist), Heather Hirsch (internist), Howard Hodis (cardiology professor and former executive director of The Menopause Society), Rachel Rubin (urologist), Philip Sarrel (Yale emeritus professor), James Simon (George Washington University) and Vonda Wright (orthopaedic surgeon). News coverage described the panel as roughly a dozen experts.</p>
<h3>What they argued</h3>
<ul><li>That the WHI results had been over-generalised to younger, healthier women.</li><li>That the boxed warning on <strong>low-dose vaginal estrogen</strong> - which is minimally absorbed - was particularly unjustified and deterred women from treating painful, progressive genitourinary symptoms.</li><li>That fear of HRT had left a generation of women with untreated symptoms and missed benefits for bone health.</li></ul>
<h3>Criticism of the panel itself</h3>
<p>${ext(SRC.axiosPanel, "Axios")} noted that the panel took no vote, had no authority to change policy, and was made up of mostly like-minded physicians. Critics argued that viewpoints sceptical of removing the warnings were under-represented. The FDA then opened a public docket, which, according to the ${ext(SRC.ncHR, "National Center for Health Research")}, received nearly 3,000 comments by its September 24 deadline. The American College of Obstetricians and Gynecologists argued that a brief two-hour panel should not substitute for a formal FDA advisory committee meeting.</p>
<p>Whatever one thinks of the process, the panel marked a turning point: for the first time in more than 20 years, the FDA was publicly reconsidering how hormone therapy risks were communicated.</p>`,
    },
    {
      heading: "What exactly did the FDA change in November 2025?",
      body: `<p><strong>The FDA asked manufacturers of menopausal hormone therapy to remove references to cardiovascular disease, breast cancer and probable dementia from the boxed warning, and to add information about the timing of starting therapy. The boxed warning about endometrial cancer was kept for systemic estrogen-alone products.</strong></p>
<h3>Removed from the boxed warning</h3>
<ul><li>Cardiovascular disease (including heart attack and stroke)</li><li>Breast cancer</li><li>Probable dementia</li></ul>
<h3>Kept in the boxed warning</h3>
<ul><li><strong>Endometrial cancer</strong> for systemic estrogen-alone products - estrogen without a progestogen stimulates the lining of the uterus and raises the risk of endometrial cancer in women who have a uterus.</li></ul>
<h3>Added</h3>
<ul><li>Context on the age and timing of starting therapy - reflecting evidence that the benefit-risk balance is more favourable for women who start before 60 or within 10 years of menopause.</li></ul>
<table><tr><th></th><th>Before</th><th>After the 2025-2026 changes</th></tr><tr><td><strong>Cardiovascular disease in boxed warning</strong></td><td>Yes</td><td>No (risk information remains elsewhere in the label)</td></tr><tr><td><strong>Breast cancer in boxed warning</strong></td><td>Yes</td><td>No (risk information remains elsewhere in the label)</td></tr><tr><td><strong>Probable dementia in boxed warning</strong></td><td>Yes</td><td>No (risk information remains elsewhere in the label)</td></tr><tr><td><strong>Endometrial cancer (estrogen alone)</strong></td><td>Yes</td><td>Yes - kept</td></tr><tr><td><strong>Timing of initiation</strong></td><td>Not emphasised</td><td>Added</td></tr></table>
<h3>How the FDA justified it</h3>
<p>According to the ${ext(SRC.fdaNov, "FDA's announcement")} and the ${ext(SRC.hhsFact, "HHS fact sheet")}, the decision followed a review of the scientific literature, the July expert panel, a public comment period and analyses of women who started hormone therapy within ten years of menopause. The agency argued that the 2002 WHI results, based on women averaging 63 and an older formulation, did not reflect the risks for women starting therapy around menopause today. Commissioner Makary said the change applied to both bioidentical and synthetic hormones, leaving the treatment choice to patients and their doctors. Makary and colleagues also published the rationale for the updated labeling as a viewpoint in <em>JAMA</em>.</p>
<h3>Which products were affected?</h3>
<p>The changes apply to FDA-approved menopausal hormone therapy products - estrogen pills, patches, gels, sprays, vaginal products and combination products. Manufacturers had to submit revised labels for FDA review, which is why the changes rolled out product by product during 2026 rather than all at once.</p>`,
    },
    {
      heading: "What the label change does not do",
      body: `<p><strong>The 2025-2026 change does not approve any new hormone product, does not change any drug's ingredients or doses, does not lift contraindications, does not make compounded hormones FDA-approved, and does not mean every woman should take HRT.</strong></p>
<ul><li><strong>No new approvals:</strong> the products on the market are the same; only their labeling changed.</li><li><strong>No new indications:</strong> HRT is still approved to treat menopausal symptoms and, for some products, to prevent osteoporosis - not to prevent heart disease or dementia.</li><li><strong>No change to contraindications:</strong> breast cancer, clots, stroke and the other contraindications remain.</li><li><strong>No blanket recommendation:</strong> the decision to use HRT remains individual - many women don't need or want it, and that's equally valid.</li><li><strong>No change to how prescriptions are written:</strong> HRT still requires a prescription from a licensed clinician after a medical assessment.</li></ul>`,
    },
    {
      heading: "When did the new HRT labels take effect?",
      body: `<p><strong>The FDA approved the first six updated hormone therapy labels on February 12, 2026, covering each of the four main product categories, with other products following as manufacturers' submissions were reviewed.</strong></p>
<p>The ${ext(SRC.fdaFeb, "FDA's February 2026 announcement")} said that risk statements related to cardiovascular disease, breast cancer and probable dementia had been removed from the boxed warning for the first products, which included Prometrium (micronized progesterone), Divigel (estradiol gel) and Estring (vaginal estradiol ring). At the FDA's request, 29 drug companies submitted proposed labeling changes.</p>
<h3>Why the rollout took months</h3>
<p>A drug label is a legal document. Each manufacturer has to draft the revised text, submit it, and get FDA approval before printing new patient inserts and prescribing information. Generic manufacturers generally follow the labeling of the reference product. That means for some months in 2026, two packages of similar products could carry different versions of the warning.</p>
<h3>What about compounded hormones?</h3>
<p>Compounded "bioidentical" hormones are mixed by pharmacies and are not FDA-approved, so they don't have FDA-approved labeling at all - and the label changes don't make them FDA-approved or change the concerns about their consistency and evidence. The 2025-2026 changes are about FDA-approved products. If you use a compounded product, the same questions apply as before: why compounded, and how is dosing quality assured? See <a href="/articles/bioidentical-hormones-explained">bioidentical hormones explained</a>.</p>`,
    },
    {
      heading: "What does the label change mean for pills, patches, gels and vaginal products?",
      body: `<p><strong>The label changes apply across FDA-approved forms of menopausal hormone therapy, but the risk profiles of different forms were never identical - and still aren't. The route of estrogen matters for clot risk, and low-dose vaginal products are minimally absorbed.</strong></p>
<table><tr><th>Form</th><th>What the change means</th><th>What still matters</th></tr><tr><td><strong>Estrogen pills</strong></td><td>Cardiovascular, breast cancer and dementia items removed from the boxed warning on updated labels</td><td>Oral estrogen raises clot and gallbladder risk more than skin routes</td></tr><tr><td><strong>Patches</strong></td><td>Same label change</td><td>Lower clot risk in observational studies; brand availability varied in 2026</td></tr><tr><td><strong>Gels and sprays</strong></td><td>Same label change (Divigel was among the first six updated labels)</td><td>Daily application; avoid skin contact with others until dry</td></tr><tr><td><strong>Low-dose vaginal estrogen</strong></td><td>Boxed warning concerns removed (Estring was among the first six)</td><td>Minimal absorption; suitable for most women with genitourinary symptoms</td></tr><tr><td><strong>Micronized progesterone</strong></td><td>Prometrium was among the first six updated labels</td><td>Needed for endometrial protection with systemic estrogen if you have a uterus</td></tr><tr><td><strong>Combination products</strong></td><td>Same label change</td><td>Contain both estrogen and progestogen; convenient but less flexible</td></tr></table>
<p>For a practical comparison of forms, see <a href="/articles/estrogen-patch-vs-pill">estrogen patch vs pill</a>.</p>`,
    },
    {
      heading: "Do the new HRT labels still warn about risks?",
      body: `<p><strong>Yes. The new labels no longer put cardiovascular disease, breast cancer and dementia in a black box, but those risks are still described in the Warnings and Precautions and other sections of the prescribing information. Contraindications - situations where hormone therapy should not be used - remain.</strong></p>
<p>This is easy to miss in headlines like "FDA removes warnings from HRT." The change was about <em>where and how prominently</em> risks are communicated, not about deleting safety information. The FDA's own wording referred to removing the risks from the boxed warning and adding context about timing.</p>
<h3>Contraindications that still apply</h3>
<p>Systemic hormone therapy is still generally not appropriate for women with:</p>
<ul><li>Current or past breast cancer, or other estrogen-dependent cancers</li><li>Unexplained abnormal vaginal bleeding</li><li>Current or past blood clots (deep vein thrombosis or pulmonary embolism)</li><li>Stroke or heart attack</li><li>Active liver disease</li><li>Known clotting disorders</li><li>Pregnancy</li></ul>
<p>These haven't changed, and a responsible clinician - in person or online - will still screen for them.</p>
<h3>Why the endometrial cancer warning stayed</h3>
<p>The evidence that unopposed estrogen increases endometrial cancer in women with a uterus is strong and undisputed, and the risk is preventable by taking a progestogen. Keeping it boxed sends a clear message: if you have a uterus and take systemic estrogen, you need adequate progestogen protection. The ${ext(SRC.sgo, "Society of Gynecologic Oncology")} pointed to this retained warning as a reminder that cancer considerations remain valid and that decisions must stay individualized.</p>`,
    },
    {
      heading: "What did medical experts and societies say about removing the warnings?",
      body: `<p><strong>Reactions were mixed. Menopause specialists and gynecologists broadly welcomed removing the boxed warning from low-dose vaginal estrogen; many also supported the broader change. ACOG, cancer societies and some researchers stressed that systemic HRT still carries individual risks and that the decision must remain personalised.</strong></p>
<h3>The Menopause Society</h3>
<p>The ${ext(SRC.namsComment, "Menopause Society")} said it agreed with removing the boxed warning on low-dose vaginal estrogen for genitourinary symptoms of menopause, arguing the warning may have deterred use of a safe and effective therapy for a condition affecting most menopausal women. It continued to emphasise individualized risk assessment for systemic therapy, consistent with its ${ext(SRC.nams2022, "2022 position statement")}.</p>
<h3>WHI investigators</h3>
<p>JoAnn Manson, a lead WHI investigator and past president of the Menopause Society, told ${ext(SRC.cnn, "CNN")} the labeling change was overdue - notable because she is one of the researchers whose work underpinned the original warnings. Other WHI researchers have disputed some of the broader health claims made for hormone therapy.</p>
<h3>ACOG</h3>
<p>The American College of Obstetricians and Gynecologists' president, Steven Fleischman, commended the removal for low-dose vaginal estrogen but said systemic estrogen has a different safety profile, that long-term use may still carry a slightly elevated breast cancer risk depending on age and medical history, and that the decision requires an individualized conversation between patients and clinicians, as reported by ${ext(SRC.bcoReact, "Breastcancer.org")}.</p>
<h3>Cancer specialists</h3>
<p>The American Society of Clinical Oncology stated that systemic hormone therapy remains contraindicated for people who have had breast cancer. Breast oncologists quoted by ${ext(SRC.bcoReact, "Breastcancer.org")} noted that the FDA offered no specific guidance for women with a history of breast cancer, prompting questions from patients, and that for women with a personal or family history the decision remains nuanced.</p>
<h3>Women's health advocates</h3>
<p>The ${ext(SRC.swhr, "Society for Women's Health Research")} celebrated the removal but cautioned against interpreting it as the removal of all warnings, emphasising that women still need clear information about risks.</p>
<h3>The common ground</h3>
<p>Almost every expert voice agreed on three things: low-dose vaginal estrogen should not have carried the same boxed warning as systemic therapy; systemic hormone therapy is appropriate for many healthy women with bothersome symptoms near menopause; and decisions should be individualized, not driven by fear or by marketing.</p>`,
    },
    {
      heading: "Where do the major organisations stand? A summary",
      body: `<table><tr><th>Organisation</th><th>Position on the 2025-2026 change</th></tr><tr><td><strong>FDA / HHS</strong></td><td>Removed cardiovascular, breast cancer and dementia boxed warnings; kept endometrial cancer warning for estrogen-alone; added timing context</td></tr><tr><td><strong>The Menopause Society</strong></td><td>Agreed with removing the boxed warning for low-dose vaginal estrogen; continues to recommend individualized decisions on systemic therapy</td></tr><tr><td><strong>ACOG</strong></td><td>Commended removal for low-dose vaginal estrogen; said systemic estrogen has a different safety profile and requires individualized counselling; criticised use of an expert panel in place of an advisory committee</td></tr><tr><td><strong>ASCO</strong></td><td>Systemic HRT remains contraindicated after breast cancer</td></tr><tr><td><strong>Society of Gynecologic Oncology</strong></td><td>Retained endometrial warning underscores that cancer considerations remain valid; decisions must stay individualized</td></tr><tr><td><strong>Society for Women's Health Research</strong></td><td>Celebrated the removal but cautioned against removing all warnings</td></tr></table>
<p>Sources: ${ext(SRC.fdaNov, "FDA")}, ${ext(SRC.namsComment, "the Menopause Society")}, ${ext(SRC.bcoReact, "Breastcancer.org's expert round-up")}, ${ext(SRC.sgo, "SGO")} and ${ext(SRC.swhr, "SWHR")}.</p>`,
    },
    {
      heading: "What were the main criticisms of the FDA's decision?",
      body: `<p><strong>Critics focused less on whether the old warnings needed updating and more on how the change was made - through an informal expert panel rather than a formal advisory committee - and on concerns that public messaging overstated the benefits of hormone therapy.</strong></p>
<h3>Process concerns</h3>
<ul><li><strong>No formal advisory committee:</strong> major label changes are often preceded by a public FDA advisory committee meeting with voting members and formal conflict-of-interest screening. ACOG argued a two-hour expert panel was not an adequate substitute.</li><li><strong>Panel balance:</strong> coverage described the July panelists as largely in agreement; critics said dissenting experts weren't adequately represented.</li><li><strong>Transparency:</strong> some commentators, as summarised by ${ext(SRC.ajmc, "AJMC")}, argued that changes to systemic HRT labeling typically follow a more extensive and transparent regulatory review.</li></ul>
<h3>Concerns about the messaging</h3>
<ul><li>Some experts worried the announcement framed the WHI as unreliable, when its core findings remain valid for the population it studied.</li><li>Some officials' statements about broad population-level benefits - for example in preventing heart disease or dementia - went further than the evidence supports. Current guidelines, including the Menopause Society's, do not recommend hormone therapy for preventing heart disease or dementia.</li><li>Cancer specialists worried women with a history of breast cancer could be confused by headlines.</li></ul>
<h3>Why both sides can be partly right</h3>
<p>It's possible to believe that the 2002-era boxed warning was outdated and discouraged appropriate treatment, <em>and</em> that the way the change was made and communicated could have been better. For individual women, the practical question isn't who won the argument - it's what the evidence says about their own situation, which the rest of this guide covers.</p>`,
    },
    {
      heading: "Does removing the black box warning mean HRT is safe now?",
      body: `<p><strong>Not exactly. HRT is no safer as a medicine than it was before - the change reflects a better understanding of who benefits and how large the risks are. For healthy women under 60 or within 10 years of menopause with bothersome symptoms, the evidence suggests the benefits generally outweigh the risks. For women with certain histories, or who start much later, the risks can outweigh the benefits.</strong></p>
<p>The ${ext(SRC.nams2022, "Menopause Society's 2022 position statement")} - which predates the FDA change - already concluded that for women younger than 60 or within 10 years of menopause onset and without contraindications, the benefit-risk ratio is favourable for treating bothersome hot flashes and for preventing bone loss in those at elevated risk. For women who start hormone therapy more than 10 years after menopause or after age 60, the benefit-risk ratio is less favourable because of greater absolute risks of coronary heart disease, stroke, blood clots and dementia.</p>
<h3>Benefits of hormone therapy</h3>
<ul><li>The most effective treatment for hot flashes and night sweats</li><li>Better sleep when night sweats are the cause</li><li>Effective treatment of vaginal dryness and genitourinary symptoms</li><li>Prevention of bone loss and fewer fractures</li><li>For many women, improved quality of life and ability to work and function</li></ul>
<h3>Risks that still apply</h3>
<ul><li><strong>Blood clots</strong> - higher with oral estrogen than with skin routes</li><li><strong>Stroke</strong> - a small increase, particularly with oral therapy and in older women</li><li><strong>Breast cancer</strong> - a small increase with combined estrogen-plus-progestogen therapy that rises with longer use</li><li><strong>Endometrial cancer</strong> - with estrogen alone in women with a uterus; prevented by an adequate progestogen</li><li><strong>Gallbladder disease</strong> - higher with oral estrogen</li></ul>
<h3>How to think about your own risk</h3>
<p>Your personal balance depends on your age, how long it's been since your final period, your symptoms, your personal and family history, your blood pressure, weight and smoking status, and which hormones and routes you use. That's exactly why the old one-size-fits-all boxed warning was criticised - and why the replacement is an individual conversation, not a blanket green light. Our in-depth guide <a href="/articles/is-hrt-safe">Is HRT safe? What the evidence says in 2026</a> walks through each risk.</p>`,
    },
    {
      heading: "What does the evidence say about HRT and breast cancer now?",
      body: `<p><strong>Combined estrogen-plus-progestogen therapy is associated with a small increase in breast cancer risk that rises with longer use and falls after stopping. Estrogen alone, in women without a uterus, showed no increase - and a lower rate - in the WHI trial. The absolute risk change for most women starting HRT near menopause is small, but it isn't zero.</strong></p>
<h3>What the WHI found</h3>
<ul><li><strong>Combined therapy:</strong> in the 2002 results, about 8 more invasive breast cancers per 10,000 women per year with conjugated estrogens plus medroxyprogesterone acetate.</li><li><strong>Estrogen alone:</strong> no increase - in long-term follow-up, women on estrogen alone had fewer breast cancers than those on placebo, as summarised in the ${ext(SRC.jamaWhi, "2024 JAMA review")}.</li></ul>
<h3>Putting the risk in context</h3>
<p>Breast cancer risk is influenced by many factors - age, genetics, alcohol, weight after menopause, physical activity, breast density and reproductive history. For combined HRT, many experts compare the size of the increase to that associated with other common risk factors, such as regular alcohol use or obesity after menopause. Context doesn't make the risk disappear; it helps you weigh it against the benefits you're getting.</p>
<h3>Does the type of progestogen matter?</h3>
<p>Some observational data suggest micronized progesterone may be associated with less breast cancer risk than some synthetic progestins, but the evidence is limited and not from large randomized trials. It's reasonable to ask your clinician which progestogen they recommend and why.</p>
<h3>If you've had breast cancer</h3>
<p>The label change did not change the advice for breast cancer survivors. The American Society of Clinical Oncology reiterated that systemic hormone therapy remains contraindicated after breast cancer. Non-hormonal treatments for hot flashes, and non-hormonal vaginal products, are first-line; low-dose vaginal estrogen may be considered with the oncology team in some situations.</p>
<h3>Screening still matters</h3>
<p>Whether or not you take HRT, keep up with mammography as recommended for your age, and report any breast changes promptly.</p>`,
    },
    {
      heading: "What does the evidence say about HRT, heart disease, stroke and blood clots?",
      body: `<p><strong>Starting HRT before 60 or within 10 years of menopause does not appear to increase coronary heart disease, but it should not be used to prevent heart disease. Oral estrogen slightly increases the risk of blood clots and stroke; transdermal estrogen appears to carry a lower clot risk. Starting HRT at older ages carries higher cardiovascular risk.</strong></p>
<h3>Heart disease</h3>
<p>The WHI showed more coronary events in women on combined therapy overall - but analyses by age and time since menopause suggest that the excess was concentrated in older women and those far from menopause. This is the basis of the timing hypothesis. Guidelines still say hormone therapy should not be prescribed for the purpose of preventing heart disease; it is a treatment for symptoms (and bone loss), with a cardiovascular profile that appears acceptable for younger, healthy women.</p>
<h3>Stroke</h3>
<p>The 2002 WHI results showed about 8 more strokes per 10,000 women per year on combined therapy. Absolute stroke risk is low in women in their 50s and rises with age, so the same relative increase means more events in older women. Lower doses and transdermal routes are thought to carry less stroke risk, though evidence is mostly observational.</p>
<h3>Blood clots</h3>
<p>Oral estrogen increases clot risk because it passes through the liver and affects clotting factors. Observational studies suggest transdermal estrogen at standard doses has a lower risk - one reason patches and gels are often preferred for women with higher clot risk, such as those with obesity. A personal history of clots remains a reason to avoid systemic HRT in most cases.</p>
<h3>What to do with this</h3>
<ul><li>Know your blood pressure, cholesterol, blood sugar and weight - they matter more to your heart than HRT does.</li><li>Ask whether a transdermal route makes sense for you.</li><li>Don't start HRT expecting heart protection; start it for symptoms and bone health if appropriate.</li></ul>`,
    },
    {
      heading: "Does HRT cause or prevent dementia?",
      body: `<p><strong>Neither claim is established for women starting HRT around menopause. The "probable dementia" warning came from the WHI Memory Study, which enrolled women 65 and older; starting hormone therapy at that age was associated with higher dementia risk. HRT is not recommended to prevent dementia.</strong></p>
<p>The dementia element of the boxed warning was based on women who started hormone therapy at 65 or older - well past the typical age of menopause. Whether starting earlier is neutral, protective or harmful for long-term brain health is not settled; observational studies point in different directions, and large randomized trials in younger women have been limited in size and duration.</p>
<h3>What we can say</h3>
<ul><li>Brain fog during perimenopause is common and usually improves after menopause; it is not a sign of dementia.</li><li>Treating night sweats can improve sleep and concentration.</li><li>Starting systemic HRT in your late 60s or later for the first time is not recommended for brain health.</li><li>The strongest evidence-based protections for brain health are managing blood pressure, diabetes and cholesterol, staying active, not smoking, protecting hearing and getting enough sleep.</li></ul>
<p>Some statements around the 2025 announcement suggested broad brain benefits from hormone therapy. Current guidelines don't support starting HRT for that purpose - be wary of anyone promising it.</p>`,
    },
    {
      heading: "What about HRT and bone health?",
      body: `<p><strong>Bone protection is one of hormone therapy's best-established benefits. Estrogen slows bone loss, and hormone therapy reduces fractures - the 2002 WHI results showed about 5 fewer hip fractures per 10,000 women per year on combined therapy. The label change didn't alter this.</strong></p>
<p>Bone loss accelerates in the years around the final period, raising the long-term risk of osteoporosis and fractures. The Menopause Society considers hormone therapy an appropriate option for preventing bone loss in women at elevated risk who are under 60 or within 10 years of menopause, particularly if they also have symptoms. Other bone medicines are used to treat established osteoporosis.</p>
<p>The US Preventive Services Task Force ${ext(SRC.uspstf, "recommends osteoporosis screening")} for all women 65 and older and for younger postmenopausal women at increased fracture risk. Bone protection fades after hormone therapy stops, so if you stop, review your bone health with your clinician. Whether or not you use HRT, weight-bearing and strength exercise, adequate calcium and vitamin D, not smoking and limiting alcohol all help.</p>`,
    },
    {
      heading: "Why was removing the warning from vaginal estrogen so important?",
      body: `<p><strong>Low-dose vaginal estrogen is minimally absorbed into the bloodstream, yet for years it carried the same boxed warning as systemic estrogen pills. Experts across the spectrum agreed this deterred women from an effective, safe treatment for vaginal dryness, painful sex and recurrent urinary infections - symptoms that tend to worsen without treatment.</strong></p>
<p>Genitourinary syndrome of menopause (GSM) affects a large share of postmenopausal women. Unlike hot flashes, it doesn't fade with time - it usually progresses. Low-dose vaginal estrogen, delivered as a cream, tablet/insert or ring, treats the tissues directly with very small doses.</p>
<p>Clinicians widely reported that women would read the package insert - with warnings about breast cancer, stroke and dementia - and decide not to use the product, or stop it. The ${ext(SRC.namsComment, "Menopause Society")} and ACOG both specifically welcomed the change for low-dose vaginal estrogen, which was perhaps the least controversial part of the entire decision.</p>
<h3>What it means for you</h3>
<ul><li>If you have vaginal dryness, pain with sex or recurring UTIs after menopause, low-dose vaginal estrogen is worth discussing - it can be used long term.</li><li>Many women who can't take systemic HRT can use it; breast cancer survivors should decide with their oncology team.</li><li>Non-estrogen options - vaginal DHEA (prasterone) and oral ospemifene - also exist, alongside moisturizers and lubricants.</li></ul>`,
    },
    {
      heading: "What hasn't changed about HRT?",
      body: `<p><strong>The medicines, the contraindications, the need for a progestogen with a uterus, the advice not to use HRT to prevent heart disease or dementia, and the need for individualized decisions are all unchanged.</strong></p>
<ul><li><strong>The drugs themselves:</strong> estradiol, conjugated estrogens and progestogens are the same products with the same effects.</li><li><strong>Contraindications:</strong> breast cancer, blood clots, stroke, heart attack, active liver disease and unexplained bleeding still generally rule out systemic HRT.</li><li><strong>Endometrial protection:</strong> required for women with a uterus on systemic estrogen.</li><li><strong>Not for prevention:</strong> HRT isn't recommended to prevent heart disease or dementia.</li><li><strong>Timing:</strong> benefits are most favourable when started before 60 or within 10 years of menopause.</li><li><strong>Route matters:</strong> transdermal estrogen carries lower clot risk than oral.</li><li><strong>Screening:</strong> mammograms, cervical screening and blood pressure checks remain important.</li><li><strong>Review:</strong> treatment should be reviewed at least yearly.</li></ul>`,
    },
    {
      heading: "What is shared decision-making for HRT?",
      body: `<p><strong>Shared decision-making means you and your clinician weigh the evidence together with your symptoms, history and preferences to reach a decision - rather than a warning label or a headline deciding for you. It's the approach almost every medical society endorsed after the label change.</strong></p>
<p>In practice, a good HRT conversation covers:</p>
<ol><li><strong>Your goals:</strong> which symptoms bother you most and what you want treatment to achieve.</li><li><strong>Your risk profile:</strong> age, time since menopause, personal and family history, blood pressure, weight, smoking.</li><li><strong>The options:</strong> systemic HRT in different forms, vaginal estrogen, non-hormonal medicines, and non-drug approaches.</li><li><strong>The numbers:</strong> likely benefits and risks for someone like you, in absolute terms where possible.</li><li><strong>Your preferences:</strong> pills vs patches, bleeding patterns, cost and convenience.</li><li><strong>A review plan:</strong> when you'll check how it's going and reconsider.</li></ol>
<p>The removal of most boxed warnings makes this kind of conversation easier, because the label no longer front-loads risks that apply mainly to older women starting therapy late. It doesn't replace the conversation.</p>`,
    },
    {
      heading: "How does the label change affect non-hormonal menopause treatments?",
      body: `<p><strong>It doesn't directly. Non-hormonal medicines have their own labels. Fezolinetant (Veozah), for example, gained a boxed warning in December 2024 about rare but serious liver injury - a reminder that boxed warnings exist across medicines, hormonal or not.</strong></p>
<p>The ${ext(SRC.fdaVeozah, "FDA added the Veozah boxed warning")} after a postmarketing case of serious liver injury, and requires liver blood tests before starting, monthly for the first three months, and at months six and nine. Elinzanetant (Lynkuet), approved in October 2025, carries warnings about drowsiness and liver enzyme elevations. For women who can't take estrogen, these and other non-hormonal options - certain antidepressants, gabapentin, oxybutynin, CBT and clinical hypnosis - remain important. The HRT label change may make more women comfortable trying hormones, but it doesn't make non-hormonal treatment second-best for women with reasons to avoid estrogen.</p>`,
    },
    {
      heading: "How does the label change apply if you have other health conditions?",
      body: `<p><strong>For most chronic conditions the advice hasn't changed: HRT decisions depend on your individual risks, and some conditions favour particular routes or need specialist input.</strong></p>
<table><tr><th>Condition</th><th>Typical considerations</th></tr><tr><td><strong>Migraine</strong></td><td>Transdermal estrogen at steady doses is usually preferred; migraine with aura needs careful assessment</td></tr><tr><td><strong>High blood pressure</strong></td><td>Control it first; transdermal estrogen is usually favoured</td></tr><tr><td><strong>Obesity</strong></td><td>Higher baseline clot risk - transdermal routes preferred</td></tr><tr><td><strong>Type 2 diabetes</strong></td><td>Not a contraindication; assess overall cardiovascular risk; transdermal often preferred</td></tr><tr><td><strong>Endometriosis</strong></td><td>Even after hysterectomy, a progestogen may be recommended to reduce the risk of reactivating endometriosis</td></tr><tr><td><strong>Fibroids</strong></td><td>Hormone therapy may be used with monitoring; bleeding changes need assessment</td></tr><tr><td><strong>Gallbladder disease</strong></td><td>Oral estrogen raises risk more than transdermal</td></tr><tr><td><strong>Family history of breast cancer</strong></td><td>Often still possible; individual risk assessment and screening plan</td></tr><tr><td><strong>BRCA mutation</strong></td><td>After risk-reducing surgery without a personal cancer history, HRT is often an option; specialist input</td></tr><tr><td><strong>Past blood clot, stroke, heart attack, breast cancer</strong></td><td>Systemic HRT generally not recommended; non-hormonal options</td></tr></table>`,
    },
    {
      heading: "Is 'the lowest dose for the shortest time' still the rule?",
      body: `<p><strong>Not as a blanket rule. The old mantra emerged after 2002, but the Menopause Society has moved toward individualizing dose and duration: the right dose is the one that controls your symptoms with acceptable side effects, and there is no arbitrary time limit.</strong></p>
<p>After the WHI, many women were told to use hormones at the lowest dose for the shortest possible time, and to stop at a fixed age. Professional guidance has since shifted. The Menopause Society's position is that decisions about dose, regimen and duration should be individualized and re-evaluated periodically, and that hormone therapy does not need to be routinely stopped at 60 or 65. For some women - for example, those with early menopause or severe symptoms - a very low dose or a short course may be inadequate.</p>
<p>That doesn't mean "more is better." Starting at a standard dose, reviewing at around three months and adjusting is the usual approach, and the goal remains the least medication that does the job well for you.</p>`,
    },
    {
      heading: "Why does treating menopause symptoms matter for quality of life?",
      body: `<p><strong>Untreated menopause symptoms - especially frequent hot flashes, night sweats and the poor sleep they cause - can affect concentration, mood, work performance, relationships and overall wellbeing for years. Effective treatment, hormonal or not, can make a substantial difference.</strong></p>
<p>Much of the public debate about the boxed warning focused on risks, but the other side of the equation matters too. Women with severe vasomotor symptoms describe interrupted sleep night after night, sudden drenching sweats in meetings, and difficulty concentrating. Genitourinary symptoms can make sex painful and lead to recurrent infections. These aren't trivial complaints - they're the reason hormone therapy and the newer non-hormonal medicines exist.</p>
<p>The fairest summary of the evidence is that both sides of the ledger count: the small absolute risks of hormone therapy for appropriate candidates, and the substantial burden of symptoms left untreated. For women for whom HRT isn't suitable, non-hormonal medicines, CBT and clinical hypnosis offer real relief. For an overview of every option, see our <a href="/articles/menopause-complete-guide">complete menopause guide</a>.</p>`,
    },
    {
      heading: "What does the label change mean for you?",
      body: `<p><strong>It depends on your situation. If you're already on HRT, nothing about your treatment needs to change. If you were put off by the warnings, it's a good time to revisit the conversation. If you have a contraindication such as breast cancer or a past clot, the advice hasn't changed.</strong></p>
<h3>If you're already taking HRT</h3>
<ul><li>Keep taking it as prescribed - the label change doesn't alter your risk or require any action.</li><li>Use your next review to check that your dose, route and progestogen still suit you.</li><li>If you were taking HRT for symptoms and felt anxious about the warnings, this may be reassuring - but the decision to continue is still individual.</li></ul>
<h3>If you avoided HRT because of the warnings</h3>
<ul><li>If you're under 60 or within 10 years of menopause, have bothersome symptoms and none of the contraindications listed above, it's reasonable to discuss HRT again with a clinician.</li><li>Bring your full history - the conversation should cover your personal risk factors and preferences, not just the label.</li><li>Consider asking about transdermal estrogen and micronized progesterone.</li></ul>
<h3>If you stopped HRT after 2002 and are now older</h3>
<ul><li>Starting systemic HRT for the first time after 60 or more than 10 years after menopause carries higher risks; a careful specialist discussion is needed.</li><li>Low-dose vaginal estrogen for genitourinary symptoms can be used at any age.</li></ul>
<h3>If you've had breast cancer, a blood clot, stroke or heart attack</h3>
<ul><li>The advice hasn't changed - systemic HRT is generally not recommended.</li><li>Non-hormonal medicines for hot flashes (such as fezolinetant, elinzanetant, certain antidepressants, gabapentin and oxybutynin) and non-hormonal vaginal treatments are the main options; see our <a href="/articles/menopause-complete-guide">complete menopause guide</a>.</li></ul>
<h3>If you're in perimenopause</h3>
<ul><li>HRT can be started before periods stop, often with a cyclical progestogen or hormonal IUD.</li><li>HRT is not contraception - you may need both. See <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a>.</li></ul>
<h3>If you have early or surgical menopause</h3>
<ul><li>Hormone replacement is generally recommended at least until the average age of natural menopause - this was true before the label change and remains so.</li></ul>`,
    },
    {
      heading: "What does the change mean in real life? Four example scenarios",
      body: `<p><em>These are illustrative examples to show how the evidence applies to different situations - not real patients, and not medical advice.</em></p>
<h3>1. A 49-year-old in perimenopause, avoiding HRT because of the warnings</h3>
<p>She has severe night sweats, poor sleep and irregular periods, with no history of clots or breast cancer and normal blood pressure. Before 2025, the boxed warnings scared her off. Today, the evidence and the updated labels support a conversation about starting HRT - likely transdermal estradiol with a progestogen suited to perimenopause (cyclical progesterone or a hormonal IUD, which also covers contraception). Her clinician reviews her history and screening first.</p>
<h3>2. A 56-year-old, four years past menopause, on HRT since 52</h3>
<p>She's been taking a patch and micronized progesterone and feels well. The label change doesn't require any change to her treatment. At her annual review, her clinician checks her blood pressure, mammogram and bleeding pattern and discusses whether to continue - with no arbitrary stop date.</p>
<h3>3. A 64-year-old, 14 years past menopause, considering HRT for the first time</h3>
<p>She has persistent hot flashes and vaginal dryness. The label change doesn't change the evidence that starting systemic HRT this long after menopause carries greater absolute risks. Her clinician suggests low-dose vaginal estrogen for dryness and discusses non-hormonal options for hot flashes, reserving systemic HRT for a careful specialist discussion.</p>
<h3>4. A 52-year-old breast cancer survivor</h3>
<p>Headlines left her wondering if HRT is now an option. The advice hasn't changed: systemic HRT remains contraindicated after breast cancer. Her care team offers non-hormonal treatment for hot flashes - avoiding certain antidepressants because she takes tamoxifen - and non-hormonal vaginal products, with low-dose vaginal estrogen considered only in discussion with her oncologist.</p>
<p>The pattern: the label change matters most for women who were good candidates all along but were deterred by the warnings. For others, the evidence-based advice is much the same as before.</p>`,
    },
    {
      heading: "What does the label change mean for women in their 40s?",
      body: `<p><strong>For women in their 40s with perimenopausal symptoms or early menopause, the change removes a major source of hesitation. The evidence on benefit-risk is generally most favourable for women who start near menopause, and women with early menopause are usually advised to take hormone replacement until around the average age of natural menopause.</strong></p>
<ul><li><strong>Perimenopause:</strong> HRT can be started before periods stop, typically with a cyclical progestogen or hormonal IUD. Contraception still matters - HRT doesn't prevent pregnancy.</li><li><strong>Early menopause (before 45):</strong> estrogen replacement protects bone and cardiovascular health and is generally recommended unless there's a reason not to.</li><li><strong>Premature menopause (before 40):</strong> needs proper diagnosis and investigation; replacement is usually recommended until around the average age of natural menopause.</li><li><strong>Heavy or irregular bleeding:</strong> should be evaluated - not all bleeding changes in your 40s are menopause.</li></ul>
<p>For details, see <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a> and <a href="/articles/perimenopause-symptoms">perimenopause symptoms</a>.</p>`,
    },
    {
      heading: "Did HRT prescriptions increase after the label change?",
      body: `<p><strong>Yes. Prescription data and manufacturers reported a significant rise in hormone therapy demand after the change, and some estradiol products - especially patches - became hard to find in early 2026.</strong></p>
<h3>The demand surge</h3>
<p>Truveta Research data reported by ${ext(SRC.emarketer, "eMarketer")} found that estrogen-based hormone therapy prescriptions had roughly doubled since 2023, and that among women aged 45 to 54, prescriptions rose 26% between July 2025 and February 2026. Amneal, a maker of estradiol patches, said it saw a significant increase in demand following the removal of the boxed warnings and was working to increase production.</p>
<h3>Shortages</h3>
<p>In March 2026, ${ext(SRC.npr, "NPR")} reported a "mad scramble" to fill hormone therapy prescriptions, with CVS confirming that manufacturers had been unable to provide sufficient supplies of several estrogen products. The FDA later said ${ext(SRC.fdaPatch, "estradiol patches remain available")}, that supply of FDA-approved estradiol patches had nearly doubled over the previous year, and that it was working with manufacturers to increase supply - while acknowledging that availability can vary by pharmacy and brand.</p>
<h3>Practical advice if your product is hard to find</h3>
<ul><li>Order refills early.</li><li>Ask your pharmacist to check other pharmacies or other approved brands of the same dose.</li><li>Ask your prescriber about an equivalent alternative - another patch brand, a gel or spray - rather than going without.</li><li>Don't switch products or doses on your own, and don't let your progestogen lapse if you have a uterus.</li></ul>
<h3>A rebound, not a boom</h3>
<p>Even with the surge, use remains far below the levels of the late 1990s, when more than a quarter of postmenopausal women used hormone therapy. Much of the increase reflects women who were symptomatic but untreated returning to care.</p>`,
    },
    {
      heading: "How can you judge HRT information online after the label change?",
      body: `<p><strong>Be wary of anyone who presents HRT as either dangerous for everyone or a cure-all for everyone. Good information explains who benefits, who shouldn't use it, the size of the risks in absolute terms, and cites recognised sources such as the FDA, the Menopause Society, ACOG or peer-reviewed research.</strong></p>
<p>The label change produced a wave of content - news coverage, social media posts, podcasts and marketing. Much of it is helpful; some of it overstates benefits or sells products. A few checks help:</p>
<ul><li><strong>Does it cite sources?</strong> Look for links to primary sources - regulatory announcements, professional society statements, peer-reviewed studies - rather than only testimonials.</li><li><strong>Does it mention who shouldn't use HRT?</strong> Balanced information always covers contraindications.</li><li><strong>Does it promise prevention?</strong> Claims that HRT prevents heart disease, dementia or ageing go beyond current guidelines.</li><li><strong>Is it selling something?</strong> Hormone "panels," saliva tests, supplements or compounded "custom" hormones are often promoted alongside exaggerated claims.</li><li><strong>Does it distinguish types of HRT?</strong> Systemic vs vaginal, oral vs transdermal, estrogen alone vs combined - the differences matter.</li><li><strong>Who wrote it, and who reviewed it?</strong> Look for named authors and medical review, and for disclosure of commercial relationships.</li></ul>
<p>We disclose that we may earn commissions from provider links on this site; our editorial content and rankings are independent of that (see <a href="/how-we-rank">how we rank</a>).</p>`,
    },
    {
      heading: "How did celebrities change the conversation about menopause and HRT?",
      body: `<p><strong>Public figures speaking openly about menopause - including Halle Berry, Naomi Watts, Michelle Obama and, in the UK, Davina McCall - helped break the silence around symptoms and treatment in the years leading up to the FDA's decision.</strong></p>
<h3>Halle Berry: "I'm in menopause"</h3>
<p>In May 2024, Halle Berry joined a bipartisan group of senators on the steps of the US Capitol to promote legislation directing $275 million toward menopause research and education, ${ext(SRC.berry, "the Associated Press reported")}. "I'm in menopause, OK?" she said, describing how a doctor had initially misdiagnosed her symptoms. Her message - that women's midlife health has been under-researched and under-discussed - became one of the most widely shared moments of the menopause advocacy movement.</p>
<h3>Naomi Watts: early menopause in her 30s</h3>
<p>Actress Naomi Watts has described beginning to experience unexplained symptoms at 36 - including night sweats, mood swings and dry skin - and only later learning she was going through menopause. In 2025 she published <em>${ext(SRC.watts, "Dare I Say It: Everything I Wish I'd Known About Menopause")}</em>, combining her own story with expert advice. Her experience highlights that menopause can come early, and that early menopause has its own long-term health implications.</p>
<h3>Michelle Obama: a hot flash on Marine One</h3>
<p>On her podcast in 2020, Michelle Obama discussed menopause with her friend, OB-GYN Dr. Sharon Malone, and ${ext(SRC.obama, "recalled a hot flash")} while aboard Marine One. Her point that half the population goes through menopause while society acts as if it isn't happening resonated widely.</p>
<h3>Davina McCall and the UK experience</h3>
<p>In the UK, presenter Davina McCall's 2021 Channel 4 documentary on menopause is widely credited with prompting more women to seek help. The ${ext(SRC.pj, "Pharmaceutical Journal")} reported that HRT prescribing in England increased by 370% over a decade, noting the rise had, in part, been attributed to her documentaries - an example of how public conversation can change care, and also of how demand can outpace supply, as the UK experienced HRT shortages.</p>
<h3>Why it matters - and its limits</h3>
<p>Celebrity voices reduce stigma and encourage women to ask questions. But a celebrity's experience is not medical advice: what worked for one person may not suit another's history. Use their stories as a prompt for a conversation with a clinician, not as a treatment plan.</p>`,
    },
    {
      heading: "How do you read your new HRT package insert?",
      body: `<p><strong>Look at four places: the boxed warning (if any) at the top, the Indications section (what the product is approved for), the Contraindications section (when not to use it), and Warnings and Precautions (the detailed risks, including cardiovascular disease, breast cancer and dementia).</strong></p>
<ul><li><strong>Boxed warning:</strong> on updated systemic estrogen-alone labels, expect the endometrial cancer warning; the cardiovascular, breast cancer and dementia items are no longer there.</li><li><strong>Indications:</strong> for example, treatment of moderate to severe vasomotor symptoms, genitourinary symptoms, or prevention of osteoporosis.</li><li><strong>Contraindications:</strong> breast cancer, clots, stroke, heart attack, liver disease, unexplained bleeding and others.</li><li><strong>Warnings and Precautions:</strong> the detailed discussion of risks, now with added context on age and timing of starting therapy.</li><li><strong>Patient information leaflet:</strong> a plain-language version; read it, and ask your pharmacist if anything is unclear.</li></ul>
<p>Because labels were updated product by product during 2026, you may still see the older version on some packages. That doesn't mean the product is different - only the label wording.</p>`,
    },
    {
      heading: "Myths and facts about HRT after the black box removal",
      body: `<table><tr><th>Myth</th><th>Fact</th></tr><tr><td>"The FDA says HRT is now risk-free."</td><td>No. The risks moved out of the boxed warning but remain in the prescribing information; contraindications still apply.</td></tr><tr><td>"All the warnings are gone."</td><td>The endometrial cancer boxed warning remains for systemic estrogen-alone products.</td></tr><tr><td>"The WHI was wrong."</td><td>The WHI's findings remain valid for the population it studied; the issue was applying them to all women regardless of age and timing.</td></tr><tr><td>"HRT prevents heart disease and dementia."</td><td>Guidelines don't recommend HRT to prevent heart disease or dementia.</td></tr><tr><td>"I no longer need progesterone."</td><td>Women with a uterus taking systemic estrogen still need adequate progestogen protection.</td></tr><tr><td>"Breast cancer survivors can now take HRT."</td><td>Systemic HRT is still generally contraindicated after breast cancer.</td></tr><tr><td>"Compounded hormones are now FDA-approved."</td><td>No. The changes apply to FDA-approved products; compounded hormones remain unapproved.</td></tr><tr><td>"It's too late for me because I'm over 60."</td><td>Starting systemic HRT after 60 needs careful assessment, but continuing earlier-started HRT is often reasonable, and vaginal estrogen can be used at any age.</td></tr><tr><td>"Vaginal estrogen is as risky as pills."</td><td>Low-dose vaginal estrogen is minimally absorbed; its boxed warning was among the most widely criticised.</td></tr><tr><td>"If my doctor still hesitates, they're wrong."</td><td>Hesitation may reflect your personal history. Ask for their reasoning; seek a menopause specialist if you feel dismissed.</td></tr></table>`,
    },
    {
      heading: "What should you ask your doctor about HRT after the label change?",
      body: `<p><strong>Ask whether you're a good candidate given your age, time since menopause and history; which form and dose would be safest for you; whether you need a progestogen; and how you'll review benefits and risks over time.</strong></p>
<ul><li>"Given my age and how long it's been since my last period, how do the benefits and risks of HRT balance for me?"</li><li>"Does anything in my history - blood clots, migraine, family history of breast cancer, blood pressure - change which treatment you'd recommend?"</li><li>"Would a patch or gel be better for me than a pill?"</li><li>"Do I need a progestogen, and which one would you suggest?"</li><li>"Are the products you're prescribing FDA-approved?"</li><li>"How will we know if it's working, and when will we review it?"</li><li>"If HRT isn't right for me, what non-hormonal options do I have?"</li><li>"Would low-dose vaginal estrogen help my vaginal or urinary symptoms?"</li></ul>
<p>Bring a list of your symptoms, your last period date, your medications and your screening dates. A short symptom diary makes the conversation more productive.</p>`,
    },
    {
      heading: "Has the label change made HRT easier to get online?",
      body: `<p><strong>The label change didn't change the rules for prescribing - but it has increased demand, and online menopause services are one of the main ways women are accessing care. The same standards apply: a full medical history, a licensed clinician and appropriate follow-up.</strong></p>
<p>Online menopause clinics let women consult clinicians who focus on menopause, often within days. After the label change, they also became a route for women who were newly willing to try HRT but couldn't get a timely appointment. The risks of HRT are the same whether it's prescribed online or in a clinic, so look for a service that screens carefully, offers FDA-approved options and includes follow-up. Our step-by-step guide on <a href="/articles/how-to-get-hrt-online">how to get HRT online</a> explains the process, and our <a href="/">provider rankings</a> compare Winona, Gala and Midi Health.</p>`,
    },
    {
      heading: "Should you restart HRT if you stopped because of the warnings?",
      body: `<p><strong>Possibly - it depends on how long ago you stopped, your current age and symptoms, and your health history. If you're still under 60 or within 10 years of menopause and have bothersome symptoms, it's worth discussing. If you're older, restarting systemic HRT needs a more careful conversation.</strong></p>
<ul><li><strong>Still symptomatic and younger:</strong> restarting is often reasonable after a review of your history and screening.</li><li><strong>Older or many years since menopause:</strong> the higher absolute risks of starting systemic therapy later apply; consider a specialist consultation.</li><li><strong>Vaginal or urinary symptoms only:</strong> low-dose vaginal estrogen is appropriate at any age for most women.</li><li><strong>New health conditions since you stopped:</strong> these may change the safest option.</li></ul>`,
    },
    {
      heading: "Can you take HRT if breast cancer runs in your family?",
      body: `<p><strong>Often, yes. A family history of breast cancer is not by itself a contraindication to HRT, but it's a reason for an individual risk assessment and an appropriate screening plan.</strong> Your clinician may consider how many relatives were affected and at what ages, whether genetic testing is appropriate, and your own breast density and other risk factors. Women with a known BRCA mutation who have had risk-reducing surgery and no personal history of breast cancer are often still candidates for HRT, ideally with specialist input. Women who have had breast cancer themselves are in a different category - systemic HRT is generally not recommended.</p>`,
    },
    {
      heading: "Do women with a uterus still need progesterone with estrogen?",
      body: `<p><strong>Yes. The label change kept the boxed warning about endometrial cancer for estrogen-alone products, because estrogen without a progestogen thickens the uterine lining and raises the risk of endometrial cancer. Women with a uterus who take systemic estrogen need adequate progestogen protection.</strong> Options include oral micronized progesterone, other progestins, or a levonorgestrel IUD. Progesterone absorbed from over-the-counter creams is not considered reliable for this purpose. See <a href="/articles/progesterone-side-effects">progesterone for menopause</a>.</p>`,
    },
    {
      heading: "Does the label change apply to bioidentical hormones?",
      body: `<p><strong>It applies to FDA-approved hormone products, including FDA-approved bioidentical ones such as estradiol and micronized progesterone. Compounded bioidentical hormones aren't FDA-approved and don't carry FDA-approved labeling, so the change doesn't apply to them.</strong> Commissioner Makary said the change covers both bioidentical and synthetic FDA-approved hormones. Compounded preparations still raise the same concerns as before about dose consistency and limited evidence. See <a href="/articles/bioidentical-hormones-explained">bioidentical hormones explained</a>.</p>`,
    },
    {
      heading: "Is HRT still risky for women over 60?",
      body: `<p><strong>Starting systemic HRT for the first time after 60, or more than 10 years after menopause, carries higher absolute risks of heart disease, stroke, blood clots and dementia, and the label change doesn't alter that.</strong> Continuing HRT started earlier is a different situation and is often reasonable with periodic review - the Menopause Society does not recommend routinely stopping at 60 or 65. Low-dose vaginal estrogen can be started at any age.</p>`,
    },
    {
      heading: "How long can you stay on HRT now?",
      body: `<p><strong>There is no fixed time limit. The decision to continue should be individualized and reviewed at least yearly, considering ongoing symptoms, bone health and changing risks.</strong> The Menopause Society does not recommend routinely stopping hormone therapy at age 60 or 65. Some women stop after a few years; others continue longer with their clinician's support. Around half of women notice some symptoms return when they stop, whether they taper or stop at once, so plan any stop with your clinician - and review bone health, since protection fades after stopping.</p>`,
    },
    {
      heading: "Is it ever too early to start HRT?",
      body: `<p><strong>HRT is a treatment for menopause-related symptoms and for estrogen deficiency, so it's started when those are present - which can be in perimenopause, in your 40s, or even earlier with premature menopause.</strong> There's no benefit to starting HRT before you have symptoms or estrogen deficiency, and it isn't used to "prevent" menopause. For women with symptoms in perimenopause, there's no need to wait for periods to stop. For women with premature or early menopause, starting replacement promptly is generally recommended.</p>`,
    },
    {
      heading: "Does HRT cause weight gain?",
      body: `<p><strong>On average, no. Studies have not found that hormone therapy causes weight gain, and it may modestly reduce the shift of fat toward the abdomen that happens around menopause.</strong> Many women gain weight in midlife for other reasons - ageing, loss of muscle, less activity, poorer sleep. Some women notice temporary bloating or fluid retention when starting HRT, which often settles or improves with a change of dose or progestogen.</p>`,
    },
    {
      heading: "Is HRT the same as birth control?",
      body: `<p><strong>No. Both contain hormones, but menopausal hormone therapy uses much lower doses of estrogen (usually estradiol) designed to replace what the ovaries no longer make, while combined birth control pills use higher-potency estrogen (usually ethinyl estradiol) to suppress ovulation. HRT does not prevent pregnancy.</strong></p>
<p>The difference matters in two ways. First, women in perimenopause who could still conceive need contraception even if they take HRT - a levonorgestrel IUD can do double duty, providing contraception and the progestogen part of HRT. Second, some women in their 40s use low-dose combined contraception instead of HRT to control both symptoms and cycles, typically until around 50, after which a switch to HRT is common. The 2025-2026 label changes apply to menopausal hormone therapy products, not to contraceptives, which have their own labeling. Discuss which approach suits your stage with a clinician; see <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a>.</p>`,
    },
    {
      heading: "Does the label change apply to testosterone for women?",
      body: `<p><strong>No. The changes apply to FDA-approved menopausal estrogen and progestogen products. There is no FDA-approved testosterone product for women in the US, so testosterone prescribed to women - usually for low sexual desire after menopause - is used off-label.</strong></p>
<p>The ${ext(SRC.testosterone, "2019 Global Consensus Position Statement")} on testosterone in women found evidence supporting its use only for postmenopausal women with hypoactive sexual desire disorder, at doses that restore premenopausal levels, with blood-level monitoring - and no evidence supporting it for mood, memory, bone or muscle. It recommended against compounded testosterone. If you're considering testosterone, those considerations are unchanged by the 2025-2026 decision, and testosterone is a controlled substance with additional prescribing rules.</p>`,
    },
    {
      heading: "Will doctors prescribe HRT more readily now?",
      body: `<p><strong>Many are, and prescription data show a clear rise. But practice varies: some clinicians were already prescribing according to the Menopause Society's guidance before the change, while others remain cautious.</strong> If your clinician is hesitant, ask them to explain their reasoning for your specific situation, and consider a menopause specialist if you feel your symptoms are being dismissed. The Menopause Society maintains a directory of certified menopause practitioners.</p>`,
    },
    {
      heading: "Was the black box warning removed from all estrogen products?",
      body: `<p><strong>The FDA asked manufacturers of all menopausal hormone therapy products to remove the cardiovascular, breast cancer and dementia boxed warnings, but the updates were approved product by product starting February 12, 2026. The endometrial cancer boxed warning remains on systemic estrogen-alone products.</strong> ${ext(SRC.uspharm, "US Pharmacist")} summarised the request as covering most HRT boxed warnings while keeping the endometrial cancer warning. If you want to know the status for your specific product, ask your pharmacist or check the current prescribing information.</p>`,
    },
    {
      heading: "Does the label change affect insurance coverage for HRT?",
      body: `<p><strong>Not directly. Insurance coverage depends on your plan's formulary, not on the boxed warning.</strong> Generic estradiol and micronized progesterone are often covered at lower tiers; brand-name products may cost more or need prior authorization. If your preferred product is in short supply, your plan may cover an equivalent alternative - ask your pharmacist and prescriber.</p>`,
    },
    {
      heading: "Checklist: before you start or restart HRT in 2026",
      body: `<ul><li><strong>Know your stage:</strong> date of your last period and how your cycles have changed.</li><li><strong>List your symptoms</strong> and which ones matter most to you.</li><li><strong>Review your history:</strong> breast or other cancers, blood clots, stroke, heart disease, migraine with aura, liver disease, unexplained bleeding.</li><li><strong>Know your family history</strong> of breast cancer, clots and early heart disease.</li><li><strong>Check your blood pressure</strong> and bring a recent reading.</li><li><strong>Update screening:</strong> mammogram and cervical screening.</li><li><strong>Ask about the route:</strong> patch or gel vs pill, especially if you have higher clot risk or migraine.</li><li><strong>Confirm endometrial protection</strong> if you have a uterus.</li><li><strong>Ask whether products are FDA-approved</strong> or compounded.</li><li><strong>Plan a review</strong> at around three months, then at least yearly.</li><li><strong>Know the warning signs</strong> that need urgent care: chest pain, sudden breathlessness, leg swelling, sudden weakness or speech problems.</li><li><strong>Order refills early</strong> in case of supply issues.</li></ul>`,
    },
    {
      heading: "Key terms in the HRT warning debate",
      body: `<ul><li><strong>Boxed (black box) warning:</strong> the FDA's most prominent safety warning on a prescription drug label.</li><li><strong>Prescribing information (label):</strong> the full FDA-approved document describing a drug's uses, risks, dosing and contraindications.</li><li><strong>Contraindication:</strong> a situation in which a medicine should not be used.</li><li><strong>Women's Health Initiative (WHI):</strong> large US trials of hormone therapy whose 2002 results led to the boxed warnings.</li><li><strong>WHI Memory Study:</strong> the WHI substudy of women 65 and older that found higher dementia risk with hormone therapy.</li><li><strong>Timing hypothesis:</strong> the idea that hormone therapy's cardiovascular effects depend on how soon after menopause it is started.</li><li><strong>Absolute vs relative risk:</strong> extra cases per number of people vs the percentage change in risk.</li><li><strong>Systemic hormone therapy:</strong> estrogen that reaches the whole body (pills, patches, gels, sprays).</li><li><strong>Low-dose vaginal estrogen:</strong> local treatment for vaginal and urinary symptoms with minimal absorption.</li><li><strong>Progestogen:</strong> progesterone or a progestin, used with estrogen to protect the uterus.</li><li><strong>Transdermal:</strong> absorbed through the skin.</li><li><strong>Advisory committee:</strong> a formal FDA panel of outside experts that reviews evidence and votes on regulatory questions.</li><li><strong>Expert panel:</strong> the less formal format the FDA used in July 2025.</li></ul>`,
    },
    {
      heading: "What happens next for HRT?",
      body: `<p><strong>Expect the remaining product labels to be updated, continued debate about the decision and its process, further research on newer regimens such as transdermal estradiol and micronized progesterone, and efforts to improve supply of in-demand products like estradiol patches.</strong></p>
<ul><li><strong>Label updates:</strong> more products will carry the revised wording as manufacturers' submissions are approved.</li><li><strong>Supply:</strong> the FDA has said it is working with manufacturers to increase estradiol patch supply.</li><li><strong>Research:</strong> many experts argue the biggest remaining gap is large, long-term randomized evidence on today's most-used regimens in women starting near menopause.</li><li><strong>Clinical practice:</strong> menopause training and access to menopause-literate clinicians - in person and online - are expanding.</li><li><strong>Debate:</strong> disagreement about the process and some of the broader benefit claims will likely continue.</li></ul>
<p>We'll update this article as significant developments occur.</p>`,
    },
    {
      heading: "How we researched this article",
      body: `<p>This article is based on primary sources wherever possible: the FDA's and HHS's announcements and fact sheet, the FDA's expert panel page and February 2026 labeling approvals, the original 2002 Women's Health Initiative results in <em>JAMA</em>, the 2024 <em>JAMA</em> review of the WHI trials by its investigators, and the Menopause Society's 2022 position statement. Reactions from professional bodies come from their own statements or from reputable reporting (Breastcancer.org, CNN, Axios, AJMC). Demand and supply figures come from NPR's reporting and Truveta data as reported by eMarketer. Statements about public figures come from the Associated Press, Penguin, TODAY and the Pharmaceutical Journal. Sources were checked on October 24, 2026. Where sources disagreed, we've said so rather than choosing a number. Our content follows our <a href="/medical-review-policy">medical review policy</a>.</p>`,
    },
    {
      heading: "The bottom line",
      body: `<p>The removal of most of HRT's black box warnings in 2025-2026 was the biggest shift in how menopause hormone therapy is presented in the US in more than two decades. It reflects years of research showing that the risks seen in the 2002 Women's Health Initiative - in older women, on an older regimen - did not describe the typical woman seeking treatment for menopause symptoms today.</p>
<p>But the warnings moved; the risks didn't vanish. Blood clots, stroke, breast cancer considerations and endometrial protection remain part of every responsible HRT conversation. The best reading of the evidence hasn't changed: for healthy women with bothersome symptoms who start before 60 or within 10 years of menopause, hormone therapy is usually a reasonable, effective choice; for women with certain histories or who start much later, other options may be safer. Low-dose vaginal estrogen is appropriate for most women with genitourinary symptoms.</p>
<p>If the old warnings kept you from asking about treatment, now is a good time to have that conversation - with your full history, your priorities and your questions. Start with <a href="/articles/is-hrt-safe">Is HRT safe?</a> and <a href="/articles/menopause-complete-guide">our complete menopause guide</a>, or compare licensed <a href="/">online menopause providers</a>.</p>
<p><em>This article is general information, not medical advice. Sources are linked throughout and were checked on October 24, 2026; regulatory and product details may change. A licensed clinician who knows your history should help you decide what, if any, treatment is right for you.</em></p>`,
    },
  ],
};
