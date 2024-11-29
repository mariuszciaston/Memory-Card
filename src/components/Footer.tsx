const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-300 p-4 text-xs md:p-8">
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
    </footer>
  );
};

export default Footer;
