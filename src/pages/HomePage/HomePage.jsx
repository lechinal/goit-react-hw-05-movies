import { useEffect, useState } from 'react';
import * as api from 'api/api';
import { Link } from 'react-router-dom';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchTrendingMovies().then(movies => setMovies(movies));
  }, []);
  if (!movies) {
    return;
  }

  return (
    <div>
      <h1>Trending today</h1>

      <ul className="hpage">
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/MoviesPage/${movie.id}`}>
              {/* <h2>{movie.title}</h2> */}
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>

            {/* <p>{movie.overview}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
