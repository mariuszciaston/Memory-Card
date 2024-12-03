import { useState, useEffect, useMemo } from "react";
import { Pokemon } from "../components/types";
import getPokemon from "../components/getPokemon";
import extractFirstFrame from "../components/extractFirstFrame";
import pokemonList from "../components/pokemonList";

export function usePokemonData(shuffledPokemonList: string[]) {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [staticImages, setStaticImages] = useState<{ [key: string]: string }>(
    {},
  );

  const [gifImages, setGifImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function fetchAllPokemon() {
      const allPokemonData = await Promise.all(
        pokemonList.map((name) => getPokemon(name)),
      );

      const filteredPokemonData = allPokemonData.filter(
        (data): data is Pokemon => !!data,
      );
      setPokemonData(filteredPokemonData);

      const staticImagesMap: { [key: string]: string } = {};
      for (const pokemon of filteredPokemonData) {
        try {
          const staticImage = await extractFirstFrame(
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
          );
          staticImagesMap[pokemon.name] = staticImage;
        } catch (error) {
          console.error(
            `Failed to extract static image for ${pokemon.name}`,
            error,
          );
        }
      }
      setStaticImages(staticImagesMap);

      const gifImagesMap: { [key: string]: string } = {};
      for (const pokemon of filteredPokemonData) {
        try {
          const gifImage =
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default;

          gifImagesMap[pokemon.name] = gifImage;
        } catch (error) {
          console.error(`Failed to grab gif image for ${pokemon.name}`, error);
        }
      }
      setGifImages(gifImagesMap);
    }

    fetchAllPokemon();
  }, []);

  const sortedPokemonData = useMemo(() => {
    if (!pokemonData.length) return [];
    return shuffledPokemonList
      .map((name) => pokemonData.find((p) => p.name === name))
      .filter((pokemon): pokemon is Pokemon => pokemon !== undefined);
  }, [shuffledPokemonList, pokemonData]);

  return {
    pokemonData: sortedPokemonData,

    staticImages,
    gifImages,
  };
}
