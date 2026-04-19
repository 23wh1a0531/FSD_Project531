import { useState, useEffect } from 'react';
import API from '../services/api';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const { data } = await API.get('/announcements');
      setAnnouncements(data.announcements);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '1rem' }}>Announcements</h2>
      {announcements.length === 0 ? (
        <p style={{ color: 'white' }}>No announcements available</p>
      ) : (
        announcements.map((announcement) => (
          <div key={announcement._id} className="card">
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <small style={{ color: '#718096' }}>
              {new Date(announcement.createdAt).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default Announcements;
