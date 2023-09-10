import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMoviesByQuery } from 'Services/Api';
import styles from '../../pages/Movies/Movies.module.css';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }
    setSearchParams({ query });
    navigate(`/movies?query=${encodeURIComponent(query)}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <button
          className={styles.backBtn}
          type="button"
          onClick={handleBackClick}
        >
          <MdOutlineKeyboardBackspace />
        </button>
        <input
          className={styles.searchInput}
          type="text"
          // name="movie"
          placeholder="Search for movies..."
          onChange={handleChange}
          value={query}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.searchBtn} type="submit">
          <GoSearch />
        </button>
      </form>

      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
