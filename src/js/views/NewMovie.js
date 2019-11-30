import React from "react";
import AddMovieForm from "../components/Movies/AddMovieForm";
import { Grid } from "@material-ui/core";
import SectionTitle from "../components/common/SectionTitle";

const NewMoview = () => {
  return (
    <Grid container>
      <Grid md={6} className="m-auto">
        <SectionTitle text="Add a new Movie" />
        <div className="section mt-xsmall">
          <AddMovieForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default NewMoview;
