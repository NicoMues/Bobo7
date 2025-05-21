// src/pages/ProjectEditor.js
import React, { useState } from "react";
import { db } from "../firebase";  // Firestore importieren
import { collection, addDoc } from "firebase/firestore";

function ProjectEditor() {
  const [projectName, setProjectName] = useState("");

  const handleAddProject = async () => {
    try {
      await addDoc(collection(db, "projects"), {
        name: projectName,
        createdAt: new Date()
      });
      setProjectName("");
      alert("Projekt hinzugefügt!");
    } catch (error) {
      console.error("Fehler beim Hinzufügen: ", error);
    }
  };

  return (
    <div>
      <h1>Projekt hinzufügen</h1>
      <input 
        type="text" 
        value={projectName} 
        onChange={(e) => setProjectName(e.target.value)} 
        placeholder="Projektname" 
      />
      <button onClick={handleAddProject}>Speichern</button>
    </div>
  );
}

export default ProjectEditor;
