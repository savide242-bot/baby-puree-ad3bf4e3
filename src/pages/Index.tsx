import recipeImage from "@/assets/recipe-sweet-potato-apple.jpg";
import appRecipes from "@/assets/app-recipes.png";
import appShopping from "@/assets/app-shopping.png";
import { Check, Clock, Eye, Leaf, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRecipePdf } from "@/hooks/useRecipePdf";

const Index = () => {
  const { generateRecipePdf } = useRecipePdf();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full">
          <img 
            src={recipeImage} 
            alt="Golden Sweet Potato & Apple Purée - First Foods Recipe" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="px-4 py-4 bg-amber-50">
          <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1">First Foods Recipe</p>
          <h1 className="text-lg font-bold text-foreground leading-tight mb-1">
            Golden Sweet Potato & Apple Purée
          </h1>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Clock className="w-3 h-3" />
            20 min • Easy cook • 6+ months
          </p>
        </div>
      </section>

      {/* Recipe Benefits */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200">
            <Eye className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <p className="text-[9px] text-amber-700 font-medium">Vitamin A</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200">
            <Leaf className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <p className="text-[9px] text-amber-700 font-medium">Fiber Rich</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200">
            <Heart className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <p className="text-[9px] text-amber-700 font-medium">Beta-Carotene</p>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Ingredients</h2>
        <ul className="space-y-1.5">
          {[
            "1 medium sweet potato (vitamin A + fiber)",
            "1 ripe apple, peeled & cored (natural sweetness + vitamin C)",
            "2 tbsp breast milk or formula (familiar taste + nutrition)",
            "Tiny pinch of cinnamon (optional, aids digestion)",
            "1 tsp unsalted butter or olive oil (healthy fats for brain)"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Instructions</h2>
        <ol className="space-y-2">
          {[
            "Peel and dice sweet potato into small cubes",
            "Peel, core and dice the apple into similar pieces",
            "Steam or boil until fork-tender (about 15 minutes)",
            "Drain and let cool slightly",
            "Add to blender with milk and butter",
            "Blend until silky smooth and creamy",
            "Add cinnamon and blend briefly to combine",
            "Serve warm — babies love the golden color!"
          ].map((step, i) => (
            <li key={i} className="flex gap-2 text-xs text-foreground">
              <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Why Babies Love It */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Why Babies Love It</h2>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 space-y-1.5 border border-amber-100">
          {[
            "Naturally sweet taste — no added sugar needed!",
            "Beautiful golden-orange color attracts curious eyes",
            "Silky smooth texture is gentle on new eaters",
            "Warm comfort food perfect for first meals"
          ].map((benefit, i) => (
            <p key={i} className="flex items-center gap-2 text-[11px] text-foreground">
              <Check className="w-3 h-3 text-amber-600 flex-shrink-0" />
              {benefit}
            </p>
          ))}
        </div>
      </section>

      {/* Health Benefits */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">🧡 Health Benefits</h2>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
          <ul className="space-y-2 text-[11px] text-foreground">
            <li><strong>Vitamin A</strong> — Essential for healthy eyes, skin and immune system</li>
            <li><strong>Fiber</strong> — Supports gentle digestion and regular bowel movements</li>
            <li><strong>Beta-Carotene</strong> — Powerful antioxidant that protects growing cells</li>
            <li><strong>Vitamin C</strong> — Apple adds immunity boost and iron absorption</li>
            <li><strong>Complex Carbs</strong> — Provides sustained energy for active babies</li>
          </ul>
        </div>
      </section>

      {/* Storage Tips */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-1">Storage</h2>
        <p className="text-[11px] text-muted-foreground">
          Refrigerate in an airtight container for up to 3 days. Freeze in ice cube trays for up to 2 months — thaw in fridge overnight and warm gently before serving.
        </p>
      </section>

      {/* Download PDF Button */}
      <section className="px-4 py-4">
        <Button 
          onClick={generateRecipePdf}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm py-5 rounded-full shadow-lg flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Recipe PDF
        </Button>
      </section>

      {/* Age Guide Section */}
      <section className="px-4 py-5 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="text-center mb-5">
          <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1">Feeding Guide</p>
          <h2 className="text-base font-bold text-foreground leading-tight">
            When to Introduce Each Texture
          </h2>
        </div>
        
        {/* Visual Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-300 via-green-300 via-blue-300 to-purple-300" />
          
          <div className="space-y-4">
            {/* 6+ months - Smooth */}
            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">6+</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-orange-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Smooth Purees</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-orange-400" />
                    <div className="w-6 h-2 rounded-full bg-orange-100" />
                    <div className="w-6 h-2 rounded-full bg-orange-100" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🥕 Carrot, sweet potato, avocado, banana — all blended silky smooth
                </p>
              </div>
            </div>

            {/* 7-8 months - Mashed */}
            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">7-8</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-green-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Soft Mashes</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-green-400" />
                    <div className="w-6 h-2 rounded-full bg-green-400" />
                    <div className="w-6 h-2 rounded-full bg-green-100" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🥦 Broccoli, peas, chicken, yogurt — mashed with small soft lumps
                </p>
              </div>
            </div>

            {/* 9-11 months - Chunky */}
            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">9-11</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-blue-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Finger Foods</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-blue-400" />
                    <div className="w-6 h-2 rounded-full bg-blue-400" />
                    <div className="w-6 h-2 rounded-full bg-blue-300" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🍝 Pasta, soft fruits, eggs, cheese — soft chunks for self-feeding
                </p>
              </div>
            </div>

            {/* 12+ months - Family */}
            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">12+</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-purple-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Family Meals</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-purple-400" />
                    <div className="w-6 h-2 rounded-full bg-purple-400" />
                    <div className="w-6 h-2 rounded-full bg-purple-400" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🍎 Most foods! Cut small, avoid honey & whole nuts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider before App Promo */}
      <div className="border-b border-amber-200" />

      {/* App Promo Section */}
      <section className="px-4 py-6 bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="text-center mb-4">
          <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1">Want More Healthy Recipes?</p>
          <h2 className="text-base font-bold text-foreground leading-tight">
            Get 300+ Recipes Like This
          </h2>
          <p className="text-[11px] text-muted-foreground mt-1">
            Plus meal planning, food scanner & more
          </p>
        </div>

        {/* App Screenshots - Side by Side on Mobile */}
        <div className="flex gap-2 justify-center mb-4">
          <img 
            src={appRecipes} 
            alt="BabyBites App - Recipes" 
            className="w-[45%] max-w-[160px] h-auto rounded-lg shadow-lg border border-amber-200"
          />
          <img 
            src={appShopping} 
            alt="BabyBites App - Shopping List" 
            className="w-[45%] max-w-[160px] h-auto rounded-lg shadow-lg border border-amber-200"
          />
        </div>

        {/* Features List */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
          {[
            "300+ healthy recipes",
            "Weekly meal planner",
            "Food scanner",
            "Growth tracker",
            "Smart shopping list",
            "Mom community",
            "Nutrition tracker",
            "Expert tips"
          ].map((feature, i) => (
            <p key={i} className="flex items-center gap-1.5 text-[10px] text-foreground">
              <Check className="w-3 h-3 text-amber-600 flex-shrink-0" />
              {feature}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="https://babybitespage.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm py-5 rounded-full shadow-lg">
            Learn More →
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="px-4 py-4 text-center bg-amber-50">
        <p className="text-[9px] text-muted-foreground">
          © 2024 BabyBites. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;