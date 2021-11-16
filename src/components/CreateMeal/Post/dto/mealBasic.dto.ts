import { IngredientsAndMeasureDTO } from "./ingredientsMeasures.dto"

export class MealDTO {

  strMeal!: string
  strDrinkAlternate?: string | null
  strCategory!: string
  strArea!: string
  strTags?: string | null
  strInstructions!: string
  strMealThumb!: string
  strYoutube?: string
  objIngredientsAndMeasure!: IngredientsAndMeasureDTO
  strSource!: string
  strImageSorce!: string
  strCreativeCommonsConfirmed!: string
}