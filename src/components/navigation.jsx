import React, { Component } from "react";
import "./navigation.css";
import { getGenres } from "../services/fakeGenreService";
class Navigation extends Component {
  state = {
    genres: [],
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
  }

  render() {
    return (
      <table className="navigation">
        <tbody>{this.getListofGenre()}</tbody>
      </table>
    );
  }

  getListofGenre() {
    const listOfGenre = this.state.genres.map((genre) => (
      <tr>
        <td className="genre" id="{genre._id}">
          {genre.name}
        </td>
      </tr>
    ));
    return listOfGenre;
  }
}

export default Navigation;
