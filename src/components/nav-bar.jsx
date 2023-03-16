import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <div className="navbar-brand">Vidly</div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                Movies <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/customers">
                Customers <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/rentals">
                Rentals <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
