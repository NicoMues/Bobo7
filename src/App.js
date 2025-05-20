import React, { useState } from 'react';
import ProjectEditor from './components/ProjectEditor';  // <-- hier der korrekte Import
import './styles.css';

function App() {
  const [projects, setProjects] = useState(() => {
    // Lade Projekte aus localStorage, falls vorhanden
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [newProjectName, setNewProjectName] = useState('');

  const handleCreateProject = () => {
    if (newProjectName.trim() === '') return;
    const newProject = {
      id: Date.now(),
      name: newProjectName,
      chapters: []
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    setNewProjectName('');
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseEditor = () => {
    // Projekt zurück speichern (wichtig, falls geändert)
    if (selectedProject) {
      const updatedProjects = projects.map(p => (p.id === selectedProject.id ? selectedProject : p));
      setProjects(updatedProjects);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    }
    setSelectedProject(null);
  };

  const handleUpdateProject = (updatedProject) => {
    setSelectedProject(updatedProject);
  };

  return (
    <div className="app">
      {!selectedProject ? (
        <div className="dashboard">
          <h1>Projektübersicht</h1>
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="Neues Projekt erstellen"
          />
          <button onClick={handleCreateProject}>Projekt erstellen</button>

          <h2>Projekte</h2>
          {projects.length === 0 ? (
            <p>Noch keine Projekte.</p>
          ) : (
            projects.map((project) => (
              <button key={project.id} onClick={() => handleSelectProject(project)}>
                {project.name}
              </button>
            ))
          )}
        </div>
      ) : (
        <ProjectEditor
          project={selectedProject}
          onClose={handleCloseEditor}
          onUpdate={handleUpdateProject}
        />
      )}
    </div>
  );
}

export default App;
