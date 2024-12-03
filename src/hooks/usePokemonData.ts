import { useState, useEffect, useMemo } from "react";
import { GifImagesMapProp, Pokemon, StaticImagesMapProp } from "../utils/types";
import getPokemon from "../utils/getPokemon";
import extractFirstFrame from "../utils/extractFirstFrame";
import pokemonList from "../data/pokemonList";

export function usePokemonData(shuffledPokemonList: string[]) {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [staticImages, setStaticImages] = useState<StaticImagesMapProp>({});
  const [gifImages, setGifImages] = useState<GifImagesMapProp>({});

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const allPokemonData = await Promise.all(pokemonList.map(getPokemon));

      const filteredPokemonData = allPokemonData.filter(
        (data): data is Pokemon => !!data,
      );
      setPokemonData(filteredPokemonData);

      const staticImagesMap: StaticImagesMapProp = {};
      const gifImagesMap: GifImagesMapProp = {};

      for (const pokemon of filteredPokemonData) {
        await fetchAndCacheImages(pokemon, staticImagesMap, gifImagesMap);
      }

      setStaticImages(staticImagesMap);
      setGifImages(gifImagesMap);
    };

    fetchAllPokemon();
  }, []);

  const fetchAndCacheImages = async (
    pokemon: Pokemon,
    staticImagesMap: StaticImagesMapProp,
    gifImagesMap: GifImagesMapProp,
  ) => {
    const cachedStaticImage = localStorage.getItem(`${pokemon.name}-static`);
    const cachedGifImage = localStorage.getItem(`${pokemon.name}-gif`);

    if (!cachedStaticImage) {
      try {
        const staticImage = await extractFirstFrame(
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        );
        staticImagesMap[pokemon.name] = staticImage;
        localStorage.setItem(`${pokemon.name}-static`, staticImage);
      } catch (error) {
        console.error(
          `Failed to extract static image for ${pokemon.name}`,
          error,
        );
      }
    } else {
      staticImagesMap[pokemon.name] = cachedStaticImage;
    }

    if (!cachedGifImage) {
      try {
        const gifImage =
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default;

        gifImagesMap[pokemon.name] = gifImage;
        localStorage.setItem(`${pokemon.name}-gif`, gifImage);
      } catch (error) {
        console.error(`Failed to grab gif image for ${pokemon.name}`, error);
      }
    } else {
      gifImagesMap[pokemon.name] = cachedGifImage;
    }
  };

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
