import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Films from 'components/Films';
import { useEffect, useState } from 'react';

const Home = () => {
  const [arrFilms, setArrFilms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `
https://api.themoviedb.org/3/trending/movie/day?api_key=8d99b39cb91a8ab8040b3ee85cb6e931`
      )
      .then(response => response.data)
      .then(data => {
        setArrFilms(data.results);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {arrFilms.length > 0 && <Films arrFilms={arrFilms} />}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Home;
