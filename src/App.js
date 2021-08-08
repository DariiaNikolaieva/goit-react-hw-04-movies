import React from "react";
import { Route, Switch } from "react-router-dom";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage/HomePage";
import NotFoundView from "./views/NotFoundView";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
