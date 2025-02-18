
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export class LocationDTO {

  @IsNumber()
  @IsOptional()
  public id?: number

  @IsNotEmpty()
  public name: string

  @IsNotEmpty()
  public type: string

  @IsNotEmpty()
  public dimension: string
}