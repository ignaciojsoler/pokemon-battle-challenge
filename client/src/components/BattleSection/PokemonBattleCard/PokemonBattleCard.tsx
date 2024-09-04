import { Box, Card, Typography } from "@mui/material";
import { Pokemon } from "../../../interfaces/Pokemon.interface";
import { ASSETS_ULR } from "../../../utils/constants";

interface PokemonBattleCardProps {
  pokemon: Pokemon | null;
}

const { EMPTY_POKEMON_SILHOUETTE } = ASSETS_ULR;

const emptyValues = {
  EMPTY_IMAGE: EMPTY_POKEMON_SILHOUETTE,
  EMPTY_NAME: "Choose a Pokemon",
};

const PokemonBattleCard = ({ pokemon }: PokemonBattleCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        boxShadow: 3,
        padding: 2,
        transition: "all 100ms ease-in-out",
        borderRadius: 2,
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
        <img
          src={pokemon?.imageUrl ?? emptyValues.EMPTY_IMAGE}
          alt={pokemon?.name ?? emptyValues.EMPTY_NAME}
          width="240"
          loading="lazy"
          style={{ maxHeight: 240 }}
        />
        <Typography>{pokemon?.name ?? emptyValues.EMPTY_NAME}</Typography>
      </Box>
    </Card>
  );
};

export default PokemonBattleCard;
