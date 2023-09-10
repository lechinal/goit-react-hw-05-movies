import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';
// import * as api from '../../Services/Api';
// import baseURL from 'Services/Api';

// const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const baseUrl = 'https://image.tmdb.org/t/p/w300/';
const defaultImage = `http://www.suryalaya.org/images/no_image.jpg`;

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.MovieList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.elementHpage}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `${baseUrl + movie.poster_path}`
                  : defaultImage
              }
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

// prop-types

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
