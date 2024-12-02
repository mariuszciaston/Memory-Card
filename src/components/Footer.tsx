import { useState } from "react";
import { playBattle, playClick, stopBattle, stopOpening } from "./sound";

const Footer = () => {
  const [toggleMusic, setToggleMusic] = useState(true);

  const toggle = () => {
    playClick();
    if (toggleMusic) {
      stopBattle();
      stopOpening();
    } else {
      playBattle();
    }
    setToggleMusic(!toggleMusic);
  };

  return (
    <footer className="flex flex-wrap justify-between gap-4 bg-gray-300 p-4 text-xs md:p-8">
      <button
        className="border-4 border-gray-500 bg-white p-4 hover:border-black"
        onClick={toggle}
      >
        {toggleMusic ? "Stop Music" : "Play Music"}
      </button>

      <div className="flex flex-1 items-center justify-end text-nowrap">
        <div className="mt-1">Mariusz Ciastoń 2024</div>
        &nbsp;
        <a
          href="https://github.com/mariuszciaston/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="./apple-touch-icon.png"
            alt="GitHub Logo"
            className="h-[32px] min-h-[32px] w-[32px] min-w-[32px] transition-transform duration-500 ease-in-out hover:rotate-1turn hover:scale-125 hover:transform hover:opacity-100"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
