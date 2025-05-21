import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      alert("Logout fehlgeschlagen");
    }
  }

  return (
    <div className="dashboard-container">
      <h1>Willkommen im Dashboard</h1>
      <p>Eingeloggt als: {currentUser?.email}</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Hier kannst du dein Dashboard weiter ausbauen */}
    </div>
  );
}
