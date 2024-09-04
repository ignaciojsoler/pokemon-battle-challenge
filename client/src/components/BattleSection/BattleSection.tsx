import { Box } from "@mui/material"
import PokemonBattleCard from "./PokemonBattleCard/PokemonBattleCard"
import { usePokemon } from "../../context/PokemonContext"

const BattleSection = () => {
  const { userSelectedPokemon } = usePokemon();
  return (
    <Box>
      <PokemonBattleCard pokemon={userSelectedPokemon}/>
    </Box>
  )
}

export default BattleSection