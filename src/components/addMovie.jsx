import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/newMovieAction";
import * as http from "../services/movieService";
import Joi from "joi-browser";
import Form from "./Form";

class addMovie extends Form {
  componentDidMount() {}
  schema = {
    newMovieTitle: Joi.string()
      .min(3)
      .required(),
    newMovieImageType: Joi.string()
      .valid("image/jpeg", "image/jpg", "image/gif", "image/png")
      .required(),
    newMovieImageName: Joi.string().required(),
    newMovieImageFile: Joi.object().required()
  };

  componentWillReceiveProps({ newMovieInfo: info, newMovieError: infoError }) {
    this.updateError(info, infoError);
    console.log(info);
  }

  handleFileChange = event => {
    let file = event.target.files[0];
    this.props.updateNewMovieImageType(file.type);
    this.props.updateNewMovieImageName(file.name);
    this.props.updateNewMovieImageFile(file);
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.validateForm(this.props.newMovieInfo);
    if (!this.hasError(this.props.newMovieError)) {
      let data = new FormData();
      data.append("movieImage", this.props.newMovieInfo.newMovieImageFile);
      data.append("title", this.props.newMovieInfo.newMovieTitle);
      http.addMovie(data);
      window.location.href = "/";
    }
  };

  render() {
    const { newMovieError, newMovieInfo } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="container mt-5">
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="username">Movie Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="newMovieTitle"
                  placeholder="Enter movie title"
                  onChange={this.handleValueChange}
                />
                {newMovieError.newMovieTitleError && (
                  <div className="alert alert-danger">
                    {newMovieError.newMovieTitleError}
                  </div>
                )}
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="movieImage"
                  onChange={this.handleFileChange}
                  accept=".png, .jpg, .gif, .jpeg"
                />
                <label className="custom-file-label" htmlFor="movieImage">
                  {newMovieInfo.newMovieImageName
                    ? newMovieInfo.newMovieImageName
                    : "Choose file"}
                </label>
              </div>
            </div>
            {newMovieError.newMovieImageTypeError && (
              <div className="alert alert-danger">
                {newMovieError.newMovieImageTypeError}
              </div>
            )}

            <button
              className="btn btn-success mt-4"
              onClick={this.handleSubmit}
            >
              Add Movie
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newMovieInfo: {
      newMovieTitle: state.newMovie.newMovieTitle,
      newMovieImageType: state.newMovie.newMovieImageType,
      newMovieImageName: state.newMovie.newMovieImageName,
      newMovieImageFile: state.newMovie.newMovieImageFile
    },
    newMovieError: {
      newMovieTitleError: state.newMovie.newMovieTitleError,
      newMovieImageTypeError: state.newMovie.newMovieImageTypeError,
      newMovieImageNameError: state.newMovie.newMovieImageNameError,
      newMovieImageFileError: state.newMovie.newMovieImageFileError
    }
  };
};

export default connect(
  mapStateToProps,
  actions
)(addMovie);
