// client/src/pages/EventDetails.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { apiFetch } from '../api/api';
import { ui } from '../styles/ui';

const EventDetails = () => {
  const { client } = useAuth();
  const { eventNumber } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client?.slug || !eventNumber) return;

    const loadEvent = async () => {
      try {
        const data = await apiFetch(
          `/api/${client.slug}/events/${eventNumber}`
        );
        setEvent(data);
      } catch (err) {
        console.error('Failed to load event:', err);
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [client?.slug, eventNumber]);

  if (loading) {
    return <div style={styles.loading}>Loading event…</div>;
  }

  if (!event) {
    return <div style={styles.error}>Event not found.</div>;
  }

  return (
    <div style={ui.page}>
      <h1 style={ui.title}>{event.event_name}</h1>
      <p style={ui.subtitle}>
        Event #{event.event_number} — {client?.name}
      </p>

      <div style={ui.card}>
        <div style={styles.row}>
          <strong>School:</strong> {event.school?.name || '—'}
        </div>

        <div style={styles.row}>
          <strong>Department:</strong> {event.department?.name || '—'}
        </div>

        <div style={styles.row}>
          <strong>Venue:</strong> {event.venue?.name || '—'}
        </div>

        <div style={styles.row}>
          <strong>Start:</strong>{' '}
          {event.start_at ? new Date(event.start_at).toLocaleString() : '—'}
        </div>

        <div style={styles.row}>
          <strong>End:</strong>{' '}
          {event.end_at ? new Date(event.end_at).toLocaleString() : '—'}
        </div>

        <div style={styles.row}>
          <strong>Total Tickets:</strong> {event.total_tickets}
        </div>

        <div style={styles.row}>
          <strong>Published:</strong> {event.published ? 'Yes' : 'No'}
        </div>

        <button
          style={styles.editButton}
          onClick={() =>
            navigate(`/${client.slug}/events/${event.event_number}/edit`)
          }
        >
          Edit Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;

const styles = {
  row: {
    marginBottom: '12px',
    fontSize: '16px',
    color: 'black',
  },
  editButton: {
    marginTop: '20px',
    background: '#3a5a78',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    width: '100%',
  },
  loading: {
    padding: '20px',
    fontSize: '18px',
  },
  error: {
    padding: '20px',
    fontSize: '18px',
    color: 'red',
  },
};
