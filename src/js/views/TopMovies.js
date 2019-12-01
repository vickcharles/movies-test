import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import PageTitle from "../components/common/PageTitle";
import MoviesList from "../components/Movies/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../actions/movies.actions";

const TopMovies = () => {
  const movies = useSelector(state => state.movies.top5Movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const { getTop5Movies } = moviesActions;
    dispatch(getTop5Movies());
  }, [dispatch]);

  console.log(movies);
  return (
    <Container>
      <PageTitle text="TOP 5 MOVIES" />
      <MoviesList showTitle={false} movies={movies || []} onlyView={true} />
    </Container>
  );
};

export default TopMovies;
