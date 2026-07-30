import type { Chapter } from "./types";

export const ch04: Chapter = {
  number: 4,
  title: "How Much Should My Baby Eat?",
  subtitle: "Realistic portion sizes for every age",
  image: "portions",
  intro:
    "One of the most common questions new parents ask is deceptively simple: how much food is actually enough? The honest answer is that babies are remarkably good at self-regulating intake when given the chance, but having realistic benchmarks still helps you offer appropriate amounts without over- or under-feeding. This chapter gives you concrete portion ranges by age and food group, alongside the mindset shift that matters even more than the numbers themselves.",
  blocks: [
    {
      type: "heading",
      text: "Why Portions Are Guides, Not Rules",
    },
    {
      type: "paragraph",
      text: "Unlike adults, babies eat inconsistently from meal to meal and day to day, and that variability is completely normal. A baby who eats heartily at breakfast and barely touches lunch is not necessarily undereating overall. Portion sizes in this chapter are averages meant to reassure you that you are in the right range, not precise targets to hit at every single sitting.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Trust the Weekly Average",
      body: "Instead of judging one meal, look at intake across a full week. Babies often balance a light day with a hungrier one, and total nutrition tends to even out far more than any single plate suggests.",
    },
    {
      type: "heading",
      text: "Portions by Age: 6 to 8 Months",
      sub: "The exploration stage",
    },
    {
      type: "paragraph",
      text: "At this stage, food is mostly about practice, not calories, since milk still supplies the majority of nutrition. Offer one to two tablespoons of a single pureed or mashed food once or twice daily, gradually working toward two to three small meals as interest grows. Expect mess, spitting food back out, and inconsistent amounts eaten; all of this is developmentally appropriate.",
    },
    {
      type: "heading",
      text: "Portions by Age: 9 to 12 Months",
      sub: "Building toward three meals",
    },
    {
      type: "paragraph",
      text: "By nine months, most babies are working up to three meals plus one or two snacks daily, with portions naturally growing alongside appetite and chewing skill. Textures should progress toward soft finger foods and mashed rather than fully pureed textures, supporting the pincer grasp and oral motor development needed for more complex eating later.",
    },
    {
      type: "heading",
      text: "Portions by Age: 12 to 24 Months",
      sub: "Approaching family meals",
    },
    {
      type: "paragraph",
      text: "Toddlers gradually shift toward eating modified versions of family meals, though portions remain far smaller than an adult's. A helpful rule of thumb is roughly one tablespoon of each food group per year of age per meal, though appetite swings are still common and should not be forced past fullness cues.",
    },
    {
      type: "table",
      title: "Portion Sizes by Food Group and Age",
      headers: ["Food Group", "6-8 Months", "9-12 Months", "12-24 Months"],
      rows: [
        ["Grains/Cereal", "1-2 tbsp, 1x daily", "3-4 tbsp, 2x daily", "1/4-1/2 cup, 2-3x daily"],
        ["Fruits", "1-2 tbsp pureed", "2-4 tbsp mashed/chopped", "1/4-1/2 cup chopped"],
        ["Vegetables", "1-2 tbsp pureed", "2-4 tbsp soft-cooked", "1/4-1/2 cup soft-cooked"],
        ["Protein (meat/beans)", "1 tbsp pureed", "2-3 tbsp minced/shredded", "1/4 cup chopped"],
        ["Dairy (yogurt/cheese)", "1-2 tbsp yogurt", "2-4 tbsp yogurt or cheese", "1/2 cup yogurt, 1 oz cheese"],
        ["Meals per Day", "1-2 plus milk", "3 meals + 1-2 snacks", "3 meals + 2 snacks"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Let the Plate Be an Offer, Not a Demand",
      body: "Place a slightly larger portion than you expect your baby to finish on the tray, and let them decide how much to eat. This builds healthy self-regulation and reduces mealtime power struggles down the road.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: A Clean Plate Means a Healthy Baby",
      body: "Encouraging babies to finish every bite can override their natural fullness signals and has been linked to overeating patterns later in childhood. A few bites left behind is not a failure, it is healthy self-regulation in action.",
    },
    {
      type: "heading",
      text: "Recognizing Hunger and Fullness Cues",
    },
    {
      type: "paragraph",
      text: "Hunger cues include leaning toward the spoon, opening the mouth eagerly, smacking lips, or reaching for food. Fullness cues include turning the head away, pushing the spoon away, closing the mouth firmly, slowing the pace of eating, or becoming distracted and playful instead of focused on the food. Learning your own baby's specific signals matters more than any generic portion chart.",
    },
    {
      type: "list",
      title: "Signs Your Baby Is Getting Enough",
      items: [
        "Steady weight gain along their own growth curve at checkups",
        "Six or more wet diapers daily after the newborn period",
        "Reasonable energy levels and alertness during the day",
        "Meeting expected motor and developmental milestones",
        "Interest in food and mealtime, even if amounts vary day to day",
      ],
    },
    {
      type: "heading",
      text: "Growth Spurts and Appetite Swings",
    },
    {
      type: "paragraph",
      text: "Growth spurts commonly cluster around three, six, and nine months, and again in the early toddler years, often bringing a temporary surge in appetite. Conversely, teething, illness, or simple distraction by new mobility skills can cause several days of noticeably reduced intake. Neither pattern usually requires changing your approach, just patience and continued offering of a variety of foods.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "When Reduced Appetite Needs Attention",
      body: "If reduced eating lasts more than a week, comes with weight loss, lethargy, fever, or refusal of liquids, contact your pediatrician promptly rather than waiting it out, since these signs go beyond a typical appetite dip.",
    },
    {
      type: "quote",
      text: "Children are born with an innate ability to regulate their own intake; our job as parents is to provide the what, when, and where, and trust them with the how much.",
      author: "Division of Responsibility, Ellyn Satter Institute",
    },
    {
      type: "keyfacts",
      items: [
        { label: "6-8 months meals", value: "1-2 small meals plus milk feeds" },
        { label: "12 months meals", value: "3 meals + 2 snacks typical" },
        { label: "Rule of thumb", value: "~1 tbsp per food group per year of age" },
        { label: "Wet diapers", value: "6+ daily signals adequate intake" },
        { label: "Growth spurts", value: "Common at 3, 6, 9 months and toddlerhood" },
      ],
    },
  ],
  takeaways: [
    "Portion sizes are helpful guides, not strict rules; judge intake over a full week rather than a single meal.",
    "Food before 9 months is mostly practice, since milk still supplies most nutrition.",
    "By 12 months, most toddlers are eating three meals and two snacks with family-style textures.",
    "Respecting fullness cues, rather than insisting on a clean plate, supports healthy lifelong self-regulation.",
    "Short appetite dips during teething or growth changes are normal; prolonged refusal or lethargy warrants a pediatrician call.",
  ],
};
