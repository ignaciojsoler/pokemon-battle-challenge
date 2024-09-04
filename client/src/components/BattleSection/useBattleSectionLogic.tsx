import { useEffect } from 'react';
import { usePokemon } from '../../context/PokemonContext';
import { getRandomPokemon } from '../../utils/helpers/pokemons';

const useBattleSectionLogic = () => {
  const { pokemons, userSelectedPokemon, randomPokemon, setRandomPokemon } = usePokemon();

  const generateRandomPokemon = () => {
    if (!userSelectedPokemon) return;

    const randomizedPokemon = getRandomPokemon({
      pokemonId: userSelectedPokemon.id,
      pokemonList: pokemons,
    });

    if (randomizedPokemon) setRandomPokemon(randomizedPokemon);
  };

  useEffect(() => {
    generateRandomPokemon();
  }, [userSelectedPokemon]);

  return {
    userSelectedPokemon,
    randomPokemon,
  };
};

export default useBattleSectionLogic;
