import { moviesConstants } from "../constants/movies.constants";
import { moviesService } from "../services/movies.service";

export const moviesActions = {
  addMovie,
  deleteMovie,
  getTop5Movies,
  setMovies,
  selectMovie,
  getAllMovies,
  addMovieSucess
};

function addMovieSucess(movie) {
  return {
    type: moviesConstants.ADD_MOVIE,
    movie
  };
}

function addMovie(movie) {
  return async dispatch => {
    moviesService.addMovie(movie).then(() => {
      dispatch(addMovieSucess(movie));
    });
  };
}

function setMovies(movies) {
  return {
    type: moviesConstants.SET_MOVIES,
    movies
  };
}

function getAllMovies() {
  return dispatch => {
    moviesService.getAllMovies().then(res => {
      console.log(res)
      dispatch(setMovies(res.movies));
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

function getTop5Movies() {
  const setTop5Movies = movies => ({
    type: moviesConstants.SET_TOP_5_MOVIES,
    movies
  });

  const setTop5MoviesRequest = () => ({
    type: moviesConstants.SET_TOP_5_MOVIES_REQUEST
  });

  return dispatch => {
    dispatch(setTop5MoviesRequest());
    moviesService.getTop5().then(res => {
      console.log(res)
      dispatch(setTop5Movies(res.data.movies));
    });
  };
}
