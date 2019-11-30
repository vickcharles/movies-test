import React from "react";

import { List } from "@material-ui/core";

import MovieItem from "./MovieItem";
import "../../../assets/sass/moviesList.sass";
import SectionTitle from "../common/SectionTitle";

const MoviesList = () => {
  return (
    <div className="movie-list-wrapper">
      <SectionTitle text="Movies" />
      <List className="movies-list">
        {[1, 2, 4, 5, 6, 7, 8, 9, 8, 9, 10].map(() => (
          <MovieItem />
        ))}
      </List>
    </div>
  );
};

export default MoviesList;
