import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Battle {
@PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstPokemonId: string;

  @Column()
  secondPokemonId: string;

  @Column()
  winner: string;

  @Column()
  createdAt: Date;
}
