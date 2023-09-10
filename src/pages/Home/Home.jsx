import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Services/Api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import styles from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);
  return (
    <div className={styles.homeDiv}>
      <h1 className={styles.titleHpage}>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
