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
    <div style={{ padding: '2rem' }}>
      <h2>Announcements</h2>
      {announcements.map((announcement) => (
        <div key={announcement._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
          <h3>{announcement.title}</h3>
          <p>{announcement.content}</p>
          <small>{new Date(announcement.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
