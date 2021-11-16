-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ingredients-measures" (
    "idIngAndMea" TEXT NOT NULL PRIMARY KEY,
    "strIngredients1" TEXT,
    "strIngredients2" TEXT,
    "strIngredients3" TEXT,
    "strIngredients4" TEXT,
    "strIngredients5" TEXT,
    "strIngredients6" TEXT,
    "strIngredients7" TEXT,
    "strIngredients8" TEXT,
    "strIngredients9" TEXT,
    "strIngredients10" TEXT,
    "strIngredients11" TEXT,
    "strIngredients12" TEXT,
    "strIngredients13" TEXT,
    "strIngredients14" TEXT,
    "strIngredients15" TEXT,
    "strIngredients16" TEXT,
    "strIngredients17" TEXT,
    "strIngredients18" TEXT,
    "strIngredients19" TEXT,
    "strIngredients20" TEXT,
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
INSERT INTO "new_ingredients-measures" ("idIngAndMea", "strIdMeal", "strIngredients1", "strIngredients10", "strIngredients11", "strIngredients12", "strIngredients13", "strIngredients14", "strIngredients15", "strIngredients16", "strIngredients17", "strIngredients18", "strIngredients19", "strIngredients2", "strIngredients20", "strIngredients3", "strIngredients4", "strIngredients5", "strIngredients6", "strIngredients7", "strIngredients8", "strIngredients9", "strMeasure1", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15", "strMeasure16", "strMeasure17", "strMeasure18", "strMeasure19", "strMeasure2", "strMeasure20", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9") SELECT "idIngAndMea", "strIdMeal", "strIngredients1", "strIngredients10", "strIngredients11", "strIngredients12", "strIngredients13", "strIngredients14", "strIngredients15", "strIngredients16", "strIngredients17", "strIngredients18", "strIngredients19", "strIngredients2", "strIngredients20", "strIngredients3", "strIngredients4", "strIngredients5", "strIngredients6", "strIngredients7", "strIngredients8", "strIngredients9", "strMeasure1", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15", "strMeasure16", "strMeasure17", "strMeasure18", "strMeasure19", "strMeasure2", "strMeasure20", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9" FROM "ingredients-measures";
DROP TABLE "ingredients-measures";
ALTER TABLE "new_ingredients-measures" RENAME TO "ingredients-measures";
CREATE UNIQUE INDEX "ingredients-measures_strIdMeal_key" ON "ingredients-measures"("strIdMeal");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
