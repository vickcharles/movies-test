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
import Skeleton from "@material-ui/lab/Skeleton";

const MovieItem = ({ movie, action }) => {
  const dispatch = useDispatch();
  const { deleteMovie, selectMovie } = moviesActions;
  const selectedMovie = useSelector(state => state.movies.selectedMovie);
  const isMovieSelected = !action && selectedMovie.id === movie.id;

  const avatarStyle = action
    ? { width: "100px", height: "100px", marginRight: "20px" }
    : {};

  const onSelectMovie = id => {
    if (!action) {
      dispatch(selectMovie(id));
    }
  };

  return (
    <ListItem
      button={!action}
      className={`movie-item ${
        isMovieSelected ? "item-primary" : "item-secondary"
      }`}
      onClick={() => onSelectMovie(movie.id)}
    >
      <ListItemAvatar className="mr-small">
        {movie ? (
          <Avatar src={movie.image} style={avatarStyle} />
        ) : (
          <Skeleton variant="circle" width={100} height={100} />
        )}
      </ListItemAvatar>
      {!movie ? (
        <ListItemText
          className={`item-title ${action ? "large-title" : ""}`}
          primary={ <Skeleton variant="text" width={100} height={20} />}
          secondary={ <Skeleton variant="text" width={100} height={20} />}
        />
      ) : (
        <ListItemText
          className={`item-title ${action ? "large-title" : ""}`}
          primary={movie.title}
          secondary={movie.relaseDate || movie.release}
        />
      )}
      {isMovieSelected && !action && (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(deleteMovie(movie.id))}
          >
            <DeleteIcon className="delete-button" />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default MovieItem;
