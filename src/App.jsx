import React from "react"
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import "./app.scss"

import Nav from "./navbar/Nav";

function App() {
  return (
  <div className="app">
    <Nav />
    <div className="sections">
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
    </div>
    </div>
  );
}


export default App;


