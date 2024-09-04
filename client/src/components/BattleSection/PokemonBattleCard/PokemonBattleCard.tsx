import { Pokemon } from "../../../interfaces/Pokemon.interface"

interface PokemonBattleCardProps {
  pokemon: Pokemon | null;
}
const PokemonBattleCard = ({pokemon}: PokemonBattleCardProps) => {

  if (!pokemon) return null;

  return (
    <div>{pokemon.name}</div>
  )
}

export default PokemonBattleCard