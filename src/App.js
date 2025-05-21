import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectList from "./components/ProjectList";
import ProjectEditor from "./components/ProjectEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/new" element={<ProjectEditor />} />
        <Route path="/projects/:id" element={<ProjectEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
