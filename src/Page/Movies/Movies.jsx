import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import Films from 'components/Films';
import { BoxMovie, BtnForm } from './Movies.styled';

const Movies = () => {
  const [arrFilms, setArrFilms] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const movieName = searchParams.get('queryMovie') ?? '';
  const [queryMovie, setQueryMovie] = useState(() => movieName);

  useEffect(() => {
    if (queryMovie === '') {
      return;
    } else
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=8d99b39cb91a8ab8040b3ee85cb6e931&language=en-US&query=${queryMovie}&page=1&include_adult=false`
        )

        .then(data => {
          if (data.data.results.length === 0) {
            toast.warning('No movies found for your search!');
          } else setArrFilms(data.data.results);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
  }, [queryMovie]);

  return (
    <BoxMovie>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQueryMovie(movieName);
        }}
      >
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={movieName}
            onChange={e => {
              setSearchParams({ queryMovie: e.target.value });
            }}
          />
        </label>
        <BtnForm type="submit">Search</BtnForm>
      </form>
      {arrFilms.length > 0 && <Films arrFilms={arrFilms} />}
      <ToastContainer autoClose={3000} />
    </BoxMovie>
  );
};
export default Movies;
