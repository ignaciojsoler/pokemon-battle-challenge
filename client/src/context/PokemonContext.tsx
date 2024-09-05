// src/contexts/PokemonContext.js
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Pokemon } from "../interfaces/Pokemon.interface";
import usePokemonServices from "../hooks/usePokemonServices";
import { BattleResult } from "../interfaces/BattleResult.interface";

interface PokemonContextType {
  pokemons: Pokemon[];
  arePokemonsLoading: boolean;
  userSelectedPokemon: Pokemon | null;
  setUserSelectedPokemon: (pokemon: Pokemon) => void;
  randomPokemon: Pokemon | null;
  setRandomPokemon: (pokemon: Pokemon) => void;
  battleResult: BattleResult | null;
  setBattleResult: (battleResult: BattleResult) => void;
}

const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  arePokemonsLoading: false,
  userSelectedPokemon: null,
  setUserSelectedPokemon: () => {},
  randomPokemon: null,
  setRandomPokemon: () => {},
  battleResult: null,
  setBattleResult: () => {},
});

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pokemonList, isLoading } = usePokemonServices();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [arePokemonsLoading, setArePokemonsLoading] = useState<boolean>(true);
  const [userSelectedPokemon, setUserSelectedPokemon] = useState<Pokemon | null>(null);
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState< BattleResult | null>(null);

  useEffect(() => {
    setPokemons(pokemonList);
  }, [pokemonList]);

  useEffect(() => {
    setArePokemonsLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setBattleResult(null);
    setRandomPokemon(null);
  }, [userSelectedPokemon]);

  return (
    <PokemonContext.Provider value={{ 
      pokemons, 
      arePokemonsLoading, 
      userSelectedPokemon,
      setUserSelectedPokemon,
      randomPokemon,
      setRandomPokemon,
      battleResult,
      setBattleResult,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
