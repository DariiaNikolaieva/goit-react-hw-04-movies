import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/API";
import CastList from "../../components/CastList/CastList";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then((data) => setCast(data));
  }, [movieId]);

  return <CastList cast={cast} />;
};

export default MovieCast;
