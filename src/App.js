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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

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
        <Router>
          <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch >
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/menu"> <Menu /> </Route>
                <Route exact path="/gallery"> <Gallery /> </Route>
                <Route exact path="/about"> <About /> </Route>
                <Route exact path="/contact"> <Contact /> </Route>
                <Route exact path="/signup"> <Signup /> </Route>
                <Route exact path="/login"> <Login /> </Route>
              </Switch>
            </AnimatePresence>
          <Footer />
        </Router>
    </div>}
    </div>
  );
}

export default App;
