import React, { useEffect, useState } from 'react';
import styles from '../../pages/MoviesDetails/MoviesDetails.module.css';
import {
  useParams,
  useLocation,
  Outlet,
  useNavigate,
  NavLink,
} from 'react-router-dom';

import { getMovieById, getUserScore, getGenresById } from 'Services/Api';
import { GoBackButton } from 'components/GoBack/GoBack';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

// const {
//   name,
//   title,
//   genres,
//   poster_path,
//   vote_average,
//   overview,
//   release_date,
// } = movie;

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [score, setScore] = useState(null);
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    Promise.all([
      getMovieById(movieId),
      getUserScore(movieId),
      getGenresById(movieId),
    ]).then(([movieData, scoreData, genresData]) => {
      setMovie(movieData);
      setScore(scoreData);
      setGenres(genresData.genres);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <GoBackButton onClick={handleGoBack} />
      <section className={styles.moviesDetails}>
        <div className={styles.divTotal}>
          <div className={styles.leftDiv}>
            <img
              className={styles.imageMovies}
              src={`${baseUrl + movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={styles.rightDiv}>
            <h1 className={styles.rightDivMovieTitle}>{movie.title}</h1>
            <p className={styles.UserScore}> User Score: {score}%</p>
            <h3 className={styles.overviewTitle}>Overview</h3>
            <p className={styles.overviewDetails}>{movie.overview}</p>
            <h3 className={styles.genresTitle}>Genres</h3>

            <ul className={styles.genresList}>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.CastReviews}>
        <NavLink
          to={`/movies/${movieId}/cast`}
          state={location.state}
          className={styles.navLink}
        >
          Cast
        </NavLink>
        <NavLink
          to={`/movies/${movieId}/reviews`}
          state={location.state}
          className={styles.navLink}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
