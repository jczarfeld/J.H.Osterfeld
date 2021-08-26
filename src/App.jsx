import React from "react"
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import "./app.scss";
import Nav from "./components/navbar/Nav";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <About/>
      <Portfolio/>
      <Contact/>
      
      </div>
    </div>
  );
}

export default App;




