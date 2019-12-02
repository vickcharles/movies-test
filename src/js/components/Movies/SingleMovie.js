import React from "react";
import "../../../assets/sass/singleMovie.sass";
import { Typography, Avatar, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const SingleMovie = () => {
  const selectedMovie = useSelector(state => state.movies.selectedMovie) || {}
  return (
    <div className="single-movie">
      <div>
        {" "}
        <div className="title">
          <Typography>{selectedMovie.title}</Typography>
        </div>
      </div>
      <Grid container className="mt-small">
        <Grid item xs={12} md={4}>
          <Avatar
            className="avatar"
            src={selectedMovie.image}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography>Description</Typography>
          <Typography paragraph={true} variant="subtitle1" gutterBottom>
            {selectedMovie.description}
          </Typography>
          <Typography className="mt-small">Relase Date</Typography>
          <Typography variant="subtitle1">
            {selectedMovie.relaseDate}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleMovie;
