import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) setProjects(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (!newTitle.trim()) return alert("Bitte Titel eingeben!");
    const newProject = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      description: newDescription.trim(),
    };
    setProjects([...projects, newProject]);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Deine Projekte</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Neuer Projekttitel"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="text"
          placeholder="Beschreibung"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={addProject}>Projekt hinzufügen</button>
      </div>

      {projects.length === 0 && <p>Keine Projekte vorhanden.</p>}

      <ul>
        {projects.map(({ id, title, description }) => (
          <li key={id} style={{ marginBottom: 10 }}>
            <Link to={`/projects/${id}`}>
              <strong>{title}</strong> — {description || "(keine Beschreibung)"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
