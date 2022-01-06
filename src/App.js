import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
      {loading ? <Loader /> : 
      <div className="App">
        <Navbar />
        <div id="home"> <Home /> </div>
        <div id="menu"> <Menu /> </div>
        <div id="gallery"> <Gallery /> </div>
        <div id="about"> <About /> </div>
        <div id="contact"> <Contact /> </div>
        <Footer />
      </div> 
      }
    </div>
  );
}

export default App;
