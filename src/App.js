import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
