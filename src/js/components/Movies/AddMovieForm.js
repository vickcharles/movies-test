import React from "react";

import "../../../assets/sass/moviesList.sass";
import { TextField, Grid, Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMovieForm = () => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <TextField
              id="filled-basic"
              fullWidth={true}
              label="Title"
              variant="filled"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="filled-basic"
              fullWidth={true}
              multiline
              label="Description"
              variant="filled"
            />
          </Grid>
          <Grid item md={12}>
            <DatePicker
              selected={new Date()}
              className="custom-date-picker"
              showPopperArrow={false}
              placeholderText="Relase date"
            />
          </Grid>
          <Grid item md={12} style={{ textAlign: "right" }}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddMovieForm;
