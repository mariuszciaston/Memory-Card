import { useState, useEffect } from "react";
import Info from "./Info";
import { Endpoint, Pokemon, StringArray } from "./types";

const pokemonList = [
  "charmander",
  "charmeleon",
  "charizard",

  "bulbasaur",
  "ivysaur",
  "venusaur",

  "squirtle",
  "wartortle",
  "blastoise",

  "pikachu",
  "jigglypuff",
  "chansey",
];

function shuffleArray(array: StringArray) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledPokemonList = shuffleArray(pokemonList);

const Main = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

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

  useEffect(() => {
    async function fetchAllPokemon() {
      const allPokemonData = await Promise.all(
        shuffledPokemonList.map((name) => getPokemon(name)),
      );
      setPokemonData(allPokemonData.filter((data): data is Pokemon => !!data));
    }

    fetchAllPokemon();
  }, []);

  if (pokemonData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
      <Info />

      {pokemonData.map((pokemon) => (
        <div
          key={pokemon.name}
          className="flex cursor-pointer flex-col border-4 border-gray-500 bg-gray-300 hover:border-black"
        >
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="aspect-square w-full"
          />

          <p className="flex flex-1 items-center justify-center pb-4 text-xs">
            {pokemon.name}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Main;
