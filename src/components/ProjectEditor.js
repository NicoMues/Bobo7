import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id && id !== "new") {
      // Projekt aus localStorage laden
      const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
      const project = storedProjects.find((p) => p.id === id);
      if (project) {
        setTitle(project.title);
        setDescription(project.description);
      }
    }
  }, [id]);

  const handleSave = () => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");

    if (id === "new") {
      // Neues Projekt anlegen
      const newProject = {
        id: Date.now().toString(),
        title,
        description,
      };
      storedProjects.push(newProject);
    } else {
      // Bestehendes Projekt bearbeiten
      const index = storedProjects.findIndex((p) => p.id === id);
      if (index !== -1) {
        storedProjects[index] = { id, title, description };
      }
    }

    localStorage.setItem("projects", JSON.stringify(storedProjects));
    navigate("/projects");
  };

  return (
    <div>
      <h1>{id === "new" ? "Neues Projekt erstellen" : "Projekt bearbeiten"}</h1>
      <label>
        Titel:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titel eingeben"
        />
      </label>
      <br />
      <label>
        Beschreibung:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Beschreibung eingeben"
        />
      </label>
      <br />
      <button onClick={handleSave}>Speichern</button>
    </div>
  );
}
