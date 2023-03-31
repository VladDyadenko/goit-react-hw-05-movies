import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Films from 'components/Films';
import { Container, Title } from './Home.styled';

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
    <Container>
      <Title>Trending today</Title>
      {arrFilms.length > 0 && <Films arrFilms={arrFilms} />}
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default Home;
