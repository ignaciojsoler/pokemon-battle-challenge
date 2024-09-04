import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>
  ) {}

  findAll() {
    return this.pokemonRepository.find();
  }
}
