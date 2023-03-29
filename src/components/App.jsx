import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Header from './Header';
import Reviews from './Reviews';
import Home from 'Page/Home';
import MovieDetails from 'Page/MovieDetails';
import Movies from 'Page/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Home</div>} />
        </Route>
      </Routes>
    </>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key=8d99b39cb91a8ab8040b3ee85cb6e931
