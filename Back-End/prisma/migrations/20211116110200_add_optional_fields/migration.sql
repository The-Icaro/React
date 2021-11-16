-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_meals" (
    "idMeal" TEXT NOT NULL PRIMARY KEY,
    "strMeal" TEXT NOT NULL,
    "strDrinkAlternate" TEXT NOT NULL,
    "strCategory" TEXT NOT NULL,
    "strArea" TEXT NOT NULL,
    "strInstructions" TEXT NOT NULL,
    "strMealThumb" TEXT NOT NULL,
    "strTags" TEXT NOT NULL,
    "strYoutube" TEXT NOT NULL,
    "strSource" TEXT,
    "strImageSource" TEXT,
    "strCreativeCommonsConfirmed" TEXT,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModified" DATETIME NOT NULL
);
INSERT INTO "new_meals" ("dateCreated", "dateModified", "idMeal", "strArea", "strCategory", "strCreativeCommonsConfirmed", "strDrinkAlternate", "strImageSource", "strInstructions", "strMeal", "strMealThumb", "strSource", "strTags", "strYoutube") SELECT "dateCreated", "dateModified", "idMeal", "strArea", "strCategory", "strCreativeCommonsConfirmed", "strDrinkAlternate", "strImageSource", "strInstructions", "strMeal", "strMealThumb", "strSource", "strTags", "strYoutube" FROM "meals";
DROP TABLE "meals";
ALTER TABLE "new_meals" RENAME TO "meals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
