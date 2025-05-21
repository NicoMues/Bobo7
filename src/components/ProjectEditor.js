import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectEditor() {
  const { id } = useParams();

  return (
    <div>
      <h1>Projekt bearbeiten: {id}</h1>
      <p>Hier kannst du dein Hörbuchprojekt bearbeiten...</p>
      <Link to="/projects">Zurück zur Projektliste</Link>
    </div>
  );
}
