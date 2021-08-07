import { React, useState } from "react";
import firebase from '../Results/base';

import "./ContactUs.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .firestore()
      .collection("messages")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Messaggio inviato correttamente!");
        setLoading(false);
      })
      .catch((e) => alert(e.message));
    setMessage("");
    setEmail("");
    setName("");
  };

  return (
    <div className="contact-us-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h1 id="contattaci">Contattaci 📱 </h1>

        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Messaggio</label>
        <textarea
          type="text"
          placeholder="Messaggio"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" style={{ background: loading ? "#ccc" : "blue" }}>
          Invia
        </button>
      </form>
    </div>
  );
}

export default ContactUs ;
