import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Battle {
@PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  winner: string;

  @Column()
  loser: string;

  @Column()
  createdAt: Date;
}
