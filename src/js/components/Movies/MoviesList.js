import React from "react";

import { List } from "@material-ui/core";

import MovieItem from "./MovieItem";
import "../../../assets/sass/moviesList.sass";
import SectionTitle from "../common/SectionTitle";
import { useSelector } from "react-redux";

const MoviesList = () => {
  const movies = useSelector(state => state.movies.movies);
  return (
    <div className="movie-list-wrapper">
      <SectionTitle text="Movies" />
      <List className="movies-list">
        {movies.map(movie => (
          <MovieItem movie={movie} />
        ))}
      </List>
    </div>
  );
};

export default MoviesList;
