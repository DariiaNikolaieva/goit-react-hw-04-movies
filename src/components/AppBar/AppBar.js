import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
