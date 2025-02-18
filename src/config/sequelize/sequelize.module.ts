import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from 'src/database/entities/character.entity';
import { Episode } from 'src/database/entities/episode.entity';
import { Location } from 'src/database/entities/location.entity';


@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useFactory: () =>
            ({
                dialect: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: 'fhmhKIJzrfkhhlp2',
                models: [Character, Location, Episode],
                autoLoadModels: true,
                synchronize: true,
                define: {
                    timestamps: false,
                  },
            }),
        }),
    ]
})
export class SequelizeMModule { }