import Info from "./Info";
import { MainProps } from "../utils/types";
import PokemonCard from "./PokemonCard";
import { usePokemonData } from "../hooks/usePokemonData";

const Main: React.FC<MainProps> = ({
  handleClick,
  isFlipped,
  shuffledPokemonList,
}) => {
  const { pokemonData, gifImages, staticImages } =
    usePokemonData(shuffledPokemonList);

  const renderEmptyCards = (pokemonList: typeof shuffledPokemonList) =>
    pokemonList.map((name) => (
      <div
        key={name}
        className="flex flex-col border-4 border-gray-500 bg-gray-300"
      >
        <div className="aspect-square w-full"></div>
        <p className="flex flex-1 items-center justify-center pb-4 text-xs">
          &nbsp;
        </p>
      </div>
    ));

  const renderPokemonCards = () =>
    pokemonData.map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        pokemon={pokemon}
        gifImage={gifImages[pokemon.name]}
        staticImage={staticImages[pokemon.name]}
        onClick={handleClick}
        isFlipped={isFlipped}
      />
    ));

  const mainLayout = (children: React.ReactNode) => (
    <main className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
      {children}
      <Info />
    </main>
  );

  return pokemonData.length === 0
    ? mainLayout(renderEmptyCards(shuffledPokemonList))
    : mainLayout(renderPokemonCards());
};

export default Main;
