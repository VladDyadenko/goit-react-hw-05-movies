import { Outlet, NavLink,useLocation  } from 'react-router-dom';
import { Suspense } from 'react';
import styled from "styled-components";
import Loader from 'components/Loader';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;
  font-weight:500;

  &.active {
    color: red;
  }
`;

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies" state={{ from: location }}>Movies</StyledLink>
      </header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};

export default Header;
