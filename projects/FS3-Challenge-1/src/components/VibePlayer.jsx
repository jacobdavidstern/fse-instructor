// components/VibePlayer.jsx
import React from 'react';
import AudioLogic from './AudioLogic.jsx';

const VibePlayer = () => {
  return (
    <div
      className="bg-light shadow-lg p-3"
      style={{
        width: '20rem',
        maxWidth: '100%',
        minHeight: '20rem',
        borderRadius: '0.25rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <i className="fa-solid fa-music"></i>
        <h2 className="h4 ms-3">VibePlayer | Abum</h2>
      </div>

      <div className="mt-3">
        <AudioLogic />
      </div>
    </div>
  );
};

export default VibePlayer;
