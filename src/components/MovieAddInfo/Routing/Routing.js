import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import routePath from "../../../routesPath";

const Cast = lazy(() =>
  import("../../../views/Cast/Cast" /* webpackChunkName:"cast"*/)
);
const Reviews = lazy(() =>
  import("../../../views/Reviews/Reviews" /* webpackChunkName:"reviews"*/)
);

const MovieAddInfoRoute = () => {
  return (
    <Suspense>
      <Switch>
        <Route path={routePath.cast}>
          <Cast />
        </Route>
        <Route path={routePath.reviews}>
          <Reviews />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MovieAddInfoRoute;
