import meatloavesImg from "@/assets/recipe-meatloaves.webp";
import {
  Check,
  Clock,
  Brain,
  Leaf,
  Heart,
  Sparkles,
  ShieldCheck,
  Flame,
  Snowflake,
  Download,
  Bell,
  CalendarCheck,
  Users,
  ChevronRight,
  MessageCircle,
  Star,
  Utensils,
  Video,
  Repeat,
  Package,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  ChefHat,
} from "lucide-react";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/INkLCwAKV3zDpg5z5xJZDs?s=cl&p=i&mlu=4&ilr=4&iam=2";

const LAUNCH_DATE = new Date("2026-11-30T00:00:00");

const daysLeft = (() => {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / 86_400_000));
})();

const steps: { title: string; body: string; tip?: string }[] = [
  {
    title: "Grate the vegetables finely",
    body: "Grate the carrot, zucchini and onion on the small holes of a box grater. The finer they are, the sweeter and softer the loaves taste — and the easier they are for little mouths.",
    tip: "No grater? Pulse everything 5–6 times in a food processor.",
  },
  {
    title: "Squeeze out the water",
    body: "Wrap the grated zucchini in a clean kitchen towel and squeeze firmly over the sink for 20–30 seconds. Removing the water is the secret to loaves that hold together instead of turning mushy.",
    tip: "Less water in = loaves that grip perfectly in tiny hands.",
  },
  {
    title: "Build the mixture",
    body: "In a large bowl, combine the ground turkey, squeezed veggies, egg, oats, cheese, parsley, garlic powder and a tiny pinch of salt. Mix with your hands just until everything comes together — about 40 seconds.",
    tip: "Overmixing makes meatloaves dense. Stop as soon as it looks uniform.",
  },
  {
    title: "Rest the mixture",
    body: "Let the bowl sit for 10 minutes so the oats drink up the moisture. This small wait is what keeps the loaves juicy inside and sturdy outside.",
  },
  {
    title: "Shape 12 mini loaves",
    body: "With damp hands, shape the mixture into 12 small oval loaves (about 2 tablespoons each). Mini size means they bake fast, cool fast and fit perfectly in a baby's fist.",
    tip: "Damp hands = no sticking, smoother tops.",
  },
  {
    title: "Bake at 190°C (375°F)",
    body: "Place the loaves on a parchment-lined tray, spacing them a finger apart. Bake for 20–22 minutes until the tops are golden-brown and the centers reach 74°C (165°F).",
  },
  {
    title: "Rest, then serve at the right size",
    body: "Cool 5 minutes — they firm up as they rest. Then serve in the shape your baby's stage needs (see the age guide below). Soft enough to squish between thumb and finger? Then it's ready.",
  },
];

