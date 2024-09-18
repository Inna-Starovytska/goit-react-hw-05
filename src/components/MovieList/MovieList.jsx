import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies to display</p>;
  }
  const location = useLocation();
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            className={styles.movieListLink}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
