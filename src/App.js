// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectOverview from './pages/ProjectOverview';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectOverview />} />
        <Route path="/editor/:projectId" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
