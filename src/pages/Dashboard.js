// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    const q = query(collection(db, "projects"), where("ownerId", "==", auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, [navigate]);

  return (
    <div>
      <h1>Deine Projekte</h1>
      <Link to="/projects/new">Neues Projekt anlegen</Link>
      <ul>
        {projects.map(proj => (
          <li key={proj.id}>
            <Link to={`/projects/${proj.id}`}>{proj.title || "Unbenanntes Projekt"}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
