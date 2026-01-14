import { jsPDF } from "jspdf";

interface RecipeData {
  title: string;
  subtitle: string;
  time: string;
  age: string;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  healthBenefits: { title: string; description: string }[];
  storage: string;
}

const recipeData: RecipeData = {
  title: "First Foods Recipe",
  subtitle: "Golden Sweet Potato & Apple Purée",
  time: "20 min",
  age: "6+ months",
  ingredients: [
    "1 medium sweet potato (vitamin A + fiber)",
    "1 ripe apple, peeled & cored (natural sweetness + vitamin C)",
    "2 tbsp breast milk or formula (familiar taste)",
    "Tiny pinch of cinnamon (optional, aids digestion)",
    "1 tsp unsalted butter or olive oil (healthy fats)"
  ],
  instructions: [
    "Peel and dice sweet potato into small cubes",
    "Peel, core and dice the apple",
    "Steam or boil until fork-tender (15 min)",
    "Drain and let cool slightly",
    "Add to blender with milk and butter",
    "Blend until silky smooth",
    "Add cinnamon and blend briefly",
    "Serve warm — babies love it!"
  ],
  benefits: [
    "Naturally sweet - no added sugar needed!",
    "Golden-orange color attracts baby's eyes",
    "Silky smooth texture is gentle on new eaters",
    "Warm comfort food perfect for first meals"
  ],
  healthBenefits: [
    { title: "Vitamin A", description: "Healthy eyes & immune system" },
    { title: "Fiber", description: "Gentle digestion support" },
    { title: "Beta-Carotene", description: "Powerful antioxidant" },
    { title: "Vitamin C", description: "Immunity & iron absorption" }
  ],
  storage: "Fridge: 3 days. Freezer: 2 months in ice cube trays."
};

