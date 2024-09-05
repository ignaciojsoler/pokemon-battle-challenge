import { Box, Card, Divider, Typography } from "@mui/material";
import { Pokemon } from "../../../interfaces/Pokemon.interface";
import PropertyBar from "./PropertyBar/PropertyBar";

interface PokemonBattleCardProps {
  pokemon: Pokemon | null;
  defaultTitle: string;
  defaultImage: string;
}

const PokemonBattleCard = ({ 
  pokemon, 
  defaultTitle, 
  defaultImage
}: PokemonBattleCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 260,
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
          src={pokemon?.imageUrl ?? defaultImage}
          alt={pokemon?.name ?? defaultTitle}
          loading="lazy"
          style={{ maxHeight: 180, filter: !pokemon ? "invert(0.3)" : ""}}
        />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5">
            {pokemon?.name ?? defaultTitle}
          </Typography>
          <Divider sx={{marginY: 1}}/>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, }}>
            <PropertyBar title="HP" value={pokemon?.hp ?? 0} />
            <PropertyBar title="Attack" value={pokemon?.attack ?? 0} />
            <PropertyBar title="Defense" value={pokemon?.defense ?? 0} />
            <PropertyBar title="Speed" value={pokemon?.speed ?? 0} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default PokemonBattleCard;
