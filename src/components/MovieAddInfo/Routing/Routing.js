import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const Cast = lazy(() =>
  import("../../../views/Cast/Cast" /* webpackChunkName:"cast"*/)
);
const Reviews = lazy(() =>
  import("../../../views/Reviews/Reviews" /* webpackChunkName:"reviews"*/)
);

const MovieAddInfoRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Suspense>
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MovieAddInfoRoute;
