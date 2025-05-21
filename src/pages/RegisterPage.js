import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwörter stimmen nicht überein");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (err) {
      setError("Registrierung fehlgeschlagen: " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="register-container">
      <h2>Registrieren</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} required />
        <label>Passwort</label>
        <input type="password" ref={passwordRef} required />
        <label>Passwort bestätigen</label>
        <input type="password" ref={passwordConfirmRef} required />
        <button disabled={loading} type="submit">
          Registrieren
        </button>
      </form>
    </div>
  );
}
