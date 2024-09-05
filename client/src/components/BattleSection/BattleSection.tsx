import { Box } from "@mui/material";
import PokemonBattleCard from "./PokemonBattleCard/PokemonBattleCard";
import StartBattleButton from "./StartBattleButton/StartBattleButton";
import useBattleSectionLogic from "./useBattleSectionLogic";

const BattleSection = () => {
  const { userSelectedPokemon, randomPokemon, generateRandomPokemon } =
    useBattleSectionLogic();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "center",
      }}
    >
      <PokemonBattleCard pokemon={userSelectedPokemon} />
      <StartBattleButton
        onClick={generateRandomPokemon}
        userSelectedPokemon={userSelectedPokemon}
      />
      <PokemonBattleCard pokemon={randomPokemon} />
    </Box>
  );
};

export default BattleSection;
