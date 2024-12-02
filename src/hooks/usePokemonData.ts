import { useState, useEffect } from "react";
import { Pokemon } from "../components/types";
import getPokemon from "../components/getPokemon";
import extractFirstFrame from "../components/extractFirstFrame";

export function usePokemonData(shuffledPokemonList: string[]) {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [staticImages, setStaticImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function fetchAllPokemon() {
      const allPokemonData = await Promise.all(
        shuffledPokemonList.map((name) => getPokemon(name))
      );

      const filteredPokemonData = allPokemonData.filter(
        (data): data is Pokemon => !!data
      );
      setPokemonData(filteredPokemonData);

      const staticImagesMap: { [key: string]: string } = {};
      for (const pokemon of filteredPokemonData) {
        try {
          const staticImage = await extractFirstFrame(
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          );
          staticImagesMap[pokemon.name] = staticImage;
        } catch (error) {
          console.error(
            `Failed to extract static image for ${pokemon.name}`,
            error
          );
        }
      }
      setStaticImages(staticImagesMap);
    }

    fetchAllPokemon();
  }, [shuffledPokemonList]);

  return { pokemonData, staticImages };
} 