import React, { useState } from 'react';

const ChapterList = ({ project, onBack, onAddChapter }) => {
  const [newChapterName, setNewChapterName] = useState('');

  const handleAdd = () => {
    onAddChapter(newChapterName);
    setNewChapterName('');
  };

  return (
    <div>
      <button onClick={onBack}>← Zurück</button>
      <h2>Projekt: {project.name}</h2>
      <input
        type="text"
        value={newChapterName}
        onChange={(e) => setNewChapterName(e.target.value)}
        placeholder="Neues Kapitel"
      />
      <button onClick={handleAdd}>Kapitel hinzufügen</button>

      <h3>Kapitel</h3>
      {project.chapters.length === 0 ? (
        <p>Noch keine Kapitel.</p>
      ) : (
        <ul>
          {project.chapters.map((chapter, index) => (
            <li key={index}>{chapter}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChapterList;
