import { useParams } from 'react-router-dom';

function EditorPage() {
  const { projectId } = useParams();

  return (
    <div>
      <h2>Projekt-Editor für Projekt-ID: {projectId}</h2>
      <p>Hier kommt später der Editor mit Kapiteln & Texten rein.</p>
    </div>
  );
}

export default EditorPage;
