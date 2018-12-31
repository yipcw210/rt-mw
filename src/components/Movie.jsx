import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovie, responseToMovie } from "../services/movieService";
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

  handleResponse = async (movieId, response) => {
    const { like } = response;
    try {
      await responseToMovie(movieId, { userId: this.props.user._id, like });
      const { data: allMovies } = await getMovie();
      this.props.fetchMovies(allMovies);
    } catch (ex) {
      alert(ex);
    }
  };

  renderResponse = (movie, response) => {
    if (response === "thumbs-up") {
      const userLikeTheMovie = movie.response.likeBy.includes(
        this.props.user._id
      );
      const className = userLikeTheMovie ? "fas" : "far";
      return <FontAwesomeIcon icon={[className, response]} />;
    } else if (response === "thumbs-down") {
      const userDislikeTheMovie = movie.response.dislikeBy.includes(
        this.props.user._id
      );
      const className = userDislikeTheMovie ? "fas" : "far";
      return <FontAwesomeIcon icon={[className, response]} />;
    }
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
            <button
              onClick={() => this.handleResponse(movie._id, { like: true })}
              className={
                movie.response.likeBy.includes(this.props.user._id)
                  ? "btn btn-success"
                  : "btn btn-outline-success"
              }
              style={{ fontSize: "1.5rem" }}
            >
              {this.renderResponse(movie, "thumbs-up")}
              <span className="ml-2">{movie.response.likeCount}</span>
            </button>

            <button
              onClick={() => this.handleResponse(movie._id, { like: false })}
              className={
                movie.response.dislikeBy.includes(this.props.user._id)
                  ? "btn btn-danger"
                  : "btn btn-outline-danger"
              }
              style={{ fontSize: "1.5rem" }}
            >
              {this.renderResponse(movie, "thumbs-down")}
              <span className="ml-2">{movie.response.dislikeCount}</span>
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
  moviesSearchKeywords: state.movie.moviesSearchKeywords,
  user: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  actions
)(Movie);
