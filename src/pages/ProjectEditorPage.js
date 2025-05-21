import React, { useState } from 'react';
import { db } from '../firebase'; // Firebase Firestore
import { collection, addDoc } from 'firebase/firestore';

function ProjectEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      await addDoc(collection(db, 'projects'), {
        title,
        content,
        createdAt: new Date(),
      });
      setTitle('');
      setContent('');
      alert('Projekt gespeichert!');
    } catch (e) {
      console.error('Fehler beim Speichern des Projekts: ', e);
    }
  };

  return (
    <div>
      <h2>Neues Projekt erstellen</h2>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Inhalt"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Speichern</button>
    </div>
  );
}

export default ProjectEditor;
