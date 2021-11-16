import { IsOptional, IsString } from "class-validator";

export class GetMealsDTO {

  @IsOptional()
  @IsString()
  search? : string

}