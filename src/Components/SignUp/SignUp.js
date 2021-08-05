import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase from "C:\\Users\\lollo\\quiz\\src\\Components\\Results\\base.js";
import "../Pages/ContactUs/ContactUs.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("registrati")
      .add({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        num_quiz: 0,
        correct_answers: 0,
        wrong: 0,
        total: 0,
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => alert(e.message));

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="contact-us-container">
      <h1 id="contattaci">Registrati per cominciare subito a fare quiz!</h1>
      <form className="form" onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <label>Email</label>
        <input type="email" placeholder="Email" ref={emailRef} />

        <label>Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} />
        <label>Conferma password</label>
        <input
          type="password"
          placeholder="Password"
          ref={passwordConfirmRef}
        />

        <button type="submit" style={{ background: loading ? "#ccc" : "blue" }}>
          Registrati
        </button>
        <div className="w-100 text-center mt-2">
          Sei già registrato? <Link to="/login">Log In</Link>
        </div>
      </form>
    </div>
  );
}
