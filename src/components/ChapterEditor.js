// ChapterEditor.js
import React from 'react';

export default function ChapterEditor({ chapter, onChange }) {
  const handleTextChange = (e) => {
    onChange({ ...chapter, text: e.target.value });
  };

  const handleTitleChange = (e) => {
    onChange({ ...chapter, title: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={chapter.title}
        onChange={handleTitleChange}
        style={{ fontSize: '1.2em', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        value={chapter.text}
        onChange={handleTextChange}
        rows={15}
        style={{ width: '100%' }}
      />
    </div>
  );
}
