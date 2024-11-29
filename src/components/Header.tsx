const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between gap-4 bg-gray-300 p-4 md:p-8">
        <h1 className="flex-1 text-2xl">PokeMemo</h1>

        <div className="flex flex-1 justify-end text-nowrap text-end">
          score: 0
          <br />
          best score: 0
        </div>
      </header>
    </>
  );
};

export default Header;
