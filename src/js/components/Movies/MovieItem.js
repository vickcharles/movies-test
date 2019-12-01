import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../actions/movies.actions";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const { deleteMovie, selectMovie } = moviesActions;
  const selectedMovie = useSelector(state => state.movies.selectedMovie);

  const isMovieSelected = selectedMovie.id === movie.id;

  return (
    <ListItem
      button
      className={`movie-item ${
        isMovieSelected ? "item-primary" : "item-secondary"
      }`}
      onClick={() => dispatch(selectMovie(movie.id))}
    >
      <ListItemAvatar>
        <Avatar src={movie.image} />
      </ListItemAvatar>
      <ListItemText primary={movie.title} secondary={movie.relaseDate} />
      { isMovieSelected && <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteMovie(movie.id))}
        >
          <DeleteIcon className="delete-button"/>
        </IconButton>
      </ListItemSecondaryAction>}
    </ListItem>
  );
};

export default MovieItem;
