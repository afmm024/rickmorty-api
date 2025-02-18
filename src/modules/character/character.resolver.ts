import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CharacterService } from './character.service';
import { Character } from 'src/database/entities/character.entity';

@Resolver('Character')
export class CharacterResolver {

  constructor(private readonly characterService: CharacterService) {}

  @Query(() => [Character], { name: 'characters' })
  async getAllCharacters() {
    return await this.characterService.findAll();
  }

  
}