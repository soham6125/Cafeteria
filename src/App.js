import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div id="home"> {" "} <Home /> </div>
      <div id="menu"> {" "} <Menu /> </div>
      <div id="gallery"> {" "} <Gallery /> </div>
      <div id="about"> {" "} <About /> </div>
      <div id="contact"> {" "} <Contact /> </div>
      <Footer />
    </div>
  );
}

export default App;
