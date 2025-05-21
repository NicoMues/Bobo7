import React from "react";
import { useLocation } from "react-router-dom";

export default function ProjectEditor() {
  const query = new URLSearchParams(useLocation().search);
  const projectId = query.get("projectId");

  return (
    <div style={{ padding: 20 }}>
      <h2>{projectId ? `Projekt bearbeiten: ${projectId}` : "Neues Projekt anlegen"}</h2>
      {/* Hier kann die Projekt-Bearbeitung stattfinden */}
    </div>
  );
}
