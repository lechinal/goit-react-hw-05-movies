import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/Home/Home';
// import Movies from './pages/Movies/Movies';
import { MoviesDetails } from './pages/MoviesDetails/MoviesDetails';
// import NotFound from './pages/NotFound/NotFound';

import { Cast } from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

// import { MoviesList } from 'components/MoviesList/MoviesList';

// const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
// const MoviesDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
