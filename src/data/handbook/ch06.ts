import type { Chapter } from "./types";

export const ch06: Chapter = {
  number: 6,
  title: "Water and Drinks",
  subtitle: "What to offer, how much, and what to skip",
  image: "water",
  intro:
    "Once solid foods enter the picture, questions about drinks multiply fast: does my baby need water now, when can they have cow's milk, and what about juice at grandma's house? This chapter untangles the guidance on fluids for babies and toddlers, covering how much milk is still needed, when and how to introduce a cup, and why sugary drinks deserve a firm no for the first years of life. We will also cover the practical side of hydration during hot weather, illness and increased activity, along with the warning signs of dehydration every parent should recognize. Getting drinks right is a quieter but equally important part of building lifelong healthy habits alongside solid foods.",
  blocks: [
    {
      type: "heading",
      text: "Milk still comes first",
      sub: "Breast milk or formula remains the main drink for the first year",
    },
    {
      type: "paragraph",
      text: "Even as your baby starts eating more solid food, breast milk or formula should remain the primary source of nutrition and hydration through the first year of life. Solid foods complement milk feeds; they do not replace them, especially before nine months.",
    },
    {
      type: "paragraph",
      text: "Cow's milk as a main drink is not recommended before twelve months because it is low in iron and vitamin E and can be hard on a young baby's kidneys and gut. Small amounts of cow's milk mixed into cooking, like in porridge or sauces, are fine well before then.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Water needed before 6 months", value: "None, breast milk or formula is sufficient" },
        { label: "Water introduction", value: "Small sips from around 6 months, alongside meals" },
        { label: "Cow's milk as a drink", value: "From 12 months onward" },
        { label: "Juice recommendation", value: "Avoid before 12 months; limit strictly after" },
        { label: "Cup introduction", value: "Open or straw cup from around 6 months" },
        { label: "Bottle weaning target", value: "Around 12-18 months" },
      ],
    },
    {
      type: "heading",
      text: "Introducing water",
    },
    {
      type: "paragraph",
      text: "Before six months, babies do not need extra water; breast milk or formula meets all their fluid needs, and extra water can actually be dangerous by diluting sodium levels in very young infants. Once solids begin around six months, small sips of plain water offered in an open or straw cup alongside meals help babies learn to drink and manage new textures.",
    },
    {
      type: "table",
      title: "Drinks by age: type, amount and notes",
      headers: ["Drink type", "From what age", "Daily amount", "Notes"],
      rows: [
        ["Breast milk or formula", "Birth onward", "On demand, gradually decreasing after 12 months", "Main source of nutrition through first year"],
        ["Plain water", "6 months", "Small sips with meals, 60-120 ml by 12 months", "Offer in an open or straw cup, not a bottle"],
        ["Cow's milk (whole)", "12 months", "About 350-500 ml per day", "Should not replace all other foods or crowd out meals"],
        ["100% fruit juice", "Avoid under 12 months; limit 12+", "Max 100-120 ml per day if given at all", "Dilute if offered; whole fruit is always better"],
        ["Flavored or sweetened drinks", "Not recommended at any age in early childhood", "None", "No nutritional benefit, promotes sugar preference and tooth decay"],
        ["Plant-based milks (fortified)", "12 months, with pediatric guidance", "As advised by a health professional", "Check protein and fat content, not a direct formula substitute"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Skip the bottle for water and milk after 12 months",
      body: "Moving to an open cup or straw cup for all drinks by around 12 to 18 months supports healthy oral development and makes weaning off the bottle much easier. Start practicing early so the transition feels familiar rather than abrupt.",
    },
    {
      type: "list",
      title: "Why juice and sweet drinks are best avoided",
      items: [
        "They displace more nutritious foods and milk in a small stomach",
        "They deliver concentrated sugar without the fiber of whole fruit",
        "Frequent sipping bathes teeth in sugar, raising cavity risk",
        "They train a preference for sweetness that can affect eating habits later",
        "Even 100% juice offers little advantage over eating the whole fruit",
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Juice is a healthy way to get fruit servings",
      body: "Juice removes the fiber and much of the chewing effort found in whole fruit, and it is far easier to over-consume in liquid form. A piece of real fruit is almost always the better choice for both nutrition and dental health.",
    },
    {
      type: "heading",
      text: "Hydration in hot weather and during illness",
    },
    {
      type: "paragraph",
      text: "In hot weather or during fever, vomiting or diarrhea, babies and toddlers lose fluid faster and need more frequent offers of milk, water or, when advised by a doctor, oral rehydration solution. Continue breastfeeding or formula on demand during illness, since these remain excellent sources of both fluid and nutrition.",
    },
    {
      type: "paragraph",
      text: "Increased activity as toddlers become more mobile also raises fluid needs. Offer water regularly through the day rather than waiting for your child to ask, since young children are not always reliable at recognizing or communicating thirst.",
    },
    {
      type: "list",
      title: "Signs of dehydration to watch for",
      items: [
        "Fewer wet diapers than usual, or noticeably darker, stronger-smelling urine",
        "Dry lips, mouth or tongue",
        "Sunken soft spot (fontanelle) in young infants",
        "Lethargy, unusual sleepiness or reduced activity",
        "Crying with few or no tears",
        "Sunken eyes",
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "When to call a doctor about dehydration",
      body: "If your baby has significantly fewer wet diapers, a sunken soft spot, dry mouth, unusual drowsiness, or is unable to keep fluids down, contact your pediatrician promptly or seek urgent care, especially in infants under six months.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Oral rehydration solutions",
      body: "During vomiting or diarrhea, a pediatrician may recommend a specially formulated oral rehydration solution rather than water alone, since it replaces lost salts and sugars in the correct balance. Do not substitute homemade mixtures without medical guidance.",
    },
    {
      type: "quote",
      text: "Water is the simplest gift you can offer your child's growing body, but timing and moderation are what make it truly helpful.",
      author: "Pediatric hydration guidance, commonly cited",
    },
    {
      type: "heading",
      text: "Choosing the right cup",
    },
    {
      type: "paragraph",
      text: "Open cups, though messier at first, teach the most natural drinking pattern and are worth the practice from around six months with close supervision. Straw cups are a helpful middle step, encouraging similar tongue and lip movements used in speech development, while spouted sippy cups are best used only briefly, if at all, since prolonged use can affect the way liquid pools around the teeth.",
    },
    {
      type: "list",
      title: "Cup progression tips",
      items: [
        "Start with tiny amounts of water in an open cup during meals around 6 months",
        "Expect spills, and let your baby practice tipping and sipping with help",
        "Introduce a straw cup around the same time as an easy alternative",
        "Limit spouted sippy cup use and phase it out well before age two",
        "Aim to be fully off bottles by 12 to 18 months",
      ],
    },
  ],
  takeaways: [
    "Breast milk or formula remains the main drink through the first year; water is not needed before six months.",
    "Introduce small sips of water in an open or straw cup around six months, alongside meals.",
    "Hold off on cow's milk as a main drink until 12 months, and avoid juice before then entirely.",
    "Avoid sweetened drinks altogether in early childhood; they offer no nutritional benefit and raise cavity risk.",
    "Watch for dehydration signs during hot weather or illness, and offer fluids frequently rather than waiting for thirst cues.",
  ],
};
