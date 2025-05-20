import React, { useState, useEffect } from 'react';

export default function ProjectList({ onOpenProject }) {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : [];
  });
  const [newName, setNewName] = useState('');

  function saveProjects(newProjects) {
    setProjects(newProjects);
    localStorage.setItem('projects', JSON.stringify(newProjects));
  }

  function createProject() {
    if (!newName.trim()) return alert('Bitte Projektnamen eingeben');
    if (projects.find(p => p.name === newName.trim())) return alert('Projektname existiert schon');
    const newProject = { id: Date.now().toString(), name: newName.trim(), chapters: [] };
    const updated = [...projects, newProject];
    saveProjects(updated);
    setNewName('');
  }

  return (
    <div className="project-list">
      <h2>Projekte</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            {p.name}{' '}
            <button onClick={() => onOpenProject(p)}>Öffnen</button>
          </li>
        ))}
      </ul>
      <input
        placeholder="Neues Projekt"
        value={newName}
        onChange={e => setNewName(e.target.value)}
      />
      <button onClick={createProject}>Anlegen</button>
    </div>
  );
}
