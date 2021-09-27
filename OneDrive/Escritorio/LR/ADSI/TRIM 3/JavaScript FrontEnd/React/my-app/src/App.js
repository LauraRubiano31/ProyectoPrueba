
import './App.css';
import React from "react";
import Portafolio from './pages/Portafolio';
import Error from './pages/Error404';
import Home from './pages/Home';
import About from './components/skills/about1';
import Formacion from './components/formacion/Formacion1';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/portafolio">
        <Portafolio/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/formacion">
        <Formacion />
      </Route>
      <Route path="*">
          <Error/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
