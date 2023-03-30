import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import defalteImg from '../../Uttils/img/defalteImg.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8d99b39cb91a8ab8040b3ee85cb6e931&language=en-US`
      )

      .then(data => setCasts(data.data.cast))
      .catch(error => {
        toast.error(`${error.message}`);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {casts.map(cast => {
          const { credit_id, profile_path, original_name, character } = cast;

          return (
            <li key={credit_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defalteImg
                }
                alt={original_name}
                width={100}
              />
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
      <ToastContainer autoClose={2000} />
    </>
  );
};
Cast.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.string,
      profile_path: PropTypes.string,
      original_name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
export default Cast;
