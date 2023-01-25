import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import ScrollButton from "./components/style_features/ScrollButton";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Introduction />
      <Experience />
      <Work />
      <Skills />
      <Contact />
      <ScrollButton />
    </>
  );
}

export default App;
