import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
