import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ProjectList from '../components/ProjectList'; // Liste der Projekte
import ProjectEditor from '../components/ProjectEditor'; // Editor-Komponente
import StatsOverview from '../components/StatsOverview'; // Statistiken

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Willkommen, {auth.currentUser?.displayName || 'Gast'}!</p>
      <ProjectList />
      <ProjectEditor />
      <StatsOverview />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
