import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  // Projekte aus localStorage laden beim Start
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  return (
    <div>
      <h1>Deine Projekte</h1>
      <Link to="/projects/new">Neues Projekt erstellen</Link>
      <ul>
        {projects.length === 0 && <li>Keine Projekte vorhanden</li>}
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
