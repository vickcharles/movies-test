import { moviesConstants } from "../constants/movies.constants";

export const moviesActions = {
  addMovie,
  deleteMovie,
  selectMovie
};

function addMovie(movie) {
  return {
    type: moviesConstants.ADD_MOVIE,
    movie
  };
}

function deleteMovie(id) {
  return {
    type: moviesConstants.DELETE_MOVIE,
    id
  };
}

function selectMovie(id) {
  return {
    type: moviesConstants.SELECT_MOVIE,
    id
  };
}
