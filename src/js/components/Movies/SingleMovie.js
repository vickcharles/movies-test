import React from "react";
import "../../../assets/sass/singleMovie.sass";
import { Typography, Avatar, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const SingleMovie = () => {
  const selectedMovie = useSelector(state => state.movies.selectedMovie);
  return (
    <Grid class="single-movie">
      <Grid>
        {" "}
        <div class="title">
          <Typography>{selectedMovie.title}</Typography>
        </div>
      </Grid>
      <Grid container className="mt-small">
        <Grid xs="4">
          <Avatar
            className="avatar"
            src={selectedMovie.image}
          />
        </Grid>
        <Grid xs="8">
          <Typography>Description</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {selectedMovie.description}
          </Typography>
          <Typography className="mt-small">Relase Date</Typography>
          <Typography variant="subtitle1">
            {selectedMovie.relaseDate}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleMovie;
