import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Pokemon, StringArray } from "./components/types";
import pokemonList from "./components/pokemonList";
import shuffleArray from "./components/shuffleArray";
import {
  playError,
  playFlip,
  playOpening,
  playPoint,
} from "./components/sound";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemonList, setClickedPokemonList] = useState<StringArray>([]);
  const [pokemonListOrder, setPokemonListOrder] = useState(
    shuffleArray(pokemonList),
  );
  const [isClickable, setIsClickable] = useState(true);

  if (bestScore === 0) playOpening();

  const handleClick = (e: Pokemon["name"]) => {
    if (!isClickable) return;
    setIsClickable(false);

    if (!clickedPokemonList.includes(e)) {
      playPoint();
      setClickedPokemonList([...clickedPokemonList, e]);
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
    } else {
      playError();
      setScore(0);
      setClickedPokemonList([]);
    }

    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      playFlip();
      setPokemonListOrder(shuffleArray([...pokemonList]));
      setIsClickable(true);
    })();
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
