import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Reviews from './Reviews';
import Cast from './Cast';
const Home =lazy(()=> import('Page/Home'));
const MovieDetails =lazy(()=> import('Page/MovieDetails'));
const Header =lazy(()=> import('./Header'));
const Movies =lazy(()=> import('Page/Movies'));



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
