import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Fehler bei der Registrierung");
    }
  };

  return (
    <div>
      <h2>Registrieren</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} placeholder="Email" required />
        <input type="password" ref={passwordRef} placeholder="Passwort" required />
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
};

export default RegisterPage;
