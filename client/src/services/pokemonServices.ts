import { Pokemon } from "../interfaces/Pokemon.interface";
import { API_URL_ENDPOINTS } from "../utils/constants";

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