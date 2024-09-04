// src/contexts/AppProvider.js

import { ReactNode } from "react";
import { PokemonProvider } from "./pokemonContext";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export default AppProvider;
