import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Pokemon, StringArray } from "./utils/types";
import pokemonList from "./data/pokemonList";
import shuffleArray from "./utils/shuffleArray";
import {
  playError,
  playFlip,
  playOpening,
  playPoint,
  playVictory,
  stopBattle,
  stopOpening,
} from "./utils/sound";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemonList, setClickedPokemonList] = useState<StringArray>([]);
  const [pokemonListOrder, setPokemonListOrder] = useState(
    shuffleArray(pokemonList),
  );
  const [isClickable, setIsClickable] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  if (bestScore === 0) playOpening();

  if (bestScore === 12 && score === 12) {
    stopOpening();
    stopBattle();
    playVictory();
    playOpening();
    setScore(0);
    setClickedPokemonList([]);
  }

  const handleClick = async (pokemonName: Pokemon["name"]) => {
    if (!isClickable) return;

    setIsClickable(false);
    if (!clickedPokemonList.includes(pokemonName)) {
      playPoint();
      setClickedPokemonList([...clickedPokemonList, pokemonName]);
      setScore((prevScore) => prevScore + 1);
      setBestScore((prevBestScore) => Math.max(prevBestScore, score + 1));
    } else {
      playError();
      setScore(0);
      setClickedPokemonList([]);
    }

    await handleCardFlip();
    setIsClickable(true);
  };

  const handleCardFlip = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsFlipped(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setPokemonListOrder(shuffleArray([...pokemonList]));
    await new Promise((resolve) => setTimeout(resolve, 100));
    playFlip();
    setIsFlipped(false);
  };

  return (
    <div
      id="wrapper"
      className="mx-auto flex min-h-screen max-w-[768px] flex-col justify-center gap-4 bg-white md:px-4"
    >
      <Header score={score} bestScore={bestScore} />
      <Main
        handleClick={handleClick}
        shuffledPokemonList={pokemonListOrder}
        isFlipped={isFlipped}
      />
      <Footer />
    </div>
  );
}

export default App;