const appFeatures = [
  {
    icon: Utensils,
    title: "300+ Recipes (6–36 Mo)",
    text: "Age-adapted with pediatrician guidelines & texture stages",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Meal Planner & Feeds",
    text: "Done-for-you menus with automated grocery shopping lists",
  },
  {
    icon: Users,
    title: "In-App Mom Community",
    text: "Moms share real photos, feeding videos, wins & experiences",
  },
  {
    icon: ShieldCheck,
    title: "Safe Allergen Tracker",
    text: "Step-by-step introduction of top allergens & reaction log",
  },
  {
    icon: Snowflake,
    title: "Freezer Prep & Batch Cook",
    text: "Cook once, freeze safely & ready in under 3 minutes",
  },
  {
    icon: Package,
    title: "Smart Pantry Helper",
    text: "Cook nutritious meals with what you already have at home",
  },
  {
    icon: Repeat,
    title: "1-Tap Ingredient Swap",
    text: "Safe substitutions for allergies or missing ingredients",
  },
  {
    icon: TrendingUp,
    title: "Growth & Milestones",
    text: "Track chewing, self-feeding leaps & food variety score",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div className="relative overflow-hidden">
          <img
            src={meatloavesImg}
            alt="Golden baked turkey and veggie mini meatloaves on a white plate, one broken open showing soft carrot and zucchini flecks inside"
            width={1408}
            height={1920}
            className="w-full h-[300px] object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent" />
          <div className="absolute top-3 left-4 right-4 flex justify-between items-center">
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-700 shadow">
              Savory Finger Food
            </span>
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
              9+ months
            </span>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 bg-amber-50">
          <h1 className="text-xl font-extrabold text-foreground leading-tight mb-1">
            Turkey Veggie Mini Meatloaves
          </h1>
          <p className="text-xs text-muted-foreground mb-3 leading-snug">
            Tender, protein-packed mini loaves with sweet carrot and zucchini
            baked right in. Golden outside, soft inside — made for little hands.
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { icon: Clock, label: "Prep", value: "10 min" },
              { icon: Flame, label: "Bake", value: "22 min" },
              { icon: Users, label: "Makes", value: "12" },
              { icon: Snowflake, label: "Freezes", value: "Yes" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-lg border border-amber-200 py-2"
              >
                <Icon className="w-3.5 h-3.5 mx-auto text-amber-600 mb-0.5" />
                <p className="text-[9px] text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-[11px] font-bold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { icon: Brain, label: "Brain Fats" },
            { icon: Leaf, label: "Hidden Veggies" },
            { icon: Heart, label: "Iron-Rich" },
            { icon: Sparkles, label: "Grab & Go" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200"
            >
              <Icon className="w-4 h-4 mx-auto text-amber-600 mb-1" />
              <p className="text-[9px] text-amber-700 font-medium">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed mt-3">
          Turkey brings the iron babies need for brain development, while carrot
          and zucchini melt into sweetness — most toddlers never notice the
          vegetables. One batch covers lunch, dinner and a week of freezer
          backups.
        </p>
      </section>

      {/* Ingredients */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Ingredients</h2>
        <ul className="space-y-1.5">
          {[
            "500 g (1 lb) ground turkey (or chicken)",
            "1 medium carrot, finely grated",
            "1 small zucchini, grated and squeezed dry",
            "1/2 small onion, finely grated",
            "1 egg (binder)",
            "60 g (1/2 cup) rolled oats — or 40 g breadcrumbs",
            "30 g (1/4 cup) mild grated cheese, e.g. mozzarella",
            "1 tbsp chopped parsley (optional)",
            "1/4 tsp garlic powder",
            "Tiny pinch of salt — and that's it",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-[11px] text-foreground/80 flex gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            Egg allergy? Swap the egg for 2 tbsp extra oats plus 2 tbsp milk.
          </span>
        </div>
      </section>

      {/* Step by step */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          Step by Step
        </h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 shadow-sm">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground leading-snug">
                  {step.title}
                </p>
                <p className="text-[11px] text-foreground/75 leading-relaxed mt-0.5">
                  {step.body}
                </p>
                {step.tip && (
                  <p className="text-[10.5px] text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-2 py-1 mt-1.5 leading-snug">
                    💡 {step.tip}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Servings by age */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          Serving by Age
        </h2>
        <div className="space-y-2">
          {[
            {
              age: "9–12 mo",
              text: "Cut each loaf into 2–3 thick strips. The rounded shapes are easy to grip and to gum.",
            },
            {
              age: "12–18 mo",
              text: "Serve a whole mini loaf. It's soft enough to take confident bites.",
            },
            {
              age: "6–8 mo",
              text: "Offer mashed or crumbled onto a pre-loaded spoon — the flavor is perfect even before self-feeding.",
            },
          ].map((row) => (
            <div
              key={row.age}
              className="flex gap-3 bg-white border border-amber-100 rounded-lg p-2.5"
            >
              <span className="text-[10px] font-bold text-white bg-amber-500 rounded-full px-2 py-1 h-fit flex-shrink-0">
                {row.age}
              </span>
              <p className="text-[11px] text-foreground/80 leading-snug">
                {row.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground mt-3 flex gap-2">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          <span>
            Always check the internal temperature has reached 74°C (165°F), and
            let loaves cool until they squish easily — never serve hot from the
            oven.
          </span>
        </p>
      </section>

      {/* Nutrition */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          🧡 Why Moms Love It
        </h2>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
          <ul className="space-y-2 text-[11px] text-foreground">
            <li>
              <strong>Iron &amp; Protein</strong> — turkey fuels brain growth
              and keeps energy steady between naps
            </li>
            <li>
              <strong>Vitamin A</strong> — carrot supports eyes and immunity
            </li>
            <li>
              <strong>Gentle Fiber</strong> — zucchini and oats keep digestion
              happy
            </li>
            <li>
              <strong>No sugar, no filler</strong> — real food you can see and
              name
            </li>
            <li>
              <strong>Batch-friendly</strong> — one tray becomes four meals
            </li>
          </ul>
        </div>
      </section>

      {/* Storage */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-1">Storage</h2>
        <ul className="space-y-1.5">
          {[
            "Fridge: airtight container, up to 3 days.",
            "Freezer: freeze on a tray, then bag — up to 2 months.",
            "Reheat: steam or microwave until warmed through, then cool to squishy before serving.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[11px] text-muted-foreground"
            >
              <Snowflake className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= APP LAUNCH ================= */}
      <section id="launch" className="px-4 py-5 bg-amber-50/50">
        <div className="bg-white rounded-2xl border-2 border-amber-200 p-4 sm:p-5 shadow-sm">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Official Launch • November 30</span>
            </div>
            <h2 className="text-xl font-extrabold text-foreground leading-tight">
              The BabyBites App
            </h2>
            <p className="text-[11.5px] text-muted-foreground leading-snug mt-0.5">
              Everything you need to feed your baby from 6 to 36 months — in one single app.
            </p>
          </div>

          {/* Punchy Sales Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5 text-left">
            {appFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-start gap-2 p-2 rounded-lg bg-amber-50/60 border border-amber-100/80"
                >
                  <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11.5px] font-bold text-foreground leading-tight">
                      {feat.title}
                    </p>
                    <p className="text-[10.5px] text-muted-foreground leading-snug">
                      {feat.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sales Highlight Banner */}
          <div className="bg-amber-100/60 border border-amber-200 rounded-xl px-3 py-2 text-center text-[11px] font-semibold text-amber-900 mb-3">
            ✨ 300+ recipes, meal planner, mom community &amp; smart tools — unified in ONE app.
          </div>

          {/* WhatsApp VIP Announcement Box */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-xl p-3 border border-amber-200 text-center mb-2">
            <p className="text-xs font-bold text-amber-900 mb-0.5">
              Exclusive details &amp; download link drop in WhatsApp first 🔔
            </p>
            <p className="text-[11px] text-muted-foreground leading-snug mb-2.5">
              Early app walkthrough videos, sneak peeks, and founding-member perks are shared strictly inside our VIP group.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-xl py-3 px-4 shadow flex items-center justify-center gap-2 text-xs sm:text-sm transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Join the VIP WhatsApp Group</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          <p className="text-center text-[10.5px] text-muted-foreground flex items-center justify-center gap-1">
            <Download className="w-3 h-3 text-amber-600" />
            The app will be free to download on November 30 — details in the group
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Made with care for busy, loving parents. 🧡
        </p>
      </footer>
    </div>
  );
};

export default Index;
