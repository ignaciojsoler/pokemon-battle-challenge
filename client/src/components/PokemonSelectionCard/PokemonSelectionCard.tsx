import { Card, Box, Typography } from "@mui/material";
import { Pokemon } from "../../interfaces/Pokemon.interface";

interface PokemonSelectionCardProps {
  pokemon: Pokemon;
}

const PokemonSelectionCard = ({ pokemon }: PokemonSelectionCardProps) => {
  const { name, imageUrl } = pokemon;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 100,
        boxShadow: 3,
        padding: 2,
        transition: "all 150ms ease-in-out",
        borderRadius: 3,
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={imageUrl} alt="Charizard" width="80" loading="lazy" />
        <Typography>{name}</Typography>
      </Box>
    </Card>
  );
};

export default PokemonSelectionCard;
