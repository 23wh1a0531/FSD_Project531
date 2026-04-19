import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
      {user ? (
        <>
          <Link to="/dashboard" style={{ color: '#fff', marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/events" style={{ color: '#fff', marginRight: '1rem' }}>Events</Link>
          <Link to="/announcements" style={{ color: '#fff', marginRight: '1rem' }}>Announcements</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={{ color: '#fff' }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
