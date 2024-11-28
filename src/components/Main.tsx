const Main = () => {
  return (
    // <main className="flex flex-1 flex-wrap content-start justify-center gap-4 bg-amber-100 p-8">
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>

    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>

    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    //   <div className="h-48 w-48 bg-blue-300"></div>
    // </main>

    <main className="my-auto grid grid-cols-4 gap-4 p-4 md:p-0">
      <div className="flex cursor-pointer flex-col border-4 border-gray-500 hover:border-black">
        <img src="" alt="img" className="aspect-square w-full" />

        <hr className="w-full border-2" />

        <p className="flex flex-1 items-center justify-center py-2 text-xs">
          name
        </p>
      </div>

      <div className="flex cursor-pointer flex-col border-4 border-gray-500 hover:border-black">
        <img src="" alt="img" className="aspect-square w-full" />

        <hr className="w-full border-2" />

        <p className="flex flex-1 items-center justify-center py-2 text-xs">
          name
        </p>
      </div>

      <div className="flex cursor-pointer flex-col border-4 border-gray-500 hover:border-black">
        <img src="" alt="img" className="aspect-square w-full" />

        <hr className="w-full border-2" />

        <p className="flex flex-1 items-center justify-center py-2 text-xs">
          name
        </p>
      </div>

      <div className="flex cursor-pointer flex-col border-4 border-gray-500 hover:border-black">
        <img src="" alt="img" className="aspect-square w-full" />

        <hr className="w-full border-2" />

        <p className="flex flex-1 items-center justify-center py-2 text-xs">
          name
        </p>
      </div>

      <div className="aspect-square bg-blue-300">x</div>
      <div className="aspect-square bg-blue-300">x</div>
      <div className="aspect-square bg-blue-300">x</div>
      <div className="aspect-square bg-blue-300">x</div>

      <div className="aspect-square bg-blue-300">x</div>
      <div className="aspect-square bg-blue-300">x</div>
      <div className="aspect-square bg-blue-300">x</div>
      <div className="aspect-square bg-blue-300">x</div>
    </main>
  );
};

export default Main;
