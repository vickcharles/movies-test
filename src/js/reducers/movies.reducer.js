import { moviesConstants } from "../constants/movies.constants";

const initialState = {
  movies: [],
  selectedMovie: {},
  top5Movies: [],
  isRequesting: false
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case moviesConstants.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.movie],
        selectedMovie: action.movie
      };
    case moviesConstants.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id),
        selectedMovie: state.movies[0]
      };
    case moviesConstants.SELECT_MOVIE:
      return {
        ...state,
        movies: [...state.movies],
        selectedMovie: state.movies.find(movie => movie.id === action.id)
      };
    case moviesConstants.SET_MOVIES:
      return {
       ...state,
        movies: [...state.movies, ...action.movies],
        selectedMovie:
          action.movies.length >= 0 && action.movies[0]
      };
    case moviesConstants.SET_TOP_5_MOVIES:
      return {
        ...state,
        isRequesting: false,
        top5Movies: [...action.movies]
      };
      case moviesConstants.SET_TOP_5_MOVIES_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    default:
      return state;
  }
};
