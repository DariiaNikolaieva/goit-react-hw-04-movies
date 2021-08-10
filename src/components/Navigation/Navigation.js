import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <div className={styles.Navigation__container}>
    <nav className={styles.Navigation}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
