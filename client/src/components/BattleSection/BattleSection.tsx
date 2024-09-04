import { Box } from "@mui/material"
import PokemonBattleCard from "./PokemonBattleCard/PokemonBattleCard"
import { usePokemon } from "../../context/PokemonContext"
import StartBattleButton from "./StartBattleButton/StartBattleButton";

const BattleSection = () => {
  const { userSelectedPokemon } = usePokemon();
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <PokemonBattleCard pokemon={userSelectedPokemon}/>
      <StartBattleButton/>
      <PokemonBattleCard pokemon={userSelectedPokemon}/>
    </Box>
  )
}

export default BattleSection