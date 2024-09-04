import { API_URL_ENDPOINTS } from "../utils/constants";

export const fetchAllPokemons = async () => {
    try {
        const response = await fetch(API_URL_ENDPOINTS.POKEMON);
        return await response.json();
    } catch (err) {
        console.error('Error:', err);
    }
} 