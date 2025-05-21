// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";  // Firestore importieren
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
