import React from "react";
import { Grid, Container } from "@material-ui/core";
import MoviesList from "../components/Movies/MoviesList";
import SingleImage from "../components/Movies/SingleMovie"

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <MoviesList />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid sm={10} className="section">
              <SingleImage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
