import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Repository } from 'typeorm';
import { pokemons } from './pokemon/pokemon.seed';

@Injectable()
export class SeedService {
  private pokemonList: Pokemon[] = pokemons;

  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
  ) {}

  async populatePokemons() {
    await this.pokemonRepository.clear();
    return this.pokemonRepository.save(this.pokemonList);
  }
}
