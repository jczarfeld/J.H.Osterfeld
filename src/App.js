import React from "react"
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";
import {Route, Link} from "react-router-dom";
import Nav from "./nav";

function App() {
  return (
  <div className="App">
    <Nav />
   <Route exact path = "/" component = {Home} />
   <Route exact path = "/about" component = {About} />
   <Route exact path = "/portfolio" component = {Portfolio} />
   <Route exact path = "/contact" component = {Contact} />
   <Route exact path = "/resume" component = {Resume} />
    </div>
  );
}


export default App;
