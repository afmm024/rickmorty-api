import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'


export class EpisodeDTO {

  @IsNumber()
  @IsOptional()
  public id?: number

  @IsString()
  @IsNotEmpty()
  public name: string


  @IsString()
  @IsNotEmpty()
  public episode: string


  @IsString()
  @IsNotEmpty()
  public air_date: string

  public characters?: number[]

}