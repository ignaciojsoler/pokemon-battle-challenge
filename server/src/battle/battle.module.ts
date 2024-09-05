import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [BattleController],
  providers: [BattleService],
  imports: [PokemonModule]
})
export class BattleModule {}
