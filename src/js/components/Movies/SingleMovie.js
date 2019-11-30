import React from "react";
import "../../../assets/sass/singleMovie.sass";
import { Typography, Avatar, Grid } from "@material-ui/core";

const SingleMovie = () => {
  return (
    <Grid class="single-movie">
      <Grid>
        {" "}
        <div class="title">
          <Typography>The Joker</Typography>
        </div>
      </Grid>
      <Grid container className="mt-small">
        <Grid xs="4">
          <Avatar
            className="avatar"
            src="https://i.blogs.es/140a20/joker-trailer/450_1000.jpg"
          />
        </Grid>
        <Grid xs="8">
          <Typography>Description</Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography className="mt-small">Relase Date</Typography>
          <Typography variant="subtitle1">
            relase date
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleMovie;
