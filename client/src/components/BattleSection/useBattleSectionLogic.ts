import { useEffect } from "react";
import { usePokemon } from "../../context/PokemonContext";
import usePokemonServices from "../../hooks/usePokemonServices";
import { getRandomPokemon } from "../../utils/helpers/pokemons";

const useBattleSectionLogic = () => {
  const {
    pokemons,
    userSelectedPokemon,
    randomPokemon,
    setRandomPokemon,
    setBattleResult,
  } = usePokemon();
  const { startPokemonsBattle } = usePokemonServices();

  const generateRandomPokemon = () => {
    if (!userSelectedPokemon) return;

    const randomizedPokemon = getRandomPokemon({
      pokemonId: userSelectedPokemon.id,
      currentRandomPokemonId: randomPokemon?.id,
      pokemonList: pokemons,
    });

    if (randomizedPokemon) setRandomPokemon(randomizedPokemon);
  };

  const initializeBattle = async () => {
    if (!userSelectedPokemon || !randomPokemon) return;

    const battleResult = await startPokemonsBattle({
      firstPokemonId: userSelectedPokemon.id,
      secondPokemonId: randomPokemon.id,
    });

    setBattleResult(battleResult);
  };

  useEffect(() => {
    initializeBattle();
  }, [randomPokemon]);

  return {
    userSelectedPokemon,
    randomPokemon,
    generateRandomPokemon,
  };
};

export default useBattleSectionLogic;
