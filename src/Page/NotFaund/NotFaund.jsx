import { Link } from 'react-router-dom';
import { Container } from './NotFaund.styled';
import { FcFilmReel, FcHome } from 'react-icons/fc';

const NotFaund = () => {
  return (
    <Container>
      <h3>This page was not found</h3>
      <Link
        style={{
          color: '#081c4b',
          textDecoration: 'none',
          cursor: 'pointer',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
        to={'/'}
      >
        <FcHome style={{ marginRight: '10px' }} size={30}></FcHome>
        Home
      </Link>
      <Link
        style={{
          color: '#081c4b',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        to={'/movies'}
      >
        <FcFilmReel style={{ marginRight: '10px' }} size={30}></FcFilmReel>
        Movie search
      </Link>
    </Container>
  );
};

export default NotFaund;
