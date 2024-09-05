import { usePokemon } from "../../context/PokemonContext";
import PokemonSelectionCard from "./PokemonSelectionCard/PokemonSelectionCard";
import { Box, Typography } from "@mui/material";

const PokemonList = () => {
  const { pokemons, arePokemonsLoading } = usePokemon();

  if (arePokemonsLoading) {
    return <Typography sx={{minHeight: 180}}>Loading...</Typography>;
  };

  if (!pokemons.length) {
    return <Typography sx={{minHeight: 180}}>No Pokemons found.</Typography>;
  };

  return (
    <Box>
      <Typography variant="h5" sx={{marginBottom: 2}}>Select your pokemon</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {pokemons?.map((pokemon) => (
          <PokemonSelectionCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Box>
    </Box>
  );
};

export default PokemonList;
