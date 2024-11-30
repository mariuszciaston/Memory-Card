import { Score } from "./types";

const Header: React.FC<Score> = ({ score, bestScore }) => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between gap-4 bg-gray-300 p-4 md:p-8">
        <h1 className="flex-1 text-2xl">PokeMemo</h1>

        <div className="flex flex-1 justify-end text-nowrap text-end">
          score: {score}
          <br />
          best score: {bestScore}
        </div>
      </header>
    </>
  );
};

export default Header;
