import { Link } from 'react-router-dom';

function ProjectOverview() {
  // Platzhalter-Projektliste
  const projects = [
    { id: 1, title: 'Projekt A' },
    { id: 2, title: 'Projekt B' },
  ];

  return (
    <div>
      <h2>Deine Projekte</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/editor/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectOverview;
