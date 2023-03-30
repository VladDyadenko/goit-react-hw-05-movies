import { Outlet, NavLink,useLocation  } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';


const Header = () => {
  const location = useLocation();
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies" state={{ from: location }}>Movies</NavLink>
      </header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};

export default Header;
