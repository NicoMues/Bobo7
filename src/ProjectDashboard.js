import React, { useState } from 'react';

export default function ProjectDashboard({ onOpenProject }) {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  function addProject() {
    if (!newProjectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: newProjectName.trim(),
      chapters: []
    };
    setProjects([...projects, newProject]);
    setNewProjectName('');
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Projekte</h2>
      <ul>
        {projects.map(proj => (
          <li key={proj.id}>
            {proj.name} {' '}
            <button onClick={() => onOpenProject(proj)}>Öffnen</button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="Neues Projektname" 
        value={newProjectName} 
        onChange={e => setNewProjectName(e.target.value)} 
      />
      <button onClick={addProject}>Projekt anlegen</button>
    </div>
  );
}
