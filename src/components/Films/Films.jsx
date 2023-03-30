import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Films = ({ arrFilms }) => {
  const location = useLocation();

  return (
    <ul>
      {arrFilms.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
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
