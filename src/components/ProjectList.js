import React, { useState, useEffect } from "react";

export default function ProjectList() {
  // Projekte im State
  const [projects, setProjects] = useState([]);

  // Beim Laden: Projekte aus localStorage lesen
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Projekte in localStorage speichern, wenn sich 'projects' ändert
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Beispiel: Neues Projekt hinzufügen (kannst du anpassen)
  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "Neues Projekt",
      description: "Projektbeschreibung",
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <h2>Deine Projekte</h2>
      <button onClick={addProject}>Projekt hinzufügen</button>
      <ul>
        {projects.map((proj) => (
          <li key={proj.id}>
            <strong>{proj.title}</strong>: {proj.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
