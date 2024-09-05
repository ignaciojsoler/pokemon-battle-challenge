import { Pokemon } from "../../interfaces/Pokemon.interface"

export const getRandomPokemon = ({
    pokemonId,
    pokemonList,
    currentRandomPokemonId,
}: {
    pokemonId: string, 
    currentRandomPokemonId?: string,
    pokemonList: Pokemon[],
}) => {
    const filteredPokemonList = pokemonList.filter((pokemon: Pokemon) => {
        return pokemon.id!== pokemonId && pokemon.id!== currentRandomPokemonId;
    });

    if (!filteredPokemonList.length) return;

    const randomIndex = Math.floor(Math.random() * filteredPokemonList.length);

    return filteredPokemonList[randomIndex];
};