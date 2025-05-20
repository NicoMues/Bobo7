// ProjectEditor.js
import React, { useState, useEffect } from 'react';
import ChapterEditor from './ChapterEditor';

export default function ProjectEditor({ project, onClose, onSaveProject }) {
  const [chapters, setChapters] = useState(project.chapters || []);
  const [currentChapterId, setCurrentChapterId] = useState(chapters.length ? chapters[0].id : null);
  const [projectName, setProjectName] = useState(project.name);

  useEffect(() => {
    if (chapters.length && !currentChapterId) setCurrentChapterId(chapters[0].id);
  }, [chapters, currentChapterId]);

  useEffect(() => {
    // Wenn project.chapters sich ändert, update lokal
    setChapters(project.chapters || []);
  }, [project.chapters]);

  function saveProject(updatedChapters) {
    setChapters(updatedChapters);
    if (onSaveProject) {
      onSaveProject({ ...project, name: projectName, chapters: updatedChapters });
    }
  }

  function addChapter() {
    const newChapter = { id: Date.now().toString(), title: 'Neues Kapitel', text: '' };
    const updated = [...chapters, newChapter];
    saveProject(updated);
    setCurrentChapterId(newChapter.id);
  }

  function updateChapter(updatedChapter) {
    const updated = chapters.map(ch => (ch.id === updatedChapter.id ? updatedChapter : ch));
    saveProject(updated);
  }

  function deleteChapter(id) {
    const updated = chapters.filter(ch => ch.id !== id);
    saveProject(updated);
    if (currentChapterId === id) setCurrentChapterId(updated.length ? updated[0].id : null);
  }

  const currentChapter = chapters.find(ch => ch.id === currentChapterId);

  return (
    <div className="project-editor" style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px', boxSizing: 'border-box' }}>
        <input
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          onBlur={() => saveProject(chapters)}
          style={{ width: '100%', marginBottom: '10px', fontSize: '1.2em' }}
        />
        <h3>Kapitel</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {chapters.map(ch => (
            <li
              key={ch.id}
              style={{
                padding: '5px',
                cursor: 'pointer',
                backgroundColor: ch.id === currentChapterId ? '#ddd' : 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
              onClick={() => setCurrentChapterId(ch.id)}
            >
              <span>{ch.title}</span>
              <button onClick={(e) => { e.stopPropagation(); deleteChapter(ch.id); }}>X</button>
            </li>
          ))}
        </ul>
        <button onClick={addChapter} style={{ marginTop: '10px', width: '100%' }}>Neues Kapitel</button>
        <button onClick={onClose} style={{ marginTop: '20px', width: '100%' }}>Zurück zur Übersicht</button>
      </aside>

      <main style={{ flex: 1, padding: '10px', boxSizing: 'border-box' }}>
        {currentChapter ? (
          <ChapterEditor chapter={currentChapter} onChange={updateChapter} />
        ) : (
          <p>Kein Kapitel ausgewählt</p>
        )}
      </main>
    </div>
  );
}
