import React from "react";

import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import LoaderSpinner from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "home-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details"*/
  )
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page"*/)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName:"not-found"*/)
);

const App = () => {
  return (
    <Container>
      <ToastContainer autoClose={3000} />

      <AppBar />

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
