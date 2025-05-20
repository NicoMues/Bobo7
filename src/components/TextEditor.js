import React, { useEffect, useRef } from 'react';

export default function TextEditor({ text, onChange }) {
  const textareaRef = useRef(null);

  // Auto-save alle paar Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      if (textareaRef.current) {
        onChange(textareaRef.current.value);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [onChange]);

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={e => onChange(e.target.value)}
      placeholder="Hier Text schreiben..."
      rows={10}
      style={{ width: '100%', fontSize: '1rem' }}
    />
  );
}
