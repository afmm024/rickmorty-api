import { Column, Model, Table, PrimaryKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Character } from './character.entity';

@Table({
    createdAt: false,
    updatedAt: false,
  })
export class Location extends Model {
   
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    type: string;

    @Column
    dimension: string;

    @Column
    url: string;

    @Column
    created: string;

    
}