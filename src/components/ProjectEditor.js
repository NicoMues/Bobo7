import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ProjectEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const found = savedProjects.find((p) => p.id === id);
    if (!found) {
      alert("Projekt nicht gefunden!");
      navigate("/projects");
      return;
    }
    setProject(found);
    setTitle(found.title);
    setDescription(found.description);
  }, [id, navigate]);

  const saveProject = () => {
    if (!title.trim()) return alert("Titel darf nicht leer sein!");
    const savedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const updatedProjects = savedProjects.map((p) =>
      p.id === id ? { ...p, title: title.trim(), description: description.trim() } : p
    );
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    alert("Projekt gespeichert!");
  };

  if (!project) return null;

  return (
    <div style={{ padding: 20 }}>
      <h2>Projekt bearbeiten</h2>
      <div>
        <label>
          Titel:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginLeft: 10, width: "300px" }}
          />
        </label>
      </div>
      <div style={{ marginTop: 10 }}>
        <label>
          Beschreibung:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginLeft: 10, width: "300px", height: "100px" }}
          />
        </label>
      </div>
      <button onClick={saveProject} style={{ marginTop: 10 }}>
        Speichern
      </button>
      <div style={{ marginTop: 20 }}>
        <Link to="/projects">← Zurück zur Projektübersicht</Link>
      </div>
    </div>
  );
}
