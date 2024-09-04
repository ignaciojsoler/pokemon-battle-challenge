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
}

const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  arePokemonsLoading: false,
});

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [arePokemonsLoading, setArePokemonsLoading] = useState<boolean>(true);
  const { pokemonList, isLoading } = usePokemonServices();

  useEffect(() => {
    setPokemons(pokemonList);
  }, [pokemonList]);

  useEffect(() => {
    setArePokemonsLoading(isLoading);
  }, [isLoading]);

  return (
    <PokemonContext.Provider value={{ pokemons, arePokemonsLoading }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
