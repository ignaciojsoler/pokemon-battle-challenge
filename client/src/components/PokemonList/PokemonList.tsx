import usePokemonServices from "../../hooks/usePokemonServices";
import PokemonSelectionCard from "../PokemonSelectionCard/PokemonSelectionCard";
import { Box } from "@mui/material";

const PokemonList = () => {
  const { pokemonList } = usePokemonServices();
  return (
    <Box
      sx={{ display: "flex", 
      flexDirection: "row", 
      gap: 2,
    }}
    >
      {pokemonList.map((pokemon) => (
        <PokemonSelectionCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Box>
  );
};

export default PokemonList;
