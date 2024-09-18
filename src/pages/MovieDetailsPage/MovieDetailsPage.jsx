import { useRef, useEffect, useState, Suspense } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { getMovieDetails } from "../../movies";
import clsx from "clsx";
import style from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message || "Error fetching data");
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
    return <p>Error: {error}</p>;
  }

  if (!movie) {
    return <p>No movie details available</p>;
  }

  return (
    <div className={style.movieDetailWrap}>
      <Link to={backLinkRef.current} className={style.btn}>
        <GoArrowLeft className={style.arrow} />
        Go back
      </Link>

      <h1 className={style.title}>{movie.title}</h1>
      <div className={style.poster}>
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <p className={style.textOverview}>{movie.overview}</p>
      </div>
      <div className={style.castReviewsWrap}>
        <NavLink
          to="cast"
          className={(props) => {
            return clsx(style.link, props.isActive && style.active);
          }}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={(props) => {
            return clsx(style.link, props.isActive && style.active);
          }}
        >
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<p className={style.textWarning}>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
