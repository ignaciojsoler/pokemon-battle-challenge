import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';

@Module({
  controllers: [BattleController],
  providers: [BattleService],
  imports: [PokemonModule, TypeOrmModule.forFeature([Battle])]
})
export class BattleModule {}
