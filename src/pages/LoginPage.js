// src/pages/LoginPage.js
import React, { useState } from "react";
import { auth } from "../firebase";  // Auth importieren
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login erfolgreich!");
    } catch (error) {
      alert("Fehler: " + error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Anmelden</button>
    </div>
  );
}

export default LoginPage;
