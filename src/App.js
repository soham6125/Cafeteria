import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch >
              <Route exact path="/"> <Home /> </Route>
              <Route path="/menu"> <Menu /> </Route>
              <Route path="/about"> <About /> </Route>
              <Route path="/contact"> <Contact /> </Route>
              <Route path="/gallery"> <Gallery /> </Route>
            </Switch>
          </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
