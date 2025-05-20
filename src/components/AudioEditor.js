import React from 'react';
import AudioTrack from './AudioTrack';

export default function AudioEditor({ audioTracks, setAudioTracks }) {

  function addTrack() {
    const newTrack = {
      id: Date.now().toString(),
      name: 'Neue Spur',
      audioFile: null,
      volume: 1,
    };
    setAudioTracks([...audioTracks, newTrack]);
  }

  function updateTrack(updatedTrack) {
    setAudioTracks(audioTracks.map(t => (t.id === updatedTrack.id ? updatedTrack : t)));
  }

  function deleteTrack(id) {
    setAudioTracks(audioTracks.filter(t => t.id !== id));
  }

  return (
    <div className="audio-editor">
      <h4>Audio-Spuren</h4>
      <button onClick={addTrack}>Neue Spur hinzufügen</button>
      {audioTracks.length === 0 && <p>Keine Spuren vorhanden.</p>}
      {audioTracks.map(track => (
        <AudioTrack
          key={track.id}
          track={track}
          onUpdate={updateTrack}
          onDelete={() => deleteTrack(track.id)}
        />
      ))}
    </div>
  );
}
