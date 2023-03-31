import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, List } from './Films.styled';
import defalteImg from '../../Uttils/img/defalteImg.jpg';

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  margin-right: 10px;
  font-weight: 500;
  font-size: 25px;
  display: flex;
  align-items: center;
  img {
    margin-right: 20px;
    display: block;
    :hover {
      transform: scale(1.5);
    }
  }

  &:hover {
    color: #7f1f58;
  }
`;

const Films = ({ arrFilms }) => {
  const location = useLocation();

  return (
    <Box>
      {arrFilms?.map(({ id, title, backdrop_path }) => {
        return (
          <List key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : defalteImg
                }
                alt={title}
                width={80}
              />
              {title}
            </StyledLink>
          </List>
        );
      })}
    </Box>
  );
};
Films.propTypes = {
  arrFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Films;
