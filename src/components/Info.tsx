import { useState } from "react";
import { playBattle, playClick } from "../utils/sound";

const Info = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    playClick();
    playBattle();
  };

  if (!isVisible) return null;

  return (
    <div
      id="modal"
      className="absolute inset-0 bg-white bg-opacity-90 md:flex md:items-center"
    >
      <div className="mx-4 flex flex-col items-center gap-8 border-4 border-gray-500 bg-white p-8 text-xs md:mx-0 md:p-8">
        <p>
          Earn points by clicking on Pokemon cards. Remember not to click on the
          same one again.
        </p>

        <button
          onClick={handleClick}
          className="border-4 border-gray-500 bg-green-500 p-4 px-8 text-white hover:border-black"
          type="button"
        >
          Press to start!
        </button>
      </div>
    </div>
  );
};

export default Info;
