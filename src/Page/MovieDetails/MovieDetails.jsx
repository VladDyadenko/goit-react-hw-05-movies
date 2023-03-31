import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillBackward } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import {
  Btn,
  Container,
  Box,
  CardFilm,
  TitleMovie,
  BoxBtn,
  BtnInfo,
  MovieDescr,
  MovieInfo,
} from './MovieDetails.styled';
import NotFaund from 'Page/NotFaund';

const MovieDetails = () => {
  const [currentFilm, setCurrentFilm] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backClick = location?.state?.from || '/';
  const onGoBack = () => navigate(location?.state?.from ?? '/');

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
      {' '}
      {currentFilm ? (
        <Container>
          <Btn type="button" onClick={onGoBack}>
            <AiFillBackward
              style={{ marginRight: '5px' }}
              size={16}
            ></AiFillBackward>
            Go back
          </Btn>

          <Box>
            <CardFilm src={img} alt={title} />
            <div>
              <TitleMovie>
                {title} ({date})
              </TitleMovie>
              <MovieDescr>User Score {`${score}%`}</MovieDescr>
              <MovieDescr>Overview</MovieDescr>
              <MovieInfo>{overview}</MovieInfo>
              <MovieDescr>Genres</MovieDescr>
              <MovieInfo>{genres}</MovieInfo>
            </div>
          </Box>
          <h2>Additional information</h2>
          <BoxBtn>
            <li>
              <BtnInfo type="button">
                <Link
                  to="cast"
                  state={{ from: backClick }}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '5px 50px',
                    cursor: 'pointer',
                  }}
                >
                  Cast
                </Link>
              </BtnInfo>
            </li>
            <li>
              <BtnInfo type="button">
                <Link
                  to="reviews"
                  state={{ from: backClick }}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '5px 40px',
                    cursor: 'pointer',
                  }}
                >
                  Reviews
                </Link>
              </BtnInfo>
            </li>
          </BoxBtn>
          <Suspense>
            <Outlet />
          </Suspense>
          <ToastContainer autoClose={2000} />
        </Container>
      ) : (
        <NotFaund />
      )}
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
