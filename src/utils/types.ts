export type Endpoint = string;

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;

    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}

export type StringArray = string[];

export interface Score {
  score: number;
  bestScore: number;
}

export interface MainProps {
  handleClick: (e: string) => void;
  shuffledPokemonList: StringArray;
  isFlipped: boolean;
}

export interface PokemonCardProps {
  pokemon: Pokemon;
  staticImage: string;
  gifImage: string;
  onClick: (name: string) => void;
  isFlipped: boolean;
}

export type StaticImagesMapProp = { [key: string]: string };

export type GifImagesMapProp = { [key: string]: string };
