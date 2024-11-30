import { useState, useEffect } from "react";
import Info from "./Info";
import { MainProps, Pokemon } from "./types";
import getPokemon from "./getPokemon";

const Main: React.FC<MainProps> = ({ handleClick, shuffledPokemonList }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchAllPokemon() {
      const allPokemonData = await Promise.all(
        shuffledPokemonList.map((name) => getPokemon(name)),
      );
      setPokemonData(allPokemonData.filter((data): data is Pokemon => !!data));
    }

    fetchAllPokemon();
  }, [shuffledPokemonList]);

  if (pokemonData.length === 0) {
    return (
      <main className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
        <Info />

        {shuffledPokemonList.map((name) => (
          <div
            key={name}
            className="flex cursor-pointer flex-col border-4 border-gray-500 bg-gray-300 hover:border-black"
          >
            <div className="aspect-square w-full"></div>
            <p className="flex flex-1 items-center justify-center pb-4 text-xs">
              &nbsp;
            </p>
          </div>
        ))}
      </main>
    );
  }

  return (
    <main className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
      <Info />

      {pokemonData.map((pokemon) => (
        <div
          key={pokemon.name}
          className="flex cursor-pointer flex-col border-4 border-gray-500 bg-gray-300 hover:border-black"
          onClick={() => handleClick(pokemon.name)}
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
