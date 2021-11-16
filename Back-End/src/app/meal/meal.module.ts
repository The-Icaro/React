import { Module } from '@nestjs/common';
import { MealController } from './controller/meal.controller';
import { MealService } from './service/meal.service';
import { PrismaService } from './service/prisma/prisma.service';

@Module({
  controllers: [MealController],
  providers: [MealService, PrismaService]
})
export class MealModule {}
