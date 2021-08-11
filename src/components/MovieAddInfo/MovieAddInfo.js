import { lazy, Suspense } from "react";
import { useRouteMatch, NavLink, Route, Switch } from "react-router-dom";

import styles from "./MovieAddInfo.module.css";

const Cast = lazy(() =>
  import("../../views/Cast/Cast" /* webpackChunkName:"cast"*/)
);
const Reviews = lazy(() =>
  import("../../views/Reviews/Reviews" /* webpackChunkName:"reviews"*/)
);

const MovieAddInfo = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <p className={styles.add_title}>Additional Information</p>
      <nav>
        <NavLink className={styles.link} to={`${url}/cast`}>
          Cast
        </NavLink>
        <NavLink className={styles.link} to={`${url}/reviews`}>
          Reviews
        </NavLink>
      </nav>
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
    </div>
  );
};

export default MovieAddInfo;
