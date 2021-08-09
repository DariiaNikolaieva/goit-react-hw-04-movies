import { BASE_IMAGE_URL } from "../../services/API";

const CastItem = ({ actor }) => {
  return (
    <li>
      <img src={BASE_IMAGE_URL + actor.profile_path} alt={actor.name} />
      <p>{actor.name}</p>
    </li>
  );
};

export default CastItem;
