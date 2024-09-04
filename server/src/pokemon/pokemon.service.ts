import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { pokemonList } from 'src/seeds/pokemon.seed';

@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>
  ) {}

  findAll() {
    return this.pokemonRepository.find();
  }

  async seedPokemons() {
    await this.pokemonRepository.clear();
    return this.pokemonRepository.save(pokemonList);
  }
}
