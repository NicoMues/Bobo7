import React from 'react';
import StatsOverview from '../components/StatsOverview';
import ProjectList from '../components/ProjectList';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <StatsOverview />
      <ProjectList />
    </div>
  );
}

export default Dashboard;
