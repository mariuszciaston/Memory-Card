import Info from "./components/Info";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        id="wrapper"
        className="mx-auto flex min-h-screen max-w-[768px] flex-col justify-center gap-4 bg-white md:px-4"
      >
        <Header />
        <Main />
        <Footer />
      </div>
      <Info />
    </>
  );
}

export default App;
