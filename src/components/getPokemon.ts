import { Endpoint, Pokemon } from "./types";

async function getPokemon(endpoint: Endpoint): Promise<Pokemon | void> {
  const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: Pokemon = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}

export default getPokemon;
