import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../movies";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast || []);
      } catch (error) {
        setError(error, "Failed to fetch cast details");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul className={styles.list}>
      {cast.map((actor) => (
        <li key={actor.cast_id} className={styles.imageCard}>
          {actor.profile_path ? (
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
          ) : (
            <img
              className={styles.image}
              src="https://via.placeholder.com/200x300?text=No+Image"
              alt="No profile"
            />
          )}
          <p className={styles.textNameActor}>
            {actor.name} as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
