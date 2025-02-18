import { Column, Model, Table, BelongsTo, PrimaryKey, HasMany, ForeignKey } from 'sequelize-typescript';
import { Location } from './location.entity';
import { Episode } from './episode.entity';

@Table({
    createdAt: false,
    updatedAt: false,
  })
export class Character extends Model {
   
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    status: string;

    @Column
    species: string;

    @Column
    type: string;

    @Column
    gender: string;
    
    @HasMany(() => Location, 'id')
    location: Location | null;

    @Column
    image: string;

    @HasMany(() => Episode, 'id')
    episode: Episode | null;

    @Column
    url: string;

    @Column
    created: string;

}