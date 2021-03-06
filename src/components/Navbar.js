import { Link } from 'react-router-dom';

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <Link to='/' className='btn'>
        Planets
      </Link>
      <Link to='/people' className='btn'>
        People
      </Link>
    </nav>
  );
};

export default Navbar;
