import { useState } from "react";
import { PokemonCardProps } from "../utils/types";

const POSITION_ADJUSTMENTS: Record<string, string> = {
  charmander: "translate-x-[0%] translate-y-[2%]",
  charmeleon: "translate-x-[8%] translate-y-[2%]",
  charizard: "translate-x-[5%] translate-y-[-5%]",
  bulbasaur: "translate-x-[-2%] translate-y-[-4%]",
  ivysaur: "translate-x-[0%] translate-y-[0%]",
  venusaur: "translate-x-[0%] translate-y-[0%]",
  squirtle: "translate-x-[0%] translate-y-[-1%]",
  wartortle: "translate-x-[2%] translate-y-[2%]",
  blastoise: "translate-x-[-1%] translate-y-[-2%]",
  pikachu: "translate-x-[3%] translate-y-[-2%]",
  jigglypuff: "translate-x-[0%] translate-y-[-7%]",
  chansey: "translate-x-[0%] translate-y-[0%]",
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  staticImage,
  gifImage,

  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={pokemon.name}
      className="flex cursor-pointer flex-col overflow-hidden border-4 border-gray-500 bg-gray-300 hover:border-black"
      onClick={() => onClick(pokemon.name)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={gifImage}
        alt={pokemon.name}
        className={`aspect-square scale-[175%] object-scale-down ${isHovered ? "visible" : "invisible absolute"} ${
          POSITION_ADJUSTMENTS[pokemon.name] || ""
        }`}
      />

      <img
        src={staticImage}
        alt={pokemon.name}
        className={`aspect-square scale-[175%] object-scale-down ${isHovered ? "invisible absolute" : "visible"} ${
          POSITION_ADJUSTMENTS[pokemon.name] || ""
        }`}
      />

      <p className="flex flex-1 items-center justify-center pb-4 text-xs">
        {pokemon.name}
      </p>
    </div>
  );
};

export default PokemonCard;
