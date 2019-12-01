import { moviesConstants } from "../constants/movies.constants";
import { moviesService } from "../services/movies.service";

export const moviesActions = {
  addMovie,
  deleteMovie,
  selectMovie,
  getAllMovies
};

function addMovie(movie) {
  const addMovieSucess = movie => ({
    type: moviesConstants.ADD_MOVIE,
    movie
  });

  return async dispatch => {
    moviesService.addMovie(movie).then(() => {
      dispatch(addMovieSucess(movie));
    });
  };
}

function getAllMovies() {
  const setMovies = (movies) => ({
    type: moviesConstants.SET_MOVIES,
    movies
  });

  return dispatch => {
    moviesService.getAllMovies().then(res => {
      dispatch(setMovies(res.movies))
    });
  };
}

function deleteMovie(id) {
  const deleteMovieSuccess = id => ({
    type: moviesConstants.DELETE_MOVIE,
    id
  });
  return dispatch => {
    moviesService.removeMovie(id).then(() => {
      dispatch(deleteMovieSuccess(id));
    });
  };
}

function selectMovie(id) {
  return {
    type: moviesConstants.SELECT_MOVIE,
    id
  };
}
