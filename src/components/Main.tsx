import Info from "./Info";
import { MainProps } from "./types";
import PokemonCard from "./PokemonCard";
import { usePokemonData } from "../hooks/usePokemonData";

const Main: React.FC<MainProps> = ({ handleClick, shuffledPokemonList }) => {
  const { pokemonData, gifImages, staticImages } =
    usePokemonData(shuffledPokemonList);

  const mainLayout = (children: React.ReactNode) => (
    <main className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
      {children}
      <Info />
    </main>
  );

  if (pokemonData.length === 0) {
    return mainLayout(
      shuffledPokemonList.map((name) => (
        <div
          key={name}
          className="flex cursor-pointer flex-col border-4 border-gray-500 bg-gray-300 hover:border-black"
        >
          <div className="aspect-square w-full"></div>
          <p className="flex flex-1 items-center justify-center pb-4 text-xs">
            &nbsp;
          </p>
        </div>
      )),
    );
  }

  return mainLayout(
    pokemonData.map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        pokemon={pokemon}
        gifImage={gifImages[pokemon.name]}
        staticImage={staticImages[pokemon.name]}
        onClick={handleClick}
      />
    )),
  );
};

export default Main;
