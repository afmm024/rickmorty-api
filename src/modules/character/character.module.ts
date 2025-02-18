import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from 'src/database/entities/character.entity';
import { CharacterService } from './character.service';
import { CharacterResolver } from './character.resolver';
import { Location } from 'src/database/entities/location.entity';
import { Episode } from 'src/database/entities/episode.entity';

@Module({
    imports: [SequelizeModule.forFeature([Character, Location, Episode])],
    providers: [CharacterService, CharacterResolver],
  })
  export class CharacterModule {}