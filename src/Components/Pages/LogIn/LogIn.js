import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import '../ContactUs/ContactUs.css';
// import './LogIn.css'
// Guardare i link e le maiuscole
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="contact-us-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 id="contattaci">Log In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <label>Email</label>
        <input type="email" placeholder="Email" ref={emailRef} />

        <label>Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} />

        <button type="submit" style={{ background: loading ? "#ccc" : "blue" }}>
          Accedi
        </button>
        <div className="w-100 text-center mt-2">
         Non hai un account e vuoi iniziare a fare quiz? <Link to="/signup">Registrati</Link>
        </div>
      </form>
    </div>
  );
}
