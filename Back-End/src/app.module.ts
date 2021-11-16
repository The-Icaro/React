import { Module } from '@nestjs/common';
import { MealModule } from './app/meal/meal.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    MealModule,
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: { log: ['info'] },
        explicitConnect: true,
      },
    })
  ],
})
export class AppModule {}
