import React from "react";

import { List } from "@material-ui/core";

import MovieItem from "./MovieItem";
import "../../../assets/sass/moviesList.sass";
import SectionTitle from "../common/SectionTitle";

const MoviesList = props => {
  return (
    <div className="movie-list-wrapper">
      {props.showTitle && <SectionTitle text="Movies" />}
      <List className="movies-list">
        {(props.movies.length === 0 ? Array.from(new Array(4)) : props.movies).map(movie => (
          <MovieItem movie={movie} action={props.onlyView} />
        ))}
      </List>
    </div>
  );
};

MoviesList.defaultProps = {
  showTitle: true
};

export default MoviesList;
