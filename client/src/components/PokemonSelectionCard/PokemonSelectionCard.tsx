import { Card, Box, Typography } from "@mui/material";
import { Pokemon } from "../../interfaces/Pokemon.interface";
import { usePokemon } from "../../context/PokemonContext";

interface PokemonSelectionCardProps {
  pokemon: Pokemon;
}

const PokemonSelectionCard = ({ pokemon }: PokemonSelectionCardProps) => {
  const { name, imageUrl } = pokemon;
  const { setUserSelectedPokemon } = usePokemon();

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 120,
        boxShadow: 3,
        paddingX: 2,
        paddingY: 1,
        transition: "all 100ms ease-in-out",
        borderRadius: 2,
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.03)",
        },
        "&:active": {
          transform: "scale(1.005)",
          filter: " brightness(0.95)"
        },
      }}
      onClick={() => setUserSelectedPokemon(pokemon)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <img src={imageUrl} alt={name} width="120" loading="lazy" />
        <Typography variant="caption">{name}</Typography>
      </Box>
    </Card>
  );
};

export default PokemonSelectionCard;
