import React, { Component } from "react";
import { connect } from "react-redux";
import Jaws from "../assets/images/posters/Jaws.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovie } from "../services/movieService";
import * as actions from "../actions/movieAction";

class Movie extends Component {
  async componentDidMount() {
    const { data: allMovies } = await getMovie();
    this.props.fetchMovies(allMovies);
    console.log(allMovies);
    console.log(this.props);
  }
  //style={{ width: "18rem" }}
  renderMovies = () => {
    if (this.props.movies) {
      const { movieImage } = this.props.movies[0];
      console.log(process.env.REACT_APP_API_URL + movieImage);
      const movies = this.props.movies.map((movie, index) => (
        <div className="card col-4 m-3">
          <div className="card-body" key={index}>
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
    return <div className="container mt-5 row">{this.renderMovies()};</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(
  mapStateToProps,
  actions
)(Movie);
