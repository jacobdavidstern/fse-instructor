// components/MusicControl.jsx
import React, { useEffect, useState, useRef } from 'react';
import MusicDisplay from './MusicDisplay.jsx';

const MusicControl = () => {
  const albumId = '611338';
  const audioRef = useRef(new Audio());
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[currentIndex] || null;

  // Fetch tracks from Express proxy
  useEffect(() => {
    let cancelled = false;
    const proxyUrl = `/api/album?album_id=${albumId}`;

    fetch(proxyUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`Proxy request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log('Proxy response:', data); // verify shape
        console.log('data.tracks exists?', !!data.tracks);
        console.log(
          'first track keys:',
          data.tracks?.[0] ? Object.keys(data.tracks[0]) : 'no tracks'
        );
        if (!cancelled) {
          // Use the normalized shape
          setTracks(data.tracks || []);
        }
      })
      .catch((err) => {
        console.error('Network error:', err);
        if (!cancelled) setTracks([]);
      });

    return () => {
      cancelled = true;
    };
  }, [albumId]);

  // Set duration when metadata loads
  useEffect(() => {
    const audio = audioRef.current;

    // Sync duration and remaining time with audio metadata
    const setMeta = () => {
      if (!isNaN(audio.duration)) {
        setDuration(Math.floor(audio.duration));
        // Seed timeRemaining in case playback already started
        setTimeRemaining(Math.floor(audio.duration - audio.currentTime));
      }
    };

    audio.addEventListener('loadedmetadata', setMeta);
    audio.addEventListener('durationchange', setMeta); // extra safety

    // Trigger immediately if metadata is already loaded (e.g. cached)
    if (!isNaN(audio.duration)) {
      setMeta();
    }

    return () => {
      audio.removeEventListener('loadedmetadata', setMeta);
      audio.removeEventListener('durationchange', setMeta);
    };
  }, [currentTrack]); // Critical: re-run when track changes

  // Countdown remaining time during playback
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      if (!isNaN(audio.duration)) {
        const remaining = Math.max(
          0,
          Math.floor(audio.duration - audio.currentTime)
        );
        setTimeRemaining(remaining);
      }
    };

    // Update immediately in case already playing
    updateTime();

    // Listen for changes
    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, [currentTrack]); // Re-attach whenever the track changes

  // Auto-advance to next track when current ends
  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => handleNext();
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [tracks, currentIndex]);

  // Audio event handling
  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => handleNext();

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [tracks, currentIndex]);

  // Queue next track if advanced while playing
  const queueTrack = (index) => {
    if (!tracks.length) return;
    const audio = audioRef.current;
    audio.pause();
    const track = tracks[index];
    audio.src = track.audio || track.audio_download;
    audio.load(); // forces metadata reload
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((e) => {
        if (e.name !== 'AbortError') console.error('Playback error', e);
      });
  };

  // Toggle play/pause
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

  // Skip to next track
  const handleNext = () => {
    if (!tracks.length) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % tracks.length;
      queueTrack(nextIndex);
      return nextIndex;
    });
  };

  // Skip to previous track
  const handlePrev = () => {
    if (!tracks.length) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev - 1 + tracks.length) % tracks.length;
      queueTrack(nextIndex);
      return nextIndex;
    });
  };

  // Show loading state until tracks are available
  if (!tracks.length) {
    return <p className="text-center mb-0">Loading…</p>;
  }

  // Render music controls and child music display
  return (
    <div>
      {currentTrack && (
        <MusicDisplay
          {...currentTrack}
          timeRemaining={timeRemaining}
          duration={duration}
        />
      )}
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

export default MusicControl;
