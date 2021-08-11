import { useRouteMatch, NavLink } from "react-router-dom";
import MovieAddInfoRoute from "./Routing/Routing";

import styles from "./MovieAddInfo.module.css";

const MovieAddInfo = () => {
  const { url } = useRouteMatch();
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
      <MovieAddInfoRoute />
    </div>
  );
};

export default MovieAddInfo;
