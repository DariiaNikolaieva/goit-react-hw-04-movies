import CastItem from "../CastItem/CastItem";
import styles from "./CastList.module.css";

const CastList = ({ cast }) => {
  return (
    <ul className={styles.list}>
      {cast.map((actor) => (
        <CastItem actor={actor} key={actor.id} />
      ))}
    </ul>
  );
};

export default CastList;
