import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMealDTO } from '../dto/create-meal.dto';
import { GetMealsDTO } from '../dto/get-meals.dto';
import { MealService } from '../service/meal.service';
import { Meal } from '@prisma/client';

@Controller('meals')
export class MealController {
  constructor (
    private readonly mealService : MealService,
    ) {}

  @Get()
  getMeals(@Query() getMealsDTO: GetMealsDTO) : Promise<Array<Meal>> {
    return this.mealService.getMeals(getMealsDTO)
  }

  @Get('/:id')
  getMealById(@Param('id') id: string) : Promise<Meal | null> {
    return this.mealService.getMealById(id)
  }

  @Post()
  createMeal(@Body() createMealDTO: CreateMealDTO) : Promise<Meal> {
    return this.mealService.createMeal(createMealDTO)
  }

  @Delete('/:id')
  deleteMeal(@Param('id') id: string) : Promise<void> {
    return this.mealService.deleteMeal(id)
  }

}
