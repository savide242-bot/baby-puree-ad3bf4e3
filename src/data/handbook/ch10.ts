import type { Chapter } from "./types";

export const ch10: Chapter = {
  number: 10,
  title: "Myths and Truths",
  subtitle: "25 things you have been told that are not true",
  image: "myths",
  intro:
    "Feeding advice comes from every direction: grandparents, social media, well-meaning friends, and even outdated books. Some of it is helpful, but much of it is outdated, oversimplified, or simply wrong. This chapter separates persistent myths from current evidence-based guidance so you can feed your baby with confidence instead of confusion. We will walk through more than twenty of the most common myths, why they took hold, and what the actual research and pediatric guidelines say today.",
  blocks: [
    {
      type: "heading",
      text: "Why Myths Spread So Easily",
    },
    {
      type: "paragraph",
      text: "Feeding guidance has changed considerably over the past few decades, and advice that was once standard is often repeated long after it has been updated. Add in cultural traditions, marketing from baby food companies, and the natural anxiety of new parenthood, and myths spread faster than corrections ever can.",
    },
    {
      type: "callout",
      kind: "note",
      title: "How to use this chapter",
      body: "Each myth is paired with the current, evidence-based truth. When in doubt, always confirm guidance with your own pediatrician, since individual circumstances can change recommendations.",
    },
    {
      type: "heading",
      text: "Myths About Starting Solids",
    },
    {
      type: "table",
      title: "Common Myths vs the Truth: Starting Solids",
      headers: ["Myth", "Truth"],
      rows: [
        [
          "Rice cereal should always be the first food",
          "There is no required first food; single-ingredient vegetables, fruits, or iron-rich foods are equally valid starting points",
        ],
        [
          "Baby-led weaning is dangerous and causes more choking",
          "Research shows no significant difference in choking risk between baby-led weaning and traditional purees when done safely",
        ],
        [
          "You must delay allergens like peanut and egg until age one",
          "Current guidelines recommend introducing common allergens around six months to reduce the risk of developing allergies",
        ],
        [
          "Starting solids early helps a baby sleep through the night",
          "Multiple studies show introducing solids earlier does not reliably improve infant sleep",
        ],
        [
          "Babies need teeth before they can start eating solid food",
          "Babies use their gums to mash soft foods effectively long before teeth erupt",
        ],
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Purees must come before finger foods",
      body: "Truth: Many babies safely and successfully start directly with soft, appropriately sized finger foods, following the baby-led weaning approach, without ever needing purees.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: A baby who gags on solids is not ready",
      body: "Truth: Gagging is a normal, protective part of learning to eat and happens more frequently with new textures. It does not mean a baby is unready or unsafe.",
    },
    {
      type: "heading",
      text: "Myths About Specific Foods",
    },
    {
      type: "list",
      title: "Food-specific myths worth retiring",
      items: [
        "Myth: Fruit before vegetables will make a baby refuse vegetables. Truth: taste preference research shows no lasting effect of order of introduction.",
        "Myth: Spicy or seasoned food is bad for babies. Truth: mild herbs and spices are safe and can help build a varied palate.",
        "Myth: Juice is a healthy drink for babies. Truth: juice offers little nutritional benefit and displaces breast milk, formula, and whole fruit.",
        "Myth: Honey is fine in small amounts before one year. Truth: honey carries a real risk of infant botulism and must be avoided until after twelve months.",
        "Myth: Cow's milk as a drink is fine from six months. Truth: cow's milk as a main drink should wait until twelve months, though small amounts in cooking are fine.",
      ],
    },
    {
      type: "table",
      title: "Common Myths vs the Truth: Foods and Nutrients",
      headers: ["Myth", "Truth"],
      rows: [
        [
          "Homemade baby food is always healthier than store-bought",
          "Both can be nutritious; quality depends on ingredients and preparation, not the source",
        ],
        [
          "Organic baby food is nutritionally superior",
          "Organic and conventional produce offer similar nutritional value for infants",
        ],
        [
          "A chubby baby is automatically a healthy baby",
          "Growth should be tracked along an individual curve over time, not judged by chubbiness alone",
        ],
        [
          "Salt should be added to make food tastier for baby",
          "Babies' kidneys cannot process much sodium; added salt should be avoided in the first year",
        ],
        [
          "Babies need cereal or bread at every meal for energy",
          "Babies get most of their energy from breast milk or formula through the first year; solids are complementary",
        ],
      ],
    },
    {
      type: "heading",
      text: "Myths About Feeding Behavior",
    },
    {
      type: "paragraph",
      text: "Beyond specific foods, many myths involve how and when a baby should eat, often creating unnecessary pressure for parents to control amounts or timing.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: A baby should always finish the last spoonful",
      body: "Truth: forcing the last bite overrides natural fullness cues and can contribute to overeating patterns later in life. Let your baby decide when they are done.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: New foods must be tried only once before giving up",
      body: "Truth: it often takes eight to fifteen exposures before a baby accepts a new food. Repeated, pressure-free offering matters more than a single attempt.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Beware of bottle-propping and feeding while distracted",
      body: "Screens and constant distraction during meals can interfere with a baby's ability to notice hunger and fullness signals.",
    },
    {
      type: "list",
      title: "More behavior myths to let go of",
      items: [
        "Myth: You should never let a baby touch or play with food. Truth: sensory play with food builds comfort and reduces future pickiness.",
        "Myth: A baby who refuses a food dislikes it forever. Truth: preferences shift quickly and often return with repeated, relaxed exposure.",
        "Myth: Bigger portions mean a healthier, better-fed baby. Truth: appetite naturally varies day to day and meal to meal.",
        "Myth: Snacking between meals ruins appetite and should be avoided. Truth: small, balanced snacks are a normal and healthy part of an infant's eating pattern.",
        "Myth: A clean plate means the meal was successful. Truth: success is measured by variety and a positive mealtime experience, not an empty bowl.",
      ],
    },
    {
      type: "heading",
      text: "Myths About Milk and Weaning",
    },
    {
      type: "table",
      title: "Common Myths vs the Truth: Milk and Weaning",
      headers: ["Myth", "Truth"],
      rows: [
        [
          "Starting solids means you should stop breastfeeding or formula right away",
          "Milk remains the primary nutrition source through the first year; solids are complementary, not a replacement",
        ],
        [
          "Weaning must be completed by twelve months",
          "There is no fixed deadline; many families continue breastfeeding well past the first birthday",
        ],
        [
          "Formula-fed babies do not need the same careful food introduction",
          "All babies, regardless of milk source, benefit from the same thoughtful, gradual introduction of solids",
        ],
      ],
    },
    {
      type: "quote",
      text: "The goal is not a perfect eater, it is a confident, curious eater who trusts their own body.",
      author: "Registered pediatric dietitian",
    },
    {
      type: "callout",
      kind: "tip",
      title: "When you hear a new claim",
      body: "Ask whether it comes from a current pediatric guideline or an outdated tradition, and check with your pediatrician before making a major change.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Exposures often needed to accept a new food", value: "8 to 15 tries" },
        { label: "Recommended allergen introduction window", value: "Around 6 months" },
        { label: "Age to avoid honey until", value: "12 months" },
        { label: "Age to introduce cow's milk as a drink", value: "12 months" },
        { label: "Choking risk difference, BLW vs purees", value: "No significant difference when done safely" },
      ],
    },
  ],
  takeaways: [
    "Many popular feeding rules are outdated traditions rather than current evidence.",
    "Allergens are now recommended earlier, around six months, not delayed until age one.",
    "Gagging, food refusal, and appetite swings are normal and not signs of failure.",
    "Forcing the last bite or a clean plate can override a baby's natural fullness cues.",
    "When in doubt, check new claims against current pediatric guidelines and your own doctor.",
  ],
};
