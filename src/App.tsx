import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        id="wrapper"
        className="mx-auto flex min-h-screen max-w-[1024px] flex-col justify-center"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
