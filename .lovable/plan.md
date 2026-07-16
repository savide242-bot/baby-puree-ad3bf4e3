
## Goal

Replace the current single-recipe PDF with a professional multi-page **lead-magnet ebook** in English, exportable as a beautiful PDF that mirrors the uploaded reference layout exactly. It must feel premium so readers trust the paid product.

## Ebook structure (all English)

1. **Cover page** — brand title, tagline ("Healthy, Easy Recipes for Babies 6+ Months"), subtle amber/orange visuals. No recipe count mentioned.
2. **Introduction page** — warm welcome from BabyBites, why 6+ months matters, how to use the ebook, safety reminders, tips for picky eaters.
3. **10 recipe pages** — one recipe per page, following the uploaded model exactly:
   - Top header bar with **food type** (e.g., Breakfast, Snack, Finger Food, Lunch, Dinner) + recipe title + category/age
   - Meta row: Prep time / Cook time / Cooling / Servings
   - Short intro sentence under meta
   - **Ingredients** (orange section header)
   - **Instructions** (blue section header, numbered)
   - **Nutritional Benefits** (green section header, checkmarks)
   - **Nutritional Information (per serving)** (purple section header, table: calories, protein, carbs, fats, key vitamins & minerals)
   - **Safety Notes**, **Storage Notes**, **Servings by Age**, **Variations** (colored callout boxes)
   - Tip line at bottom
   - Page number bottom-right
4. **Page 5 bonus CTA** — small footer band on recipe 5: "Get 100+ Healthy & Nutritious Recipes for My Baby →" linking to `https://page.babybites.space/`.
5. **Final page (Demo Ebook CTA)** — headline: "This is just a taste." Body copy explaining it's a demo, that the full recipe book has 100+ healthy, easy recipes for every occasion, packed persuasion (scarcity, social proof, mom-to-mom voice, benefit stacking, risk reversal), big CTA button → `https://page.babybites.space/`.

## The 10 recipes (all 6+ months, easy, ≤15 min, no purées)

Diverse food types shown in the top header of each page:

| # | Type | Recipe |
|---|------|--------|
| 1 | Breakfast | Banana Oat Pancakes |
| 2 | Finger Food | Sweet Potato & Cheese Bites |
| 3 | Snack | Avocado Toast Fingers |
| 4 | Breakfast | Baby Scrambled Eggs with Spinach |
| 5 | Finger Food | Broccoli & Cheese Mini Muffins |
| 6 | Lunch | Soft Chicken & Carrot Meatballs |
| 7 | Snack | Apple & Cinnamon Oat Bites |
| 8 | Lunch | Salmon & Sweet Potato Cakes |
| 9 | Dinner | Zucchini & Cheese Fritters |
| 10 | Snack | Yogurt & Berry Fruit Cups |

Each recipe gets: ingredients, instructions, nutritional benefits, nutritional info (calories/protein/carbs/fats/vitamins), safety notes, storage notes, servings by age (6–8 mo / 9–12 mo / 12+ mo), variations, tip.

## Technical details

- Rewrite `src/hooks/useRecipePdf.ts` (rename export flow, keep hook signature) to render all pages with `jsPDF`:
  - Portrait A4, consistent margins matching reference
  - Reusable helpers: `drawSectionHeader(color, label)`, `drawCallout(color, title, body)`, `drawMetaRow()`, `addPage()`
  - Palette: orange (ingredients), blue (instructions), green (benefits), purple (nutrition table), pink (safety), amber (storage), teal (servings by age), light-amber (variations) — matching the reference's colored section bars
  - Footer page numbers on every page except cover
  - CTA links use `doc.link(...)` on the CTA buttons/rows
- Update the trigger button label in `src/pages/Index.tsx` from "Download Recipe" (or equivalent) to something like **"Download Free Recipe Ebook"**; keep the existing button placement.
- File name: `babybites-recipe-ebook.pdf`.
- No new dependencies; continue using `jspdf`.

## Out of scope

- No changes to the discount popup, hero, or other landing sections beyond the button label.
- No image assets in the PDF (keep it clean, typographic, matching the reference which is text/color-block based).

## Files to change

- `src/hooks/useRecipePdf.ts` — full rewrite (10 recipes + cover + intro + final CTA page).
- `src/pages/Index.tsx` — update the download button label/copy only.
