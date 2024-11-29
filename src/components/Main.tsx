import { useState, useEffect } from "react";

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
  "chansey ",
];

const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);

  async function getPokemon(endpoint) {
    const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    async function fetchAllPokemon() {
      const allPokemonData = await Promise.all(
        pokemonList.map((name) => getPokemon(name)),
      );
      setPokemonData(allPokemonData);
    }

    fetchAllPokemon();
  }, []);

  if (pokemonData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
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
