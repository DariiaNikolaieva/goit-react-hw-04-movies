import { BASE_IMAGE_URL } from "../../services/API";

const CastItem = ({ actor }) => {
  return (
    <li>
      <img
        src={`${BASE_IMAGE_URL}${actor.profile_path}`}
        alt={actor.name}
        width="100"
      />
      <p>{actor.name}</p>
      <p>Character: </p>
      <p>{actor.character}</p>
    </li>
  );
};

export default CastItem;
