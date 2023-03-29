
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId)
  const [currentFilm, setCurrentFilm] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8d99b39cb91a8ab8040b3ee85cb6e931&language=en-US`
      )
      .then(response => response.data)
      .then(data => {
        if (data === '') {
          return;
        } else {
          const {
            poster_path,
            title,
            release_date,
            vote_average,
            genres,
            overview,
          } = data;
          return setCurrentFilm({
            img: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            title: title,
            genres: genres.map(genre => (
              <span style={{ marginRight: '5px' }} key={genre.name}>
                {genre.name}
              </span>
            )),
            overview: overview,
            score: Math.round(vote_average * 10),
            date: new Date(Date.parse(release_date)).getFullYear(),
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const { img, title, genres, overview, score, date } = currentFilm;

  return (
    <>
      <div style={{ display: 'flex', padding: '15px' }}>
        <div style={{ marginRight: '10px' }}>
          <img src={img} alt={title} width={300} />
        </div>
        <div>
          <h1>
            {title} ({date})
          </h1>
          <h2>User Score {`${score}%`}</h2>

          <h2>Overview</h2>
          <h3 style={{ fontSize: '15px' }}>{overview}</h3>
          <h2>Genres</h2>
          <h3 style={{ fontSize: '20px' }}>{genres}</h3>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
      
    </>
  );
};
export default MovieDetails;
