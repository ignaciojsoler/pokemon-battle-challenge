import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon.interface";
import { fetchAllPokemons } from "../services/pokemonServices";

const usePokemonServices = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    try {
      const pokemonsData = await fetchAllPokemons();
      setPokemonList(pokemonsData);
    } catch (error) {
      console.error("Error fetching Pokemons:", error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemonList,
  };
};

export default usePokemonServices;
