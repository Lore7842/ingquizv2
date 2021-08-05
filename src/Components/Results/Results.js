import { Questions } from "C:\\Users\\lollo\\quiz\\src\\Components\\Pages\\fisioBack.js";
import "C:\\Users\\lollo\\quiz\\src\\Components\\Results\\Results.css";
import firebase from "./base.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


let el;

function Results(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    el = document.querySelector(".sum-score");
  }, []);

  const ref = firebase.firestore().collection("users");

  function getUsers() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => items.push(doc.data()));
      setUser(items);
      console.log(user);
      setLoading(false);
    });
  }

  const UpdateScore = () => {
    ref.doc("user1").update({ media: 32 });
    ref
      .doc("user1")
      .get()
      .then((doc) => {
        setScore(doc.data().media);
      });

    return (<Link to="/stats" className="btn stats">
      Guarda le tue statistiche
    </Link>);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <div>LOADING</div>;
  }
  return (
    <div className="Results">
      {props.historyD.map((value, index) => {
        return (
          <div className="result-box">
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
        <button
          type="button"
          className="button"
          onClick={() => props.dispatch({ type: "home" })}
        >
          Torna alla pagina principale
        </button>
      </div>
      <div className="sum-score">
        <UpdateScore />
      </div>
    </div>
  );
}

export { Results };
