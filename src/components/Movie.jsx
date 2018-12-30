import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovie } from "../services/movieService";
import * as actions from "../actions/movieAction";

class Movie extends Component {
  async componentDidMount() {
    const { data: allMovies } = await getMovie();
    this.props.fetchMovies(allMovies);
  }

  filterMovies = () => {
    const filteredMovies = this.props.movies.filter(movie =>
      movie.title
        .toLowerCase()
        .includes(this.props.moviesSearchKeywords.toLowerCase())
    );

    return filteredMovies;
  };
  //style={{ width: "18rem" }}
  handleSearch = event => {
    this.props.updateMoviesSearchKeywords(event.currentTarget.value);
  };
  renderSearchBar = () => {
    return (
      <div className="input-group m-4">
        <div className="input-group-prepend">
          <input
            onChange={this.handleSearch}
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      </div>
    );
  };
  renderMovies = movies => {
    if (movies) {
      movies = movies.map((movie, index) => (
        <div className="card col-3 mx-4 my-2" key={index}>
          <div className="card-body">
            <img
              className="card-img-top"
              src={process.env.REACT_APP_API_URL + movie.movieImage}
              alt=""
            />
            <h5 className="card-title">{movie.title}</h5>
          </div>
          <div
            className="card-footer d-flex justify-content-around"
            style={{ fontSize: "1.5rem" }}
          >
            <button className="btn btn-success" style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={["far", "thumbs-up"]} />
              <span className="ml-2">0</span>
            </button>

            <button className="btn btn-danger" style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={["far", "thumbs-down"]} />
              <span className="ml-2">0</span>
            </button>
          </div>
        </div>
      ));
      return movies;
    }
    return null;
  };

  render() {
    const movies = this.filterMovies();

    return (
      <React.Fragment>
        <div className="container my-3 row">{this.renderSearchBar()}</div>
        <div className="container-fluid mt-2 row">
          {this.renderMovies(movies)};
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies,
  moviesSearchKeywords: state.movie.moviesSearchKeywords
});

export default connect(
  mapStateToProps,
  actions
)(Movie);
