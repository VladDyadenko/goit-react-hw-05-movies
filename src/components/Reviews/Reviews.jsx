import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Box, ContainerRevie, ContantRevie } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8d99b39cb91a8ab8040b3ee85cb6e931&language=en-US&page=1`
      )
      .then(data => {
        setReviews(data.data.results);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });
  }, [movieId]);

  return (
    <Box>
      {reviews.length > 0 ? (
        <ContainerRevie>
          {reviews.map(review => {
            const { author, content, id } = review;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <ContantRevie>{content}</ContantRevie>
              </li>
            );
          })}
        </ContainerRevie>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      <ToastContainer autoClose={2000} />
    </Box>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
export default Reviews;
