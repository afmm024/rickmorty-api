import { Column, Model, Table, PrimaryKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Character } from './character.entity';

@Table({
    createdAt: false,
    updatedAt: false,
  })
export class Episode extends Model {
   
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    air_date: string;

    @Column
    episode: string;

    @Column
    url: string;

    @Column
    created: string;

    
}