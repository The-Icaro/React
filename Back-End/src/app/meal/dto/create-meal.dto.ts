import { Prisma } from '@prisma/client';

export class CreateMealDTO {
  strMeal                      : string
  strDrinkAlternate            : string 
  strCategory                  : string
  strArea                      : string 
  strInstructions              : string 
  strMealThumb                 : string
  strTags                      : string
  strYoutube                   : string  
  strSource                    : string
  strImageSource               : string
  strCreativeCommonsConfirmed  : string
  objIngredientsAndMeasure     : Prisma.IngredientsAndMeasureCreateWithoutMealInput
}