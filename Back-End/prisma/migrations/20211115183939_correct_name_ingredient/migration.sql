/*
  Warnings:

  - You are about to drop the column `strIngredients1` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients10` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients11` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients12` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients13` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients14` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients15` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients16` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients17` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients18` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients19` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients2` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients20` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients3` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients4` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients5` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients6` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients7` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients8` on the `ingredients-measures` table. All the data in the column will be lost.
  - You are about to drop the column `strIngredients9` on the `ingredients-measures` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ingredients-measures" (
    "idIngAndMea" TEXT NOT NULL PRIMARY KEY,
    "strIngredient1" TEXT,
    "strIngredient2" TEXT,
    "strIngredient3" TEXT,
    "strIngredient4" TEXT,
    "strIngredient5" TEXT,
    "strIngredient6" TEXT,
    "strIngredient7" TEXT,
    "strIngredient8" TEXT,
    "strIngredient9" TEXT,
    "strIngredient10" TEXT,
    "strIngredient11" TEXT,
    "strIngredient12" TEXT,
    "strIngredient13" TEXT,
    "strIngredient14" TEXT,
    "strIngredient15" TEXT,
    "strIngredient16" TEXT,
    "strIngredient17" TEXT,
    "strIngredient18" TEXT,
    "strIngredient19" TEXT,
    "strIngredient20" TEXT,
    "strMeasure1" TEXT,
    "strMeasure2" TEXT,
    "strMeasure3" TEXT,
    "strMeasure4" TEXT,
    "strMeasure5" TEXT,
    "strMeasure6" TEXT,
    "strMeasure7" TEXT,
    "strMeasure8" TEXT,
    "strMeasure9" TEXT,
    "strMeasure10" TEXT,
    "strMeasure11" TEXT,
    "strMeasure12" TEXT,
    "strMeasure13" TEXT,
    "strMeasure14" TEXT,
    "strMeasure15" TEXT,
    "strMeasure16" TEXT,
    "strMeasure17" TEXT,
    "strMeasure18" TEXT,
    "strMeasure19" TEXT,
    "strMeasure20" TEXT,
    "strIdMeal" TEXT NOT NULL,
    CONSTRAINT "ingredients-measures_strIdMeal_fkey" FOREIGN KEY ("strIdMeal") REFERENCES "meals" ("idMeal") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ingredients-measures" ("idIngAndMea", "strIdMeal", "strMeasure1", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15", "strMeasure16", "strMeasure17", "strMeasure18", "strMeasure19", "strMeasure2", "strMeasure20", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9") SELECT "idIngAndMea", "strIdMeal", "strMeasure1", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15", "strMeasure16", "strMeasure17", "strMeasure18", "strMeasure19", "strMeasure2", "strMeasure20", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9" FROM "ingredients-measures";
DROP TABLE "ingredients-measures";
ALTER TABLE "new_ingredients-measures" RENAME TO "ingredients-measures";
CREATE UNIQUE INDEX "ingredients-measures_strIdMeal_key" ON "ingredients-measures"("strIdMeal");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
