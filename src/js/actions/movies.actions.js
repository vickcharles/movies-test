import { moviesConstants } from "../constants/movies.constants";

export const moviesActions = {
  addMovie,
  deleteMovie
};

function addMovie(movie) {
  return {
    type: moviesConstants.ADD_MOVIE,
    movie
  };
}

function deleteMovie(id) {
  return {
    type: moviesConstants.ADD_MOVIE,
    id
  };
}
