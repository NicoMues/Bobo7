import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectEditor from './components/ProjectEditor';
import ChapterEditor from './components/ChapterEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectEditor />} />
        <Route path="/chapter/:chapterId" element={<ChapterEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
