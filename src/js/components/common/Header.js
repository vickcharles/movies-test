import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../../assets/sass/header.sass";

const Header = () => {
  return (
    <AppBar position="fixed" className="header">
      <Container>
        <Toolbar className="tool-bar">
          <Typography variant="h6" className="title">
            The Movies App
          </Typography>
          <div className="nav">
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/new-movie">
              <Button color="inherit">Add Movie</Button>
            </Link>
            <Link to="/top-5">
              {" "}
              <Button color="inherit">Top 5</Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
