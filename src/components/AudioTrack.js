import React, { useRef } from 'react';

export default function AudioTrack({ track, onUpdate, onDelete }) {
  const inputRef = useRef(null);

  function onFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onUpdate({ ...track, audioFile: url, name: file.name });
  }

  function onVolumeChange(e) {
    onUpdate({ ...track, volume: parseFloat(e.target.value) });
  }

  return (
    <div className="audio-track">
      <input type="file" accept="audio/*" ref={inputRef} onChange={onFileChange} />
      <span>{track.name}</span>
      {track.audioFile && (
        <audio controls src={track.audioFile} style={{ verticalAlign: 'middle' }} />
      )}
      <label>
        Lautstärke:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={track.volume}
          onChange={onVolumeChange}
        />
      </label>
      <button onClick={onDelete}>Löschen</button>
    </div>
  );
}
