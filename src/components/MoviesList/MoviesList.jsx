import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';
// import * as api from '../../Services/Api';
// import baseURL from 'Services/Api';

// const baseUrl = 'https://image.tmdb.org/t/p/w300/';

const baseUrl = 'https://image.tmdb.org/t/p/w300/';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.MovieList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.elementHpage}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`${baseUrl + movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
            {/* {movie.title || movie.name} */}
          </Link>
        </li>
      ))}
    </ul>
  );
};
