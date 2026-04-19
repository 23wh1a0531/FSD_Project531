import { useState, useEffect } from 'react';
import API from '../services/api';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  
  const [eventData, setEventData] = useState({
    eventName: '',
    category: 'Technical',
    description: '',
    date: '',
    venue: '',
    registrationFee: 0
  });

  const [announcementData, setAnnouncementData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await API.get('/events');
      setEvents(data.events);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const { data } = await API.get('/announcements');
      setAnnouncements(data.announcements);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/events', eventData);
      alert('Event created successfully!');
      setShowEventForm(false);
      setEventData({ eventName: '', category: 'Technical', description: '', date: '', venue: '', registrationFee: 0 });
      fetchEvents();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to create event');
    }
  };

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/announcements', announcementData);
      alert('Announcement created successfully!');
      setShowAnnouncementForm(false);
      setAnnouncementData({ title: '', content: '' });
      fetchAnnouncements();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to create announcement');
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await API.delete(`/events/${id}`);
        alert('Event deleted successfully!');
        fetchEvents();
      } catch (error) {
        alert('Failed to delete event');
      }
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        await API.delete(`/announcements/${id}`);
        alert('Announcement deleted successfully!');
        fetchAnnouncements();
      } catch (error) {
        alert('Failed to delete announcement');
      }
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>Admin Dashboard</h2>

      {/* Events Section */}
      <div className="dashboard-card" style={{ marginBottom: '2rem' }}>
        <h3>Manage Events</h3>
        <button onClick={() => setShowEventForm(!showEventForm)} style={{ marginBottom: '1rem' }}>
          {showEventForm ? 'Cancel' : 'Create New Event'}
        </button>

        {showEventForm && (
          <form onSubmit={handleEventSubmit} style={{ marginBottom: '2rem', padding: '1rem', background: '#f7fafc', borderRadius: '8px' }}>
            <input
              placeholder="Event Name"
              value={eventData.eventName}
              onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })}
              required
            />
            <select
              value={eventData.category}
              onChange={(e) => setEventData({ ...eventData, category: e.target.value })}
            >
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
            </select>
            <textarea
              placeholder="Description"
              value={eventData.description}
              onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
              rows="3"
              style={{ padding: '0.75rem', border: '1px solid #cbd5e0', borderRadius: '4px', fontSize: '1rem' }}
              required
            />
            <input
              type="date"
              value={eventData.date}
              onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
              required
            />
            <input
              placeholder="Venue"
              value={eventData.venue}
              onChange={(e) => setEventData({ ...eventData, venue: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Registration Fee"
              value={eventData.registrationFee}
              onChange={(e) => setEventData({ ...eventData, registrationFee: e.target.value })}
              required
            />
            <button type="submit">Create Event</button>
          </form>
        )}

        <h4>Existing Events ({events.length})</h4>
        {events.map((event) => (
          <div key={event._id} style={{ border: '1px solid #e2e8f0', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
            <h4>{event.eventName}</h4>
            <p><strong>Category:</strong> {event.category}</p>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Fee:</strong> ₹{event.registrationFee}</p>
            <button onClick={() => handleDeleteEvent(event._id)} style={{ background: '#e53e3e' }}>
              Delete Event
            </button>
          </div>
        ))}
      </div>

      {/* Announcements Section */}
      <div className="dashboard-card">
        <h3>Manage Announcements</h3>
        <button onClick={() => setShowAnnouncementForm(!showAnnouncementForm)} style={{ marginBottom: '1rem' }}>
          {showAnnouncementForm ? 'Cancel' : 'Create New Announcement'}
        </button>

        {showAnnouncementForm && (
          <form onSubmit={handleAnnouncementSubmit} style={{ marginBottom: '2rem', padding: '1rem', background: '#f7fafc', borderRadius: '8px' }}>
            <input
              placeholder="Announcement Title"
              value={announcementData.title}
              onChange={(e) => setAnnouncementData({ ...announcementData, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Announcement Content"
              value={announcementData.content}
              onChange={(e) => setAnnouncementData({ ...announcementData, content: e.target.value })}
              rows="4"
              style={{ padding: '0.75rem', border: '1px solid #cbd5e0', borderRadius: '4px', fontSize: '1rem' }}
              required
            />
            <button type="submit">Create Announcement</button>
          </form>
        )}

        <h4>Existing Announcements ({announcements.length})</h4>
        {announcements.map((announcement) => (
          <div key={announcement._id} style={{ border: '1px solid #e2e8f0', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
            <h4>{announcement.title}</h4>
            <p>{announcement.content}</p>
            <small style={{ color: '#718096' }}>
              {new Date(announcement.createdAt).toLocaleString()}
            </small>
            <br />
            <button onClick={() => handleDeleteAnnouncement(announcement._id)} style={{ background: '#e53e3e', marginTop: '0.5rem' }}>
              Delete Announcement
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
