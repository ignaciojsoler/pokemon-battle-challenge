import { Pokemon } from "../interfaces/Pokemon.interface";
import { API_URL_ENDPOINTS, COMMON_HEADERS } from "../utils/constants";

export const fetchAllPokemons = async (): Promise<Pokemon[] | null> => {
    try {
        const response = await fetch(API_URL_ENDPOINTS.POKEMON);
        const data: Promise<Pokemon[]> = response.json();
        return await data;
    } catch (err) {
        console.error('Error:', err);
        return null;
    }
} 

export const startBattle = async (firstPokemonId: string, secondPokemonId: string) => {
    try {
        const response = await fetch(API_URL_ENDPOINTS.BATTLE, {
            method: 'POST',
            headers: COMMON_HEADERS,
            body: JSON.stringify({ firstPokemonId, secondPokemonId }),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Error', err);
        return null;
    }
}