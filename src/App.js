import React, { Component } from "react";
import logo from './logo.svg';
import './style.css';
import Nav from "./components/nav";
import Search from "./components/search";
import ListRS from "./components/listRS";
import BestRS from "./components/bestRS";
import About from "./components/about";
import Artikel from "./components/artikel";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
        <ListRS />
        <BestRS />
        <About />
        <Artikel />
      </div>
    );
  }
}

export default App;
