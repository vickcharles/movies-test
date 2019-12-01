import React from "react";

import "../../../assets/sass/moviesList.sass";
import { TextField, Grid, Button } from "@material-ui/core";
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
      name: "",
      description: "",
      relaseDate: "",
      image: "",
      react: true
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

  setImage(image) {
    this.setState({
      ...this.state,
      image: image
    });
  }

  onSaveMovie = () => {
    const movieToAdd = {
      id: '_' + Math.random().toString(36).substr(2, 9),
      title: this.state.title,
      description: this.state.description,
      relaseDate: moment(this.state.relaseDate.toString()).format("MMM Do YY"),
      image: this.state.image
    };
    this.props.addMovie(movieToAdd);
    this.setState({
      redirect: true
    });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                id="filled-basic"
                fullWidth={true}
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
                label="Title"
                variant="filled"
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="filled-basic"
                fullWidth={true}
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
                multiline
                label="Description"
                variant="filled"
              />
            </Grid>
            <Grid item md={12}>
              <DatePicker
                selected={this.state.relaseDate}
                className="custom-date-picker"
                showPopperArrow={false}
                onChange={this.handleChangeDate}
                placeholderText="Relase date"
              />
            </Grid>
            <Grid item md={12}>
              <ImageUpload image={image => this.setImage(image)} />
            </Grid>
            <Grid item md={12} style={{ textAlign: "right" }}>
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
