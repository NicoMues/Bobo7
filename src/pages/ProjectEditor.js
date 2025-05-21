// src/pages/ProjectEditor.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

export default function ProjectEditor() {
  const { projectId } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }

    if (projectId === "new") {
      // Neues Projekt: Felder leer lassen
      setTitle("");
      setText("");
    } else {
      // Existierendes Projekt laden
      const fetchProject = async () => {
        const docRef = doc(db, "projects", projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "");
          setText(data.text || "");
        } else {
          alert("Projekt nicht gefunden!");
          navigate("/dashboard");
        }
      };
      fetchProject();
    }
  }, [projectId, navigate]);

  const saveProject = async () => {
    if (!title.trim()) {
      alert("Bitte Titel eingeben");
      return;
    }

    // ID für neues Projekt: aktueller Zeitstempel als String
    const id = projectId === "new" ? Date.now().toString() : projectId;

    await setDoc(doc(db, "projects", id), {
      title,
      text,
      ownerId: auth.currentUser.uid,
      updatedAt: new Date()
    });

    if (projectId === "new") {
      // Nach Erstellung weiter zum neuen Projekt-Editor
      navigate(`/projects/${id}`);
    } else {
      alert("Projekt gespeichert");
    }
  };

  return (
    <div>
      <h2>Projekt bearbeiten</h2>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <textarea
        rows={15}
        placeholder="Hier deinen Text eingeben..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      /><br />
      <button onClick={saveProject}>Speichern</button>
      <button onClick={() => navigate("/dashboard")}>Zurück zum Dashboard</button>
    </div>
  );
}
