import { IsOptional, IsString } from "class-validator"

export class UpdateChildrenDTO {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  birhdate: string

  @IsString()
  @IsOptional()
  father: string

  @IsString()
  @IsOptional()
  mother: string

  @IsString()
  @IsOptional()
  responsible: string
}
