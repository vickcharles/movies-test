import { moviesConstants } from "../constants/movies.constants";

const initialState = {
  movies: [],
  selectedMovie: {},
  top5Movies: []
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case moviesConstants.ADD_MOVIE:
      return {
        movies: [...state.movies, action.movie],
        selectedMovie: action.movie
      };
    case moviesConstants.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
      };
    case moviesConstants.SELECT_MOVIE:
      return {
        movies: [...state.movies],
        selectedMovie: state.movies.find(movie => movie.id === action.id)
      };
    case moviesConstants.SET_MOVIES:
      return {
        movies: [...state.movies, ...action.movies],
        selectedMovie:
          action.movies.length >= 0 && action.movies[0]
      };
    case moviesConstants.SET_TOP_5_MOVIES:
      return {
        ...state,
        top5Movies: [...action.movies]
      };
    default:
      return state;
  }
};
