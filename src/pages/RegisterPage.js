// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');  // nach erfolgreicher Registrierung Login-Seite anzeigen
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Registrieren</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
        <button type="submit">Registrieren</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <p>Schon einen Account? <Link to="/login">Hier einloggen</Link></p>
    </div>
  );
}

export default RegisterPage;
