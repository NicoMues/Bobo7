// src/pages/RegisterPage.js
import React, { useState } from "react";
import { auth } from "../firebase";  // Auth importieren
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registrierung erfolgreich!");
    } catch (error) {
      alert("Fehler: " + error.message);
    }
  };

  return (
    <div>
      <h1>Registrieren</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Passwort" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleRegister}>Registrieren</button>
    </div>
  );
}

export default RegisterPage;
