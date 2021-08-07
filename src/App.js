import React from "react";
import { Route } from "react-router-dom";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage/HomePage";
import NotFoundView from "./views/NotFoundView";

const App = () => {
  return (
    <Container>
      <AppBar />

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route>
        <NotFoundView />
      </Route>
    </Container>
  );
};

export default App;
