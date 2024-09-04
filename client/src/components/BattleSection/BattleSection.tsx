import { Box } from "@mui/material"
import PokemonBattleCard from "./PokemonBattleCard/PokemonBattleCard"
import StartBattleButton from "./StartBattleButton/StartBattleButton";
import useBattleSectionLogic from "./useBattleSectionLogic";

const BattleSection = () => {
  const { userSelectedPokemon, randomPokemon } = useBattleSectionLogic();
  
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <PokemonBattleCard pokemon={userSelectedPokemon}/>
      <StartBattleButton/>
      <PokemonBattleCard pokemon={randomPokemon}/>
    </Box>
  )
}

export default BattleSection