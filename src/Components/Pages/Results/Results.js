import { Questions } from "../Fisiologia/Fisioback";
import "./Results.css";
import firebase from "./base.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
let el;
function Results(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const isSmall = useMediaQuery({ query: "(max-width: 768px" });
  useEffect(() => {
    el = document.querySelector(".sum-score");
  }, []);

  const ref = firebase.firestore().collection("registrati");

  // function getUsers() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => items.push(doc.data()));
  //     setUser(items);
  //     console.log(user);
  //     setLoading(false);
  //   });
  // }

  const UpdateScore = () => {
    return (
      <div>
        {isSmall ? (
          <Link to="/r" className="button stats">
            Guarda le tue statistiche
          </Link>
        ) : (
          <Link to="/" className="button stats">
            Guarda le tue statistiche
          </Link>
        )}
      </div>
    );
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  if (loading) {
    return <div style={{ textAlign: "center" }}>LOADING</div>;
  }
  return (
    <div className="Results">
      {props.historyD.map((value, index) => {
        return (
          <div className="result-box" key={index}>
            <div className="info-result">Domanda {index + 1}</div>
            {Questions[value]["text"]}
            {console.log(index)}
            {props.history[index] === 1 ? (
              Questions[value]["TrueOrFalse"] === true ? (
                <div className="result-option-container">
                  <div className="result-option correct">Vero</div>
                  <div className="result-option">Falso</div>{" "}
                </div>
              ) : (
                <div className="result-option-container">
                  <div className="result-option">Vero</div>
                  <div className="result-option correct">Falso</div>
                </div>
              )
            ) : props.history[index] === 0 ? (
              Questions[value]["TrueOrFalse"] === true ? (
                <div className="result-option-container">
                  <div className="result-option wrong">Vero</div>
                  <div className="result-option">Falso</div>{" "}
                </div>
              ) : (
                <div className="result-option-container">
                  <div className="result-option">Vero</div>
                  <div className="result-option wrong">Falso</div>
                </div>
              )
            ) : Questions[value]["TrueOrFalse"] === true ? (
              <div className="result-option-container">
                <div className="result-option">Vero</div>
                <div className="result-option wrong">Falso</div>{" "}
              </div>
            ) : (
              <div className="result-option-container">
                <div className="result-option wrong">Vero</div>
                <div className="result-option">Falso</div>
              </div>
            )}
          </div>
        );
      })}
      <div className="button-Container">
        <button
          type="button"
          className="button"
          onClick={() => props.dispatch({ type: "home" })}
        >
          Riprova il quiz
        </button>
        <Link to ='/home' className="button">
          Torna alla home
        </Link>
      </div>
      <div className="sum-score">
        <UpdateScore />
      </div>
    </div>
  );
}

export { Results };
