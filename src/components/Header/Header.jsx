import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import Loader from 'components/Loader';
import { Container, Navbar } from './Header.styled';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin-right: 10px;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: red;
  }
`;

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <Navbar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies" state={{ from: location }}>
          Movies
        </StyledLink>
      </Navbar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Header;
