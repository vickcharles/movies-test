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
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const MovieItem = () => {
  return (
    <ListItem button className="movie-item">
      <ListItemAvatar>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MovieItem;
