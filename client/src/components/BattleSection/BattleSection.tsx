import { Box } from "@mui/material";
import PokemonBattleCard from "./PokemonBattleCard/PokemonBattleCard";
import StartBattleButton from "./StartBattleButton/StartBattleButton";
import useBattleSectionLogic from "./useBattleSectionLogic";
import { BATTLE_CARDS_TITLES } from "../../utils/constants";

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
      <PokemonBattleCard 
      defaultTitle={BATTLE_CARDS_TITLES.USER_SELECTED}
      pokemon={userSelectedPokemon} 
      />
      <StartBattleButton
        onClick={generateRandomPokemon}
        userSelectedPokemon={userSelectedPokemon}
      />
      <PokemonBattleCard 
      defaultTitle={BATTLE_CARDS_TITLES.RANDOM_POKEMON}
      pokemon={randomPokemon} 
      />
    </Box>
  );
};

export default BattleSection;
