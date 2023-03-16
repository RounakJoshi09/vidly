import React, { Component } from "react";
import Movies from "./movies";
import Navigation from "./navigation";
import "./movie_catalogue.css";
class MovieCatalogue extends Component {
  state = {};
  render() {
    return (
      <main className="component">
        <Navigation />
        <Movies />
      </main>
    );
  }
}

export default MovieCatalogue;
