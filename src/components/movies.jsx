import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./like";
import "./movies.css";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div className="movies-table">
        {this.getNumberOfMovies()},
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.getMoviesRow()}</tbody>
        </table>
      </div>
    );
  }
  getNumberOfMovies() {
    if (this.state.movies.length !== 0) {
      return <h4>Showing {this.state.movies.length} movies in the database</h4>;
    }
  }
  getMoviesRow() {
    const { length: count } = this.state.movies;

    return count === 0 ? (
      <h1>No Movies Found</h1>
    ) : (
      this.state.movies.map((movie) => {
        return (
          <tr key={movie._id}>
            <td> {movie.title} </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                isLiked={movie.isLiked}
                onClick={() => this.handleLike(movie)}
              ></Like>
            </td>
            <td>
              <button
                onClick={() => this.deleteMovieButton(movie._id)}
                className="btn btn-danger m-2"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  }

  deleteMovieButton(id) {
    deleteMovie(id);
    this.setState({
      movies: getMovies(),
    });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
  }
}

export default Movies;
