import {
  NEWMOVIE_UPDATE_MOVIE_TITLE,
  NEWMOVIE_UPDATE_MOVIE_TITLE_ERROR,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE_ERROR,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME_ERROR,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE_ERROR
} from "../actions/types";

const initialState = {
  newMovieTitle: "",
  newMovieImageType: "",
  newMovieImageName: "",
  newMovieImageNameError: "",
  newMovieTitleError: "",
  newMovieImageTypeError: "",
  newMovieImageFile: null,
  newMovieImageFileError: ""
};
export function newMovie(state = initialState, action) {
  switch (action.type) {
    case NEWMOVIE_UPDATE_MOVIE_TITLE:
      return { ...state, newMovieTitle: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_TITLE_ERROR:
      return { ...state, newMovieTitleError: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE:
      return { ...state, newMovieImageType: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME:
      return { ...state, newMovieImageName: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME_ERROR:
      return { ...state, newMovieImageNameError: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE_ERROR:
      return { ...state, newMovieImageTypeError: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE:
      return { ...state, newMovieImageFile: action.payload };
    case NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE_ERROR:
      return { ...state, newMovieImageFileError: action.payload };
    default:
      return state;
  }
}
