import { React, useState } from "react";
import firebase from '../Results/base';

import "../ContactUs/ContactUs.css";

function ProponiDomande() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .firestore()
      .collection("questions")
      .add({
        subject: name,
        text: email,
        options: message,
      })
      .then(() => {
        alert("Messaggio inviato correttamente! Grazie 🙂 ");
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
        <h1 id="contattaci">Consiglia domande</h1>

        <label>Materia</label>
        <input
          type="text"
          placeholder="Inserisci la materia"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Domanda</label>
        <input
          type="text"
          placeholder="Testo domanda"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Opzioni</label>
        <textarea
          type="text"
          placeholder="Scrivi le opzioni separandole con dei ;"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" style={{ background: loading ? "#ccc" : "blue" }}>
          Invia
        </button>
      </form>
    </div>
  );
}

export { ProponiDomande };
