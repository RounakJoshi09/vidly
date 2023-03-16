import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/homepage";

class App extends Component {
  render() {
    return (
      <main className="container">
        <HomePage />
      </main>
    );
  }
}

export default App;
