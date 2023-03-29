import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';


const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};

export default Header;
