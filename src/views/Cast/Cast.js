import { useState, useEffect } from "react";
import { getMovieCredits, BASE_IMAGE_URL } from "../../services/API";
import { useParams } from "react-router-dom";
import CastList from "../../components/CastItem/CastList/CastList";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then((data) => setCast(data));
  }, [movieId]);

  return <CastList cast={cast} />;
};

export default MovieCast;
