// components/MusicDisplay.jsx
import React from 'react';

// Helper to format seconds as M:SS
function formatDuration(seconds) {
  const secsNum = Number(seconds) || 0;
  const mins = Math.floor(secsNum / 60);
  const secs = secsNum % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

const MusicDisplay = ({
  name,
  artist_name,
  album_name,
  duration,
  image,
  timeRemaining,
}) => {
  const safeTitle = name || 'Loading…';
  const safeArtist = artist_name || 'Unknown Artist';
  const safeAlbum = album_name || 'Unknown Album';
  const safeImage = image || 'https://placehold.co/300x300?text=Album+Cover';

  // Render music display with remaining time
  return (
    <div className="text-center">
      <img
        src={safeImage}
        alt={`${safeTitle} album art`}
        className="img-fluid mb-3"
      />
      <h1 className="h4 mb-2">{safeTitle}</h1>
      <h2 className="h6 mb-1 text-muted">{safeArtist}</h2>
      <h3 className="h6 mb-2">{safeAlbum}</h3>
      <p className="mb-0">
        {duration
          ? `${formatDuration(timeRemaining)} | ${formatDuration(duration)}`
          : '0:00 | 0:00'}
      </p>
    </div>
  );
};

export default MusicDisplay;
