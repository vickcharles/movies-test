import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./js/components/common/Header";
import "./index.sass";
import HomePage from "./js/views/HomePage";
import NewMoview from "./js/views/NewMovie";
import TopMovies from "./js/views/TopMovies";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/new-movie" component={NewMoview} />
          <Route exact path="/top-5" component={TopMovies} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
