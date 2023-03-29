import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        console.log(error);
      });
  }, [movieId]);

  return (
    <ul>
      {casts.map(cast => {
        const { credit_id, profile_path, original_name, character } = cast;

        return (
          <li key={credit_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
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
  );
};

export default Cast;
