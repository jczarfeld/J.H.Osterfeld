import React from "react"
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";

function App() {
  return <div className="App">
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Resume />
    </div>;
}


export default App;
