// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Willkommen bei Bobo7</h1>
      <p>Deine Plattform für Hörspiel-Projekte.</p>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Registrieren</Link>
      </nav>
      {/* Hier kannst du Highlights, Neuerscheinungen, Erklärvideo etc. ergänzen */}
    </div>
  );
}
