const Footer = () => {
  return (
    <footer className="flex items-center justify-end bg-green-100 p-8 text-sm">
      Mariusz Ciastoń 2024 &nbsp;
      <a
        href="https://github.com/mariuszciaston/"
        target="_blank"
        rel="noopener"
      >
        <i
          className="fab fa-github fa-2x hover:rotate-1turn opacity-75 transition-transform duration-500 ease-in-out hover:scale-125 hover:transform hover:opacity-100"
          aria-hidden="true"
        ></i>
      </a>
    </footer>
  );
};

export default Footer;
