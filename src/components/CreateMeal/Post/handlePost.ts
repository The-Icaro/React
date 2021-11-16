import { IngredientsAndMeasureDTO } from "./dto/ingredientsMeasures.dto"
import { MealDTO } from "./dto/mealBasic.dto"

export const handlePost = (mealBasic: any, mealIng: any, mealMea: any ) : MealDTO => {

  const {
    name,
    drink,
    category,
    area,
    instructions,
    thumb,
    tags,
    youtube
  } = mealBasic

  const ing1 = mealIng[1]
  const ing2 = mealIng[2] ? mealIng[2] : ""
  const ing3 = mealIng[3] ? mealIng[3] : ""
  const ing4 = mealIng[4] ? mealIng[4] : ""
  const ing5 = mealIng[5] ? mealIng[5] : ""
  const ing6 = mealIng[6] ? mealIng[6] : ""
  const ing7 = mealIng[7] ? mealIng[7] : ""
  const ing8 = mealIng[8] ? mealIng[8] : ""
  const ing9 = mealIng[9] ? mealIng[9] : ""
  const ing10 = mealIng[10] ? mealIng[10] : ""
  const ing11 = mealIng[11] ? mealIng[11] : ""
  const ing12 = mealIng[12] ? mealIng[12] : ""
  const ing13 = mealIng[13] ? mealIng[13] : ""
  const ing14 = mealIng[14] ? mealIng[14] : ""
  const ing15 = mealIng[15] ? mealIng[15] : ""
  const ing16 = mealIng[16] ? mealIng[16] : ""
  const ing17 = mealIng[17] ? mealIng[17] : ""
  const ing18 = mealIng[18] ? mealIng[18] : ""
  const ing19 = mealIng[19] ? mealIng[19] : ""
  const ing20 = mealIng[20] ? mealIng[20] : ""

  const mea1 = mealMea[1]
  const mea2 = mealMea[2] ? mealMea[2] : ""
  const mea3 = mealMea[3] ? mealMea[3] : ""
  const mea4 = mealMea[4] ? mealMea[4] : ""
  const mea5 = mealMea[5] ? mealMea[5] : ""
  const mea6 = mealMea[6] ? mealMea[6] : ""
  const mea7 = mealMea[7] ? mealMea[7] : ""
  const mea8 = mealMea[8] ? mealMea[8] : ""
  const mea9 = mealMea[9] ? mealMea[9] : ""
  const mea10 = mealMea[10] ? mealMea[10] : ""
  const mea11 = mealMea[11] ? mealMea[11] : ""
  const mea12 = mealMea[12] ? mealMea[12] : ""
  const mea13 = mealMea[13] ? mealMea[13] : ""
  const mea14 = mealMea[14] ? mealMea[14] : ""
  const mea15 = mealMea[15] ? mealMea[15] : ""
  const mea16 = mealMea[16] ? mealMea[16] : ""
  const mea17 = mealMea[17] ? mealMea[17] : ""
  const mea18 = mealMea[18] ? mealMea[18] : ""
  const mea19 = mealMea[19] ? mealMea[19] : ""
  const mea20 = mealMea[20] ? mealMea[20] : ""

  console.log(mea2)

  const ingAndMea : IngredientsAndMeasureDTO = new IngredientsAndMeasureDTO
  ingAndMea.strIngredient1 = ing1.trim()
  ingAndMea.strIngredient2 = ing2.trim()
  ingAndMea.strIngredient3 = ing3.trim()
  ingAndMea.strIngredient4 = ing4.trim()
  ingAndMea.strIngredient5 = ing5.trim()
  ingAndMea.strIngredient6 = ing6.trim()
  ingAndMea.strIngredient7 = ing7.trim()
  ingAndMea.strIngredient8 = ing8.trim()
  ingAndMea.strIngredient9 = ing9.trim()
  ingAndMea.strIngredient10 = ing10.trim()
  ingAndMea.strIngredient11 = ing11.trim()
  ingAndMea.strIngredient12 = ing12.trim()
  ingAndMea.strIngredient13 = ing13.trim()
  ingAndMea.strIngredient14 = ing14.trim()
  ingAndMea.strIngredient15 = ing15.trim()
  ingAndMea.strIngredient16 = ing16.trim()
  ingAndMea.strIngredient17 = ing17.trim()
  ingAndMea.strIngredient18 = ing18.trim()
  ingAndMea.strIngredient19 = ing19.trim()
  ingAndMea.strIngredient20 = ing20.trim()

  ingAndMea.strMeasure1 = mea1.trim()
  ingAndMea.strMeasure2 = mea2.trim()
  ingAndMea.strMeasure3 = mea3.trim()
  ingAndMea.strMeasure4 = mea4.trim()
  ingAndMea.strMeasure5 = mea5.trim()
  ingAndMea.strMeasure6 = mea6.trim()
  ingAndMea.strMeasure7 = mea7.trim()
  ingAndMea.strMeasure8 = mea8.trim()
  ingAndMea.strMeasure9 = mea9.trim()
  ingAndMea.strMeasure10 = mea10.trim()
  ingAndMea.strMeasure11 = mea11.trim()
  ingAndMea.strMeasure12 = mea12.trim()
  ingAndMea.strMeasure13 = mea13.trim()
  ingAndMea.strMeasure14 = mea14.trim()
  ingAndMea.strMeasure15 = mea15.trim()
  ingAndMea.strMeasure16 = mea16.trim()
  ingAndMea.strMeasure17 = mea17.trim()
  ingAndMea.strMeasure18 = mea18.trim()
  ingAndMea.strMeasure19 = mea19.trim()
  ingAndMea.strMeasure20 = mea20.trim()

  const meal : MealDTO = new MealDTO()
  meal.strMeal = name.trim()
  meal.strDrinkAlternate = drink.trim()
  meal.strCategory = category.trim()
  meal.strArea = area.trim()
  meal.strInstructions = instructions.trim()
  meal.strMealThumb = thumb.trim()
  meal.strTags = tags.trim()
  meal.strYoutube = youtube.trim()
  meal.objIngredientsAndMeasure = ingAndMea
  meal.strSource = ""
  meal.strImageSorce = ""
  meal.strCreativeCommonsConfirmed = ""

  return meal

}