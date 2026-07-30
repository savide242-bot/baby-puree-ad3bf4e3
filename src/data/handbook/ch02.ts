import type { Chapter } from "./types";

export const ch02: Chapter = {
  number: 2,
  title: "Building a Balanced Plate",
  subtitle: "A simple visual formula for every meal",
  image: "plate",
  intro:
    "Once you understand what your baby needs, the next challenge is translating that into an actual plate, three times a day, without a nutrition degree. The good news is that a balanced baby or toddler meal follows a simple, repeatable visual formula, one you can use whether you are serving oatmeal, a stir fry, or leftover pasta. This chapter breaks that formula down by age and gives you real, mix-and-match meal examples so you never have to start from scratch. Think of it as training wheels for feeding, until balancing a plate becomes second nature.",
  blocks: [
    {
      type: "heading",
      text: "The Core Formula: Protein, Carb, Fat, Produce",
      sub: "One plate, four jobs",
    },
    {
      type: "paragraph",
      text: "A balanced baby or toddler meal covers four roles: a protein source for growth, a carbohydrate for energy, a source of healthy fat for brain development, and a fruit or vegetable for vitamins and fiber. You do not need all four at every single snack, but aim for all four across each main meal. This is the same logic used by pediatric dietitians when they build sample menus.",
    },
    {
      type: "paragraph",
      text: "For example, oatmeal (carb) cooked in whole milk (fat and protein) with mashed banana (produce) covers three of the four roles in one bowl. Add a spoon of nut butter and you have covered all four. The formula works because it removes decision fatigue: instead of wondering 'is this a good meal,' you simply check the boxes.",
    },
    {
      type: "table",
      title: "Plate Proportions by Age",
      headers: ["Age", "Protein", "Carbohydrate", "Fruit/Vegetable", "Fat source"],
      rows: [
        ["6-8 months", "1-2 tbsp mashed/pureed", "1-2 tbsp soft grain", "1-2 tbsp puree", "Built into milk feeds"],
        ["9-11 months", "2-4 tbsp, soft pieces", "2-4 tbsp", "2-4 tbsp, soft pieces", "1 tsp oil, butter, or nut butter"],
        ["12-24 months", "1/4 to 1/2 cup", "1/4 to 1/2 cup", "1/4 to 1/2 cup", "1-2 tsp added fat"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Use your own hand as a measuring cup",
      body: "A toddler's protein portion is roughly the size of their own palm, and a carbohydrate or produce portion is roughly a cupped handful. This scales automatically as your child grows, so you never need to weigh food.",
    },
    {
      type: "heading",
      text: "6 to 8 Months: Simple Layers, Not Perfect Balance",
      sub: "Every food does not need every nutrient",
    },
    {
      type: "paragraph",
      text: "At this age, do not stress about balancing every single spoonful. A meal of just iron-fortified cereal, or just pureed sweet potato, is perfectly fine, since milk is still covering the bulk of nutrition. The goal here is exposure and skill-building: introducing single ingredients, then simple combinations, and watching for reactions.",
    },
    {
      type: "list",
      title: "Sample first-stage meals (6-8 months)",
      items: [
        "Iron-fortified oat cereal mixed with breast milk or formula",
        "Pureed lentils with a swirl of plain whole-milk yogurt",
        "Mashed avocado with a few flakes of soft cooked salmon",
        "Pureed sweet potato with a pinch of cinnamon",
        "Mashed banana with a spoon of smooth peanut butter, thinned",
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Choking hazards to avoid at every stage",
      body: "Whole grapes, whole nuts, popcorn, hard raw vegetables, chunks of hot dog, and thick spoonfuls of peanut butter are common choking hazards. Always cut round foods lengthwise, cook vegetables until soft, and thin sticky foods like nut butter with water or milk.",
    },
    {
      type: "heading",
      text: "9 to 11 Months: Introducing the Full Plate",
      sub: "Practicing self-feeding with real textures",
    },
    {
      type: "paragraph",
      text: "By 9 months most babies can manage soft finger foods and are ready to see a genuine mini plate with distinct sections. This is a great time to practice the pincer grasp with foods like soft-cooked peas, small pasta shapes, or diced ripe pear, alongside a protein and a starch.",
    },
    {
      type: "paragraph",
      text: "A typical dinner might look like shredded slow-cooked chicken, soft-cooked diced sweet potato, and steamed green beans cut into thirds, with a few cubes of avocado for fat. Offering the same four-part structure at every meal, even with different ingredients, builds a predictable and calming mealtime rhythm for both of you.",
    },
    {
      type: "list",
      title: "Sample second-stage meals (9-11 months)",
      items: [
        "Soft-cooked scrambled egg, diced toast strips, and mashed peas",
        "Shredded turkey, mashed potato with butter, and steamed carrot coins",
        "Small cheese cubes, whole wheat pasta shells, and roasted zucchini",
        "Flaked salmon, soft rice, and steamed broccoli florets",
        "Black beans, diced avocado, and soft corn tortilla pieces",
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: babies need separate baby food, not family meals",
      body: "Most family meals can be adapted for babies over 9 months simply by cutting portions smaller, softening textures, and holding back added salt until the food is portioned out. Cooking one meal for the whole family, then adjusting your baby's portion, saves enormous time and builds shared eating habits early.",
    },
    {
      type: "heading",
      text: "12 to 24 Months: The Toddler Plate in Full",
      sub: "Consistency over perfection",
    },
    {
      type: "paragraph",
      text: "After 12 months, toddlers can generally eat what the family eats, adjusted for size and salt. This is also the age when appetite becomes noticeably less predictable, some days everything is eaten and other days almost nothing, which is developmentally normal and related to slowing growth rate compared to infancy.",
    },
    {
      type: "paragraph",
      text: "Rather than chasing a perfectly balanced plate at every single meal, aim for balance across the whole day or even the whole week. A toddler who skips vegetables at lunch but eats them eagerly at dinner is still doing fine. Offer the same four-part structure consistently and let appetite fluctuate without pressure or bribing.",
    },
    {
      type: "table",
      title: "Sample Full Day of Balanced Eating, 12-24 Months",
      headers: ["Meal", "Protein", "Carb", "Produce", "Fat"],
      rows: [
        ["Breakfast", "Scrambled egg", "Whole wheat toast", "Sliced strawberries", "Butter on toast"],
        ["Lunch", "Diced chicken", "Brown rice", "Steamed broccoli", "Olive oil drizzle"],
        ["Snack", "Plain yogurt", "-", "Diced mango", "Yogurt fat"],
        ["Dinner", "Lentil stew", "Soft bread", "Diced carrots", "Coconut milk in stew"],
      ],
    },
    {
      type: "quote",
      text: "Your job is to offer a variety of nutritious foods on a regular schedule. Your child's job is to decide whether and how much to eat.",
      author: "Ellyn Satter, feeding relationship expert",
    },
    {
      type: "callout",
      kind: "note",
      title: "Division of responsibility",
      body: "This principle, developed by dietitian Ellyn Satter, is one of the most trusted frameworks in pediatric feeding. Parents choose what, when, and where food is offered; the child decides how much and whether to eat it. This reduces mealtime battles significantly once truly practiced.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Protein portion, 12-24 months", value: "1/4 to 1/2 cup" },
        { label: "Recommended plate structure", value: "4 food groups per main meal" },
        { label: "Meals plus snacks per day", value: "3 meals + 2-3 snacks" },
        { label: "Added salt guidance", value: "Avoid before 12 months" },
        { label: "Best balance window", value: "Across the day or week, not per meal" },
      ],
    },
  ],
  takeaways: [
    "Every balanced plate covers four roles: protein, carbohydrate, fat, and fruit or vegetable.",
    "Before 9 months, exposure matters more than perfect balance in a single meal.",
    "After 9 months, adapt family meals instead of cooking separate baby food whenever possible.",
    "Balance the day or the week, not every single meal, especially for unpredictable toddler appetites.",
    "Use the division of responsibility: you choose what and when, your child chooses how much.",
  ],
};
