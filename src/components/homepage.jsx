import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Customers from "./customers";
import Movies from "./movies";
import Rentals from "./rentals";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    );
  }
}

export default HomePage;
