import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Pokemon, StringArray } from "./components/types";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemonList, setClickedPokemonList] = useState<StringArray>([]);

  const pokemonList = [
    "charmander",
    "charmeleon",
    "charizard",

    "bulbasaur",
    "ivysaur",
    "venusaur",

    "squirtle",
    "wartortle",
    "blastoise",

    "pikachu",
    "jigglypuff",
    "chansey",
  ];

  function shuffleArray(array: StringArray) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [pokemonListOrder, setPokemonListOrder] = useState(
    shuffleArray(pokemonList),
  );

  const handleClick = (e: Pokemon["name"]) => {
    if (!clickedPokemonList.includes(e)) {
      setClickedPokemonList([...clickedPokemonList, e]);
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
    } else {
      setScore(0);
      setClickedPokemonList([]);
    }
    setPokemonListOrder(shuffleArray([...pokemonList]));
  };

  return (
    <div
      id="wrapper"
      className="mx-auto flex min-h-screen max-w-[768px] flex-col justify-center gap-4 bg-white md:px-4"
    >
      <Header score={score} bestScore={bestScore} />
      <Main handleClick={handleClick} shuffledPokemonList={pokemonListOrder} />
      <Footer />
    </div>
  );
}

export default App;
