export const API_URL = "http://localhost:3000";

export const API_URL_ENDPOINTS = {
  POKEMON: `${API_URL}/pokemon`,
  BATTLE: `${API_URL}/battle`,
  SEED: `${API_URL}/seed`,
};

export const ASSETS_ULR = {
  USER_POKEMON_SILHOUETTE: "https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png",
  OPONENT_POKEMON_SILHOUETTE:
    "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/8cd9ff69-beb7-42f0-b946-3d05f8929c08",
};

export const COMMON_HEADERS = {
  "Content-Type": "application/json",
};

export const BATTLE_CARDS_TITLES = {
  USER_SELECTED: "Choose a pokemon",
  RANDOM_POKEMON: "Random opponent",
};

export const BATTLE_RESULTS_COPIES = {
  EMPTY_STATE: "Winner will be shown here!",
  VICTORY: "wins!",
};
