import React from "react";
import { Link } from "react-router-dom";

const projectsMock = [
  { id: 1, title: "Mein erstes Hörbuch" },
  { id: 2, title: "Projekt Bobo7" },
];

export default function ProjectList() {
  return (
    <div>
      <h1>Deine Projekte</h1>
      <ul>
        {projectsMock.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Zurück zur Startseite</Link>
    </div>
  );
}
