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

interface PokemonContextType {
  pokemons: Pokemon[];
  arePokemonsLoading: boolean;
  userSelectedPokemon: Pokemon | null;
  setUserSelectedPokemon: (pokemon: Pokemon) => void;
}

const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  arePokemonsLoading: false,
  userSelectedPokemon: null,
  setUserSelectedPokemon: () => {},
});

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pokemonList, isLoading } = usePokemonServices();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [arePokemonsLoading, setArePokemonsLoading] = useState<boolean>(true);
  const [userSelectedPokemon, setUserSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    setPokemons(pokemonList);
  }, [pokemonList]);

  useEffect(() => {
    setArePokemonsLoading(isLoading);
  }, [isLoading]);

  return (
    <PokemonContext.Provider value={{ 
      pokemons, 
      arePokemonsLoading, 
      userSelectedPokemon,
      setUserSelectedPokemon 
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
