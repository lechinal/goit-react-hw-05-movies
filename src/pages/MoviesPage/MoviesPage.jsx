import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as api from 'api/api';
import { Searchbar } from '../../components/Searchbar/Searchbar';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query) {
      api.fetchMovieDetails(query).then(movies => setMovies(movies));
    }
  }, [searchParams]);

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MoviesPage;
