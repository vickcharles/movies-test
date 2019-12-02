import React from "react";

import "../../../assets/sass/moviesList.sass";
import { TextField, Grid, Button, Typography } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUpload from "../ImageUploader/ImageUpload";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { moviesActions } from "../../actions/movies.actions";
import moment from "moment";

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      relaseDate: "",
      image: "",
      react: true,
      errors: {}
    };
  }

  handleChange = event => {
    const { value, name } = event.currentTarget;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleChangeDate = date => {
    this.setState({
      ...this.state,
      relaseDate: date
    });
  };

  validate(values) {
    console.log(values);
    const formErrors = {};
    const { title, description, image, relaseDate } = values;
    if (title === "") {
      formErrors.title = "this field is required";
    }

    if (description === "") {
      formErrors.description = "this field is required";
    }

    if (description.length > 70) {
      formErrors.description = "max text lenght is 70";
    }

    if (image === "") {
      formErrors.image = "please upload a new image";
    }

    if (relaseDate === "Invalid date") {
      formErrors.relaseDate = "select a date";
    }

    return formErrors;
  }

  setImage(image) {
    this.setState({
      ...this.state,
      image: image
    });
  }

  onSaveMovie = () => {
    const movieToAdd = {
      id:
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9),
      title: this.state.title,
      description: this.state.description,
      relaseDate: moment(this.state.relaseDate.toString()).format("MMM Do YY"),
      image: this.state.image
    };

    const formErrors = this.validate(movieToAdd);
    console.log(formErrors);
    this.setState({ errors: formErrors }, () => {
      const errorsArray = Object.values(this.state.errors);
      const isError = errorsArray.some(value => value);
      if (!isError) {
        this.props.addMovie(movieToAdd);
        this.setState({
          redirect: true
        });
      }
    });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id="filled-basic"
                fullWidth={true}
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
                label="Title"
                error={!!this.state.errors.title}
                helperText={this.state.errors.title}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="filled-basic"
                fullWidth={true}
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
                error={!!this.state.errors.description}
                helperText={this.state.errors.description}
                multiline
                label="Description"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <DatePicker
                selected={this.state.relaseDate}
                className="custom-date-picker"
                showPopperArrow={false}
                maxDate={moment().toDate()}
                onChange={this.handleChangeDate}
                placeholderText="Relase date"
              />
              <br />
              {this.state.errors.relaseDate && (
                <Typography
                  style={{
                    color: "#f44336",
                    fontSize: "0.75rem",
                    marginLeft: "16px"
                  }}
                >
                  {this.state.errors.relaseDate}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              <ImageUpload image={image => this.setImage(image)} />
              <br />
              {this.state.errors.image && (
                <Typography
                  style={{
                    color: "#f44336",
                    fontSize: "0.75rem",
                    marginLeft: "16px"
                  }}
                >
                  {this.state.errors.image}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={12} style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.onSaveMovie}
              >
                SAVE MOVIE
              </Button>
            </Grid>
          </Grid>
        </form>
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { addMovie } = moviesActions;

  return {
    addMovie: movie => {
      dispatch(addMovie(movie));
    }
  };
};

export default AddMovieForm = connect(
  () => ({}),
  mapDispatchToProps
)(AddMovieForm);
