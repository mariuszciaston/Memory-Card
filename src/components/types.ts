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

export interface HandleClickProp {
  handleClick: (e: Pokemon["name"]) => void;
}
