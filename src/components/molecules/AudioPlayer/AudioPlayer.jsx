import React, { useState } from 'react';

const AudioPlayer = ({ content, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="m-audio-player" style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '24px',
      margin: '30px 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div className="m-audio-player__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Escuchar artículo</span>
          <h4 style={{ margin: '4px 0 0 0', fontSize: '18px', fontWeight: '600' }}>{title}</h4>
        </div>
        <button 
          onClick={togglePlay}
          style={{
            background: '#ff5a5f',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#white',
            fontSize: '20px',
            transition: 'transform 0.2s'
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>
      <div className="m-audio-player__progress-bar" style={{ background: 'rgba(255, 255, 255, 0.1)', height: '4px', borderRadius: '2px', width: '100%', position: 'relative' }}>
        <div style={{ background: '#ff5a5f', height: '100%', width: isPlaying ? '35%' : '0%', borderRadius: '2px', transition: 'width 2s linear' }}></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
