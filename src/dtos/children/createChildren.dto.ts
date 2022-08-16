import { IsNotEmpty, IsString } from "class-validator"

export class CreateChildrenDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  birhdate: string

  @IsString()
  @IsNotEmpty()
  father: string

  @IsString()
  @IsNotEmpty()
  mother: string

  @IsString()
  @IsNotEmpty()
  responsible: string
}