export const generateRecipePdf = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 12;

  // Header background
  doc.setFillColor(254, 243, 199); // amber-100
  doc.rect(0, 0, pageWidth, 42, "F");

  // Decorative circles
  doc.setFillColor(251, 191, 36); // amber-400
  doc.circle(pageWidth - 10, 8, 15, "F");
  doc.setFillColor(245, 158, 11); // amber-500
  doc.circle(12, 38, 10, "F");

  // Small heart icon circle
  doc.setFillColor(217, 119, 6); // amber-600
  doc.circle(pageWidth / 2, 10, 6, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("♡", pageWidth / 2, 12, { align: "center" });

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(217, 119, 6); // amber-600
  y = 22;
  doc.text("FIRST FOODS RECIPE", pageWidth / 2, y, { align: "center" });

  doc.setFontSize(18);
  doc.setTextColor(55, 65, 81); // gray-700
  y += 9;
  doc.text(recipeData.subtitle, pageWidth / 2, y, { align: "center" });

  // Time & Age badges
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  y += 7;
  doc.text(recipeData.time + " • Easy cook • " + recipeData.age, pageWidth / 2, y, { align: "center" });

  y = 48;

  // Benefits bar
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "F");
  
  const benefitLabels = ["Vitamin A", "Fiber Rich", "Beta-Carotene"];
  const benefitWidth = contentWidth / 3;
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(180, 83, 9); // amber-700
  benefitLabels.forEach((benefit, i) => {
    const x = margin + benefitWidth * i + benefitWidth / 2;
    doc.setFillColor(245, 158, 11);
    doc.circle(x - 14, y + 6, 2, "F");
    doc.text(benefit, x, y + 7.5, { align: "center" });
  });

  y += 18;

  // Two column layout for Ingredients and Instructions
  const colWidth = (contentWidth - 6) / 2;
  const leftColX = margin;
  const rightColX = margin + colWidth + 6;

  // Ingredients Section (Left Column)
  doc.setFillColor(255, 251, 235); // amber-50
  doc.roundedRect(leftColX, y, colWidth, 52, 3, 3, "F");
  doc.setDrawColor(253, 230, 138); // amber-200
  doc.setLineWidth(0.3);
  doc.roundedRect(leftColX, y, colWidth, 52, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(55, 65, 81);
  doc.text("Ingredients", leftColX + 5, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(75, 85, 99);
  
  let ingredientY = y + 15;
  recipeData.ingredients.forEach((ingredient) => {
    doc.setFillColor(245, 158, 11);
    doc.circle(leftColX + 6, ingredientY - 0.5, 1, "F");
    const lines = doc.splitTextToSize(ingredient, colWidth - 14);
    doc.text(lines, leftColX + 10, ingredientY);
    ingredientY += lines.length * 4 + 3;
  });

  // Instructions Section (Right Column)
  doc.setFillColor(255, 251, 235);
  doc.roundedRect(rightColX, y, colWidth, 52, 3, 3, "F");
  doc.setDrawColor(253, 230, 138);
  doc.setLineWidth(0.3);
  doc.roundedRect(rightColX, y, colWidth, 52, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(55, 65, 81);
  doc.text("Instructions", rightColX + 5, y + 8);

  doc.setFontSize(8);
  let instructY = y + 15;
  recipeData.instructions.forEach((instruction, i) => {
    doc.setFillColor(245, 158, 11);
    doc.circle(rightColX + 6, instructY - 0.5, 2.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6);
    doc.text(String(i + 1), rightColX + 6, instructY + 0.5, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(75, 85, 99);
    const lines = doc.splitTextToSize(instruction, colWidth - 16);
    doc.text(lines, rightColX + 12, instructY);
    instructY += lines.length * 4 + 2;
  });

  y += 58;

  // Why Babies Love It Section
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text("Why Babies Love It", margin + 5, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(75, 85, 99);
  
  let benefitY = y + 13;
  const halfBenefits = Math.ceil(recipeData.benefits.length / 2);
  
  // Left column benefits
  recipeData.benefits.slice(0, halfBenefits).forEach((benefit) => {
    doc.setFillColor(34, 197, 94);
    doc.circle(margin + 6, benefitY, 1, "F");
    doc.text(benefit, margin + 10, benefitY + 1);
    benefitY += 5;
  });
  
  // Right column benefits
  benefitY = y + 13;
  recipeData.benefits.slice(halfBenefits).forEach((benefit) => {
    doc.setFillColor(34, 197, 94);
    doc.circle(margin + colWidth + 8, benefitY, 1, "F");
    doc.text(benefit, margin + colWidth + 12, benefitY + 1);
    benefitY += 5;
  });

  y += 33;

  // Health Benefits Section
  doc.setFillColor(255, 237, 213); // orange-100
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text("🧡 Health Benefits", margin + 5, y + 7);

  doc.setFontSize(8);
  const healthColWidth = contentWidth / 2 - 5;
  let healthY = y + 13;
  
  recipeData.healthBenefits.slice(0, 2).forEach((benefit) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(180, 83, 9);
    doc.text(benefit.title + ": ", margin + 5, healthY);
    const titleWidth = doc.getTextWidth(benefit.title + ": ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(75, 85, 99);
    doc.text(benefit.description, margin + 5 + titleWidth, healthY);
    healthY += 5;
  });
  
  healthY = y + 13;
  recipeData.healthBenefits.slice(2).forEach((benefit) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(180, 83, 9);
    doc.text(benefit.title + ": ", margin + healthColWidth + 10, healthY);
    const titleWidth = doc.getTextWidth(benefit.title + ": ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(75, 85, 99);
    doc.text(benefit.description, margin + healthColWidth + 10 + titleWidth, healthY);
    healthY += 5;
  });

  y += 27;

  // Storage Section (compact)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(55, 65, 81);
  doc.text("Storage: ", margin, y);
  const storageTitle = doc.getTextWidth("Storage: ");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text(recipeData.storage, margin + storageTitle, y);

  y += 10;

  // ========== PROMOTIONAL CTA SECTION ==========
  doc.setFillColor(255, 237, 213); // orange-100
  doc.roundedRect(margin, y, contentWidth, 42, 5, 5, "F");
  
  doc.setDrawColor(251, 146, 60); // orange-400
  doc.setLineWidth(0.8);
  doc.roundedRect(margin, y, contentWidth, 42, 5, 5, "S");

  // Decorative circle
  doc.setFillColor(251, 191, 36);
  doc.circle(margin + 10, y + 8, 5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("+", margin + 10, y + 10, { align: "center" });

  // Main CTA text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(180, 83, 9);
  doc.text("Loved this recipe?", pageWidth / 2, y + 10, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text("Get 300+ recipes in the best baby nutrition app!", pageWidth / 2, y + 18, { align: "center" });

  // CTA Button
  const buttonWidth = 70;
  const buttonHeight = 10;
  const buttonX = (pageWidth - buttonWidth) / 2;
  const buttonY = y + 26;

  // Button shadow
  doc.setFillColor(217, 119, 6);
  doc.roundedRect(buttonX + 1, buttonY + 1, buttonWidth, buttonHeight, 5, 5, "F");
  
  // Button background
  doc.setFillColor(245, 158, 11);
  doc.roundedRect(buttonX, buttonY, buttonWidth, buttonHeight, 5, 5, "F");

  // Button text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("LEARN MORE >>", pageWidth / 2, buttonY + 7, { align: "center" });

  // Clickable links
  doc.link(buttonX, buttonY, buttonWidth, buttonHeight, { url: "https://babybitespage.lovable.app/" });
  doc.link(margin, y, contentWidth, 42, { url: "https://babybitespage.lovable.app/" });

  // Footer
  doc.setFillColor(254, 243, 199);
  doc.rect(0, pageHeight - 12, pageWidth, 12, "F");
  
  doc.setFontSize(7);
  doc.setTextColor(180, 83, 9);
  doc.text("Made with love by BabyBites | babybitespage.lovable.app", pageWidth / 2, pageHeight - 5, { align: "center" });

  // Download
  doc.save("golden-sweet-potato-apple-puree.pdf");
};

export const useRecipePdf = () => {
  return { generateRecipePdf };
};