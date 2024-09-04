import { Card, Box, Typography } from "@mui/material";
import { Pokemon } from "../../interfaces/Pokemon.interface";

interface PokemonSelectionCardProps {
  pokemon: Pokemon;
}

const PokemonSelectionCard = ({ pokemon }: PokemonSelectionCardProps) => {
  const { name, imageUrl } = pokemon;

  return (
    <Card sx={{ width: "100%", maxWidth: 250, paddingY: 4, boxShadow: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={imageUrl} alt="Charizard" width="150" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography>{name}</Typography>
      </Box>
    </Card>
  );
};

export default PokemonSelectionCard;
