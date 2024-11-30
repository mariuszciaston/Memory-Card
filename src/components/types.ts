export type Endpoint = string;

export interface Pokemon {
  name: string;
  sprites: { front_default: string };
}

export type StringArray = string[];

export interface Score {
  score: number;
  bestScore: number;
}

export interface MainProps {
  handleClick: (e: string) => void;
  shuffledPokemonList: StringArray;
}