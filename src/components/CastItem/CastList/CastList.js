import CastItem from "../CastItem";

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map((actor) => (
        <CastItem actor={actor} key={actor.id} />
      ))}
    </ul>
  );
};

export default CastList;
