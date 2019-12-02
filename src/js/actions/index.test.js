import expect from "expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { moviesActions } from "./movies.actions";
import { moviesService } from "../../js/services/movies.service";
import { spy } from "sinon";

configure({
  adapter: new Adapter()
});

const movie = {
  id: "dummy-id",
  title: "dummy-title",
  description: "dummy-description",
  relaseDtae: "11/10/199",
  image: "dummy-image.png"
};

describe("Test Redux Alert Actions", () => {
  it("uses correct constants", () => {
    expect(moviesActions.selectMovie("dummy-movie-id")).toEqual({
      type: "SELECT_MOVIE",
      id: "dummy-movie-id"
    });
  });
});

describe("add movies via redux", () => {
  it("should call add movie service with the correct constants", () => {
    spy(moviesService, "addMovie");
    moviesService.addMovie(movie);
    expect(moviesService.addMovie.called).toEqual(true);
    expect(
      moviesActions.addMovieSucess({
        id: "dummy-id",
        title: "dummy-title",
        description: "dummy-description",
        relaseDtae: "11/10/199",
        image: "dummy-image.png"
      })
    ).toEqual({
      movie: {
        description: "dummy-description",
        id: "dummy-id",
        image: "dummy-image.png",
        relaseDtae: "11/10/199",
        title: "dummy-title"
      },
      type: "ADD_MOVIE"
    });
  });
});
