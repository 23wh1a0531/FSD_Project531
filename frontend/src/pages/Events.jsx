import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await API.get('/events');
      setEvents(data.events);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (eventId) => {
    try {
      await API.post('/registrations', { eventId });
      alert('Registered successfully');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '1rem' }}>Events</h2>
      {events.length === 0 ? (
        <p style={{ color: 'white' }}>No events available</p>
      ) : (
        events.map((event) => (
          <div key={event._id} className="card">
            <h3>{event.eventName}</h3>
            <p><strong>Category:</strong> {event.category}</p>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Fee:</strong> ₹{event.registrationFee}</p>
            {user?.role === 'student' && (
              <button onClick={() => handleRegister(event._id)}>Register</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Events;
