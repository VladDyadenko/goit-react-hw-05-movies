import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillBackward } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState, Suspense } from 'react';
import { Link, useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';


const MovieDetails = () => {
  const { movieId } = useParams();

  const [currentFilm, setCurrentFilm] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const backClick = location?.state?.from ?? '/';
  const onGoBack = (() =>navigate(backClick) );
 
  
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
        toast.error(`${error.message}`);
      });
  }, [movieId]);
  

  const { img, title, genres, overview, score, date } = currentFilm;

  return (
    <>
    <button style={{width:'100px', display:'flex'}} type='button' onClick={onGoBack}>
    <AiFillBackward style={{marginRight:'5px'}} size={16}></AiFillBackward>
      Go back
    </button>
     
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
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
};
MovieDetails.propTypes = {
  currentFilm: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};
export default MovieDetails;
