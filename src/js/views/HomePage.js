import React from "react";

import { Grid, Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import MoviesList from "../components/Movies/MoviesList";
import SingleImage from "../components/Movies/SingleMovie";
import { useSelector } from "react-redux";

const HomePage = () => {
  const movies = useSelector(state => state.movies.movies);
  const renderWelcome = (
    <div className="align-text-center">
      <h1 className="no-movie-title">Our movies list is empty : (</h1>
      <Typography variant="subtitle1">
        click the button below to add a new movie
      </Typography>
      <Link to="/new-movie">
        <Button variant="contained" color="primary" className="mt-xsmall">
          ADD NEW MOVIE
        </Button>
      </Link>
    </div>
  );
  return (
    <Container>
      {movies.length > 0 ? (
        <div>
          <Grid container>
            <Grid item xs={12} md={3}>
              <MoviesList movies={movies} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container>
                <Grid item xs={12} md={11} className="section">
                  <SingleImage />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        renderWelcome
      )}
    </Container>
  );
};

export default HomePage;
