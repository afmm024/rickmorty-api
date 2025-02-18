import { IsArray, IsDate, IsEnum, IsIn, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator'
import { CHARACTER_GENDER, CHARACTER_STATUS } from 'src/common/constants/enums'
import { LocationDTO } from './location.dto'
import { Episode } from '../entities/episode.entity'


export class CharacterDTO {
  @IsNumber()
  @IsOptional()
  public id?: number


  @IsNotEmpty()
  public name: string

 
  @IsOptional()
  public type: string

  @IsEnum(CHARACTER_STATUS)
  public status: string


  @IsEnum(CHARACTER_GENDER)
  public gender: string

  
  @IsString()
  public species: string


  @IsString()
  @IsOptional()
  public image?: string

  @IsString()
  public url: string

  @IsString()
  public created: string

  @IsObject()
  @IsOptional()
  public location?: LocationDTO

  @IsOptional()
  public origin?: LocationDTO

  @IsArray()
  @IsOptional()
  public episodes?: Episode[]

  
}