import { moviesConstants } from "../constants/movies.constants";

const initialState = {
  movies: [
    {
      id: 0,
      title: "The joker",
      image: "https://img-cdn.hipertextual.com/files/2019/08/hipertextual-2019303541.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1",
      description: "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker. Joker provides a possible origin story for the character; set in 1981, it follows Arthur Fleck, a failed stand-up comedian whose descent into insanity and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Glenn Fleshler, Bill Camp, Shea Whigham, and Marc Maron appear in supporting roles.",
      relaseDate: "August 31, 2019"
    }
  ],
  selectedMovie: {}
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
        movies: state.movies.filter(movie => movie.id !== action.id),
        selectedMovie: {}
      };
    case moviesConstants.SELECT_MOVIE:
      return {
        movies: [...state.movies],
        selectedMovie: state.movies.find(movie => movie.id === action.id)
      };
      case moviesConstants.SET_MOVIES:
      return {
        movies: [...state.movies, ...action.movies],
        selectedMovie: action.movies.lenght >= 0 ? action.movies[0] : state.movies[0]
      };
    default:
      return state;
  }
};
