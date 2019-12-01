import { moviesConstants } from "../constants/movies.constants";

const initialState = {
  movies: [
    {
      id: 0,
      title: "the joker",
      image: "https://img-cdn.hipertextual.com/files/2019/08/hipertextual-2019303541.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1",
      description: "this is an description of my image",
      relaseDate: "11/10/1999"
    },
    {
      id: 1,
      title: "mi movie title",
      description: "this is an description of my image",
      relaseDate: "11/10/1999"
    },
    {
      id: 2,
      title: "mi movie title",
      description: "this is an description of my image",
      relaseDate: "11/10/1999"
    }
  ],
  selectedMovie: {}
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case moviesConstants.ADD_MOVIE:
      return {
        movies: [...state.movies, action.movie],
        selectedMovie: {}
      };
    case moviesConstants.DELETE_MOVIE:
      return {
        movies: state.movies.filter(movie => movie.id !== action.id),
        selectedMovie: {}
      };
    case moviesConstants.SELECT_MOVIE:
      return {
        movies: [...state.movies],
        selectedMovie: state.movies.find(movie => movie.id === action.id)
      };
    default:
      return state;
  }
};
