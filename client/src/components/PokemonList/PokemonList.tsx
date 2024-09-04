import usePokemonServices from "../../hooks/usePokemonServices";
import PokemonSelectionCard from "../PokemonSelectionCard/PokemonSelectionCard";
import { Box, Typography } from "@mui/material";

const PokemonList = () => {
  const { pokemonList } = usePokemonServices();
  return (
    <Box>
      <Typography variant="h5" sx={{marginBottom: 2}}>Select your pokemon</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {pokemonList.map((pokemon) => (
          <PokemonSelectionCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Box>
    </Box>
  );
};

export default PokemonList;
