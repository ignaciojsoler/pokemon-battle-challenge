import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon.interface";
import { fetchAllPokemons, startBattle } from "../services/pokemonServices";

const usePokemonServices = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const pokemonsData = await fetchAllPokemons();
      if (pokemonsData) setPokemonList(pokemonsData);
    } catch (error) {
      console.error("Error fetching Pokemons:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const startPokemonsBattle = async ({
    firstPokemonId,
    secondPokemonId,
  }: {
    firstPokemonId: string;
    secondPokemonId: string;
  }) => {
    setIsLoading(true);
    try {
      const battleData = await startBattle(firstPokemonId, secondPokemonId);
      return battleData;
    } catch (error) {
      console.error("Error starting battle:", error);
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
    startPokemonsBattle,
  };
};

export default usePokemonServices;
