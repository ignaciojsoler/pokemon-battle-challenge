import { Pokemon } from "../../interfaces/Pokemon.interface"

export const getRandomPokemon = ({
    pokemonId,
    pokemonList
}: {
    pokemonId: string, 
    pokemonList: Pokemon[]
}) => {
    const filteredPokemonList = pokemonList.filter((pokemon: Pokemon) => {
        return pokemon.id!== pokemonId;
    });

    if (!filteredPokemonList.length) return;

    const randomIndex = Math.floor(Math.random() * filteredPokemonList.length);

    return filteredPokemonList[randomIndex];
};