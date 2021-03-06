-- CreateTable
CREATE TABLE "meals" (
    "idMeal" TEXT NOT NULL PRIMARY KEY,
    "strMeal" TEXT NOT NULL,
    "strDrinkAlternate" TEXT NOT NULL,
    "strCategory" TEXT NOT NULL,
    "strArea" TEXT NOT NULL,
    "strInstructions" TEXT NOT NULL,
    "strMealThumb" TEXT NOT NULL,
    "strTags" TEXT NOT NULL,
    "strYoutube" TEXT NOT NULL,
    "strSource" TEXT NOT NULL,
    "strImageSource" TEXT NOT NULL,
    "strCreativeCommonsConfirmed" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModified" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ingredients-measures" (
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
    CONSTRAINT "ingredients-measures_strIdMeal_fkey" FOREIGN KEY ("strIdMeal") REFERENCES "meals" ("idMeal") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients-measures_strIdMeal_key" ON "ingredients-measures"("strIdMeal");
