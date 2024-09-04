import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon.interface";
import { fetchAllPokemons } from "../services/pokemonServices";

const usePokemonServices = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const pokemonsData = await fetchAllPokemons();
      setPokemonList(pokemonsData);
    } catch (error) {
      console.error("Error fetching Pokemons:", error);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemonList,
    isLoading,
  };
};

export default usePokemonServices;
