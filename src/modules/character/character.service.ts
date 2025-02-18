import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Character } from "src/database/entities/character.entity";
import { Episode } from "src/database/entities/episode.entity";
import { Location } from "src/database/entities/location.entity";

@Injectable()
export class CharacterService {
    private logger = new Logger(CharacterService.name)
    constructor(
        @InjectModel(Character)
        private readonly characterModel: typeof Character,
        @InjectModel(Location)
        private readonly locationModel: typeof Location,
        @InjectModel(Episode)
        private readonly episodeModel: typeof Episode,
    ) { }

    async findAll(): Promise<Character[]> {
        this.logger.log("Total found data: " + (await this.characterModel.findAll()).length);

        const characters = await this.characterModel.findAll();
        const temp = await this.characterModel.findAll({
            include: [
                {
                   model: Location
                },
                {
                    model: Episode
                }
            ]
        });
       /* characters.map(async character => {
            const charactersEpisode = await this.characteEpisodeModel.findOne({
                where: {
                    characterId: character.id,
                },
            });
            const charactersLocation = await this.characterLocationModel.findOne({
                where: {
                    characterId: character.id,
                },
            });
            if(charactersLocation){
                const location = await this.findLocation(charactersLocation?.locationId);
                character.location = location;
            }
            if(charactersEpisode){
                const episode = await this.findEpisode(charactersEpisode?.episodeId);
                character.episode = episode
            }
        })
        this.logger.log(characters)*/
        return temp;
    }

    async findEpisode(id: number): Promise<Episode | null> {
        return await this.episodeModel.findOne({
            where: {
                id,
            },
        });
    }

    async findLocation(id: number): Promise<Location | null> {
        return await this.locationModel.findOne({
            where: {
                id,
            },
        });
    }
 
    async findOne(id: string): Promise<Character | null> {
        return await this.characterModel.findOne({
            where: {
                id,
            },
        });
    }

}