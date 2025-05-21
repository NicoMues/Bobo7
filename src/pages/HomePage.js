import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Willkommen auf der Startseite</h1>
      <p>Hier kannst du dein Hörbuchprojekt starten und bearbeiten.</p>
      <nav>
        <Link to="/projects" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
          Zu deinen Projekten
        </Link>
      </nav>
    </div>
  );
}
