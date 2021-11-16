import { Injectable } from '@nestjs/common';
import { CreateMealDTO } from '../dto/create-meal.dto';
import { GetMealsDTO } from '../dto/get-meals.dto';
import { Meal } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MealService {
  constructor(private readonly prismaService: PrismaService){}

  public async getMeals(getMealsDTO: GetMealsDTO) : Promise<Array<Meal>> {

    const { search } = getMealsDTO

    let searchedMeal

    if(search)
      searchedMeal = await this.prismaService.meal.findMany({
        where : { 
          OR: [
            {
              strMeal : { contains : search }
          },
          {
            strInstructions : { contains : search }
          },
          {
            strArea : { contains : search }
          },
          {
            strCategory : { contains : search }
          }
        ]}, 
        include : {
          objIngredientsAndMeasure : true
        }
      })
    
    else {
      searchedMeal = this.prismaService.meal.findMany({
        include : { objIngredientsAndMeasure : true }
      })
    }  

    return searchedMeal
  }

  public async getMealById(id: string) : Promise<Meal | null> {

    const meal = await this.prismaService.meal.findUnique({
      where : {
        idMeal : id
      }, 
      include : { objIngredientsAndMeasure : true }
    })

    if(!meal)
      throw new NotFoundException(`Meal with id: ${id}, Not Found`)

    return meal

  }

  public async createMeal(createMealDTO: CreateMealDTO) : Promise<Meal>{

    const { 
      strMeal,
      strDrinkAlternate,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strSource,
      strImageSource,
      strCreativeCommonsConfirmed,
      objIngredientsAndMeasure
     } = createMealDTO

     const { 
       strIngredient1,
       strIngredient2,
       strIngredient3,
       strIngredient4,
       strIngredient5,
       strIngredient6,
       strIngredient7,
       strIngredient8,
       strIngredient9,
       strIngredient10,
       strIngredient11,
       strIngredient12,
       strIngredient13,
       strIngredient14,
       strIngredient15,
       strIngredient16,
       strIngredient17,
       strIngredient18,
       strIngredient19,
       strIngredient20,
       strMeasure1,
       strMeasure2,
       strMeasure3,
       strMeasure4,
       strMeasure5,
       strMeasure6,
       strMeasure7,
       strMeasure8,
       strMeasure9,
       strMeasure10,
       strMeasure11,
       strMeasure12,
       strMeasure13,
       strMeasure14,
       strMeasure15,
       strMeasure16,
       strMeasure17,
       strMeasure18,
       strMeasure19,
       strMeasure20,
       } = objIngredientsAndMeasure
      
      // Meal
      const meal = await this.prismaService.meal.create({
        data: {
         strMeal,
         strDrinkAlternate,
         strCategory,
         strArea,
         strInstructions,
         strMealThumb,
         strTags,
         strYoutube,
         strSource,
         strImageSource,
         strCreativeCommonsConfirmed,
        }})
      
     // IngrediantsAndMeasure
     const ingAndMea = await this.prismaService.ingredientsAndMeasure.create({
       data : {
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
        strIdMeal : meal.idMeal
       }
      })

      // SearchWithAll
      const FinalMeal = await this.getMealById(meal.idMeal)

      return FinalMeal
    
  }

  public async deleteMeal(id: string) : Promise<void> {

    await this.prismaService.meal.delete({where : { idMeal : id }})
  }
}
