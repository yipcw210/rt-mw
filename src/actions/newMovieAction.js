import {
  NEWMOVIE_UPDATE_MOVIE_TITLE,
  NEWMOVIE_UPDATE_MOVIE_TITLE_ERROR,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE_ERROR,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME_ERROR,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE,
  NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE_ERROR
} from "./types";

export function updateNewMovieTitle(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_TITLE, payload };
}
export function updateNewMovieTitleError(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_TITLE_ERROR, payload };
}
export function updateNewMovieImageType(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE, payload };
}
export function updateNewMovieImageTypeError(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_IMAGE_TYPE_ERROR, payload };
}
export function updateNewMovieImageName(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME, payload };
}
export function updateNewMovieImageNameError(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_IMAGE_NAME_ERROR, payload };
}
export function updateNewMovieImageFile(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE, payload };
}
export function updateNewMovieImageFileError(payload) {
  return { type: NEWMOVIE_UPDATE_MOVIE_IMAGE_FILE_ERROR, payload };
}
