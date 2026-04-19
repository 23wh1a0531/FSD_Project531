import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, {user?.name}</h2>
      <p>Role: {user?.role}</p>
      <p>Department: {user?.department}</p>
      <p>Year: {user?.year}</p>
    </div>
  );
};

export default Dashboard;
