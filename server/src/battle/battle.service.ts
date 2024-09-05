import { Injectable, NotFoundException } from '@nestjs/common';
import { StartBattleDto } from './dto/start-battle.dto';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { applyDamage, determineFasterPokemon, logTurn } from 'src/helpers/battle.helpers';

@Injectable()
export class BattleService {

  private calculateBattle(
    firstPokemon: Pokemon,
    secondPokemon: Pokemon,
  ): Pokemon {
    let [fasterPokemon, slowerPokemon] = determineFasterPokemon(firstPokemon,secondPokemon);
    let turnNumber = 1;

    while (fasterPokemon.hp > 0 && slowerPokemon.hp > 0) {
      applyDamage(fasterPokemon, slowerPokemon);
      logTurn({
        attacker: fasterPokemon, 
        defender: slowerPokemon, 
        turnNumber
      });
      if (slowerPokemon.hp > 0) {
        applyDamage(slowerPokemon, fasterPokemon);
        logTurn({
          attacker: slowerPokemon, 
          defender: fasterPokemon, 
          turnNumber: turnNumber + 1
        });
      }
    }

    return fasterPokemon.hp > 0 ? fasterPokemon : slowerPokemon;
  }

  constructor(private readonly pokemonService: PokemonService) {}
  async startBattle(startBattleDto: StartBattleDto) {
    const { firstPokemonId, secondPokemonId } = startBattleDto;

    const firstPokemon = await this.pokemonService.findOne(firstPokemonId);
    const secondPokemon = await this.pokemonService.findOne(secondPokemonId);

    if (!firstPokemon || !secondPokemon) throw new NotFoundException('Pokemon not found in the database');

    console.log(firstPokemon, secondPokemon);

    const { id, name, imageUrl } = this.calculateBattle(firstPokemon, secondPokemon);

    return {
      winner: {
        id,
        name,
        imageUrl,
      },
    };
  }
}
