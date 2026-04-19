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
    <div style={{ padding: '2rem' }}>
      <h2>Events</h2>
      {events.map((event) => (
        <div key={event._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
          <h3>{event.eventName}</h3>
          <p>Category: {event.category}</p>
          <p>{event.description}</p>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>Venue: {event.venue}</p>
          <p>Fee: ₹{event.registrationFee}</p>
          {user?.role === 'student' && (
            <button onClick={() => handleRegister(event._id)}>Register</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Events;
