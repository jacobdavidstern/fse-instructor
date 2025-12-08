// components/AudioLogic.jsx
import React, { useEffect, useState, useRef } from 'react';
import MusicInfo from './MusicInfo.jsx';

const clientId = import.meta.env.VITE_JAMENDO_CLIENT_ID || '709fa152';
const albumId = '611338';

const AudioLogic = () => {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&album_id=${albumId}&order=id_desc`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('Jamendo response:', data);
        setTracks(data.results || []);
      })
      .catch((err) => {
        console.error('Jamendo fetch error', err);
      });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => handleNext();

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
      // don’t auto‑pause here, let user control playback
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracks, currentIndex]);

  // ✅ Centralized helper
  const queueTrack = (index) => {
    if (!tracks.length) return;
    const audio = audioRef.current;
    audio.pause(); // stop current track cleanly
    const track = tracks[index];
    audio.src = track.audio || track.audio_download;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((e) => {
        if (e.name !== 'AbortError') {
          console.error('Playback error', e);
        }
      });
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!tracks.length) return;

    if (audio.paused) {
      if (!audio.src) {
        queueTrack(currentIndex);
      } else {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((e) => {
            if (e.name !== 'AbortError') console.error('Playback error', e);
          });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (!tracks.length) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % tracks.length;
      queueTrack(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    if (!tracks.length) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev - 1 + tracks.length) % tracks.length;
      queueTrack(nextIndex);
      return nextIndex;
    });
  };

  const currentTrack = tracks[currentIndex];

  if (!tracks.length) {
    return <p className="text-center mb-0">Loading…</p>;
  }

  return (
    <div>
      {currentTrack && <MusicInfo {...currentTrack} />}

      <div className="d-flex justify-content-center gap-3 mt-3">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-backward-step"></i>
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePlayPause}
        >
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleNext}
        >
          <i className="fa-solid fa-forward-step"></i>
        </button>
      </div>
    </div>
  );
};

export default AudioLogic;
