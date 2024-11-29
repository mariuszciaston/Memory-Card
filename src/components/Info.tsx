import { useState } from "react";

const Info = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="modal"
      className="absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-opacity-90"
      onClick={handleClick}
    >
      <div className="mx-4 max-w-[calc(768px-2rem)] border-4 border-green-500 bg-gray-300 p-4 text-xs sm:p-8">
        Earn points by clicking on the images but don't click the same one more
        than once. Click anywhere to start!
      </div>
    </div>
  );
};

export default Info;
