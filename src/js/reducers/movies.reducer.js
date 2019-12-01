import { moviesConstants } from "../constants/movies.constants";

const initialState = [
  {
    id: 0,
    title: "mi movie title",
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
];

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case  moviesConstants.ADD_MOVIE:
      return [
        ...state,
        action.movie
      ];
    case moviesConstants.ADD_MOVIE_SUCCESS:
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};
