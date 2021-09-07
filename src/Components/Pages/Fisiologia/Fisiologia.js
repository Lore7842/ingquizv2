import { React, useState, useEffect, useReducer } from "react";
import "./Fisiologia.css";
import { Questions } from "./Fisioback";
import { Results } from "../Results/Results";
import firebase from "../Results/base";
import { Link } from "react-router-dom";
import Home from "../Home/Home"
let history = [];
let historyNum = [];

const initialState = {
  email: "",
  num: 0,
  numD: Math.floor(Math.random() * (Questions.length - 1)),
  score: 0,
  attempts: 0,
  show: false,
};
function reducer(state, action) {
  let selector = document.querySelector(".answers-indicator");
  let domanda;
  switch (action.type) {
    case "increment":
      console.log(state.email);
      domanda = Math.floor(Math.random() * (Questions.length - 1));
      return {
        email: action.email,
        num: state.num + 1,
        numD: domanda,
        score: state.score,
        attempts: state.attempts,
        show: false,
      };
    case "decrement":
      domanda = Math.floor(Math.random() * (Questions.length - 1));
      return {
        email: state.email,
        num: state.num - 1,
        numD: history[state.num - 1],
        score: state.score,
        attempts: state.attempts,
        show: false,
      };
    case "home":
      return {
        email: state.email,
        num: 1,
        numD: Math.floor(Math.random() * (Questions.length - 1)),
        score: 0,
        attempts: state.attempts,
        show: false,
      };
    case "restart":
      domanda = Math.floor(Math.random() * (Questions.length - 1));
      return {
        email: state.email,
        num: 1,
        numD: domanda,
        score: 0,
        attempts: 0,
        show: false,
      };
    case "show":
      for (let i = 0; i < 60; i++) {
        if (history[i] === 1) {
          selector.children.item(i).classList.add("correct");
        } else {
          selector.children.item(i).classList.add("wrong");
        }
      }
      return {
        email: state.email,
        num: state.num,
        numD: Math.floor(Math.random() * (Questions.length - 1)),
        score: state.score,
        attempts: state.attempts,
        show: false,
      };
    case "details":
      firebase
        .firestore()
        .collection("registrati")
        .where("email", "==", state.email)
        .get()
        .then((querySnaphot) => {
          console.log(querySnaphot);
          querySnaphot.forEach((doc) => {
            let docRef = firebase
              .firestore()
              .collection("registrati")
              .doc(doc.id);
            docRef.update({
              correct_answers: firebase.firestore.FieldValue.increment(
                state.score / 2
              ),
              wrong: firebase.firestore.FieldValue.increment(
                30 - state.score / 2
              ),
              total: firebase.firestore.FieldValue.increment(30),
              total_quiz: firebase.firestore.FieldValue.increment(0.5),
            });
            console.log(docRef.wrong);
          });
        });
      return {
        email: state.email,
        num: state.num,
        numD: Math.floor(Math.random() * (Questions.length - 1)),
        score: state.score,
        attempts: state.attempts,
        show: true,
      };
    case "return":
      firebase
        .firestore()
        .collection("registrati")
        .where("email", "==", state.email)
        .get()
        .then((querySnaphot) => {
          console.log(querySnaphot);
          querySnaphot.forEach((doc) => {
            let docRef = firebase
              .firestore()
              .collection("registrati")
              .doc(doc.id);
            docRef.update({
              correct_answers: firebase.firestore.FieldValue.increment(
                state.score / 2
              ),
              wrong: firebase.firestore.FieldValue.increment(
                30 - state.score / 2
              ),
              total: firebase.firestore.FieldValue.increment(30),
              total_quiz: firebase.firestore.FieldValue.increment(0.5),
            });
            console.log(docRef.wrong);
          });
        });
      domanda = Math.floor(Math.random() * (Questions.length - 1));
      return {
        email: state.email,
        num: 99,
        numD: domanda,
        score: 0,
        attempts: 0,
        show: false,
      };

    default:
      throw new Error();
  }
}

function Fisiologia(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentUser = props.user;
  const prox = () => {
    historyNum.push(state.numD);
    for (let i = 0; i < 2; i++) {
      if (
        document
          .querySelector(".option-container")
          .children.item(i)
          .classList.contains("correct")
      ) {
        document
          .querySelector(".option-container")
          .children.item(i)
          .classList.remove("correct");
      }
    }

    for (let i = 0; i < 2; i++) {
      if (
        document
          .querySelector(".option-container")
          .children.item(i)
          .classList.contains("wrong")
      ) {
        document
          .querySelector(".option-container")
          .children.item(i)
          .classList.remove("wrong");
      }
    }
    dispatch({ type: "increment", email: currentUser.email });
  };

  const trueOrFalse = (trueOrFalse, index, tF) => {
    if (index === 0) {
      history = [];
      historyNum = [];
    }
    if (trueOrFalse === Questions[state.numD]["TrueOrFalse"]) {
      let el = document.querySelector(".option-container").children;
      el.item(tF).classList.add("correct");
      history.push(1);
      state.score = state.score + 1;
    } else {
      let el = document.querySelector(".option-container").children;
      el.item(tF).classList.add("wrong");
      history.push(-1);
    }
    state.attempts = state.attempts + 1;
    setTimeout(() => prox(), 550);
  };

  return (
    <div className="quiz-page">
      {state.show === true ? (
        <Results
          history={history}
          historyD={historyNum}
          numD={60}
          dispatch={dispatch}
        />
      ) : state.num === 0 ? (
        <div className="home-box custom-box">
          <h3>Istruzioni per il quiz:</h3>
          <p>
            Il quiz è composto da <span className="total-questions">60</span>{" "}
            domande
          </p>
          <button
            type="button"
            className="bott"
            onClick={() =>
              dispatch({ type: "increment", email: currentUser.email })
            }
          >
            Inizia
          </button>
        </div>
      ) : state.num <= 60 ? (
        <div className="quiz-box custom-box">
          <div className="question-number">Domanda {state.num}</div>
          <div className="question-text">{Questions[state.numD]["text"]}</div>
          <div className="option-container">
            <div
              className="option"
              onClick={() => trueOrFalse(true, state.num - 1, 0)}
            >
              Vero
            </div>
            <div
              className="option"
              onClick={() => trueOrFalse(false, state.num - 1, 1)}
            >
              Falso
            </div>
          </div>
          <div className="next-question-btn">
            <button type="button" className="bott" onClick={prox}>
              Prossima
            </button>
          </div>
          <div className="terminator"></div>
        </div>
      ) :state.num == 99? (
        <Home></Home>
      ) :(
        <div className="result-box custom-box">
          <h1>Risultati del quiz</h1>
          <table>
            <tbody>
              <tr>
                <td>Numero di domande</td>
                <td>
                  <span className="total-question">60</span>
                </td>
              </tr>
              <tr>
                <td>Tentativi</td>
                <td>
                  <span className="total-attempt">{state.attempts}</span>
                </td>
              </tr>
              <tr>
                <td>Corrette</td>
                <td>
                  <span className="total-correct">{state.score} </span>
                </td>
              </tr>
              <tr>
                <td>Sbagliate o non date</td>
                <td>
                  <span className="total-wrong">{60 - state.score}</span>
                </td>
              </tr>
              <tr>
                <td>Percentuale</td>
                <td>
                  <span className="percentage">
                    {Math.round((state.score / 60) * 100)}%
                  </span>
                </td>
              </tr>
              <tr>
                <td>Punteggio totale</td>
                <td>
                  <span className="total-score">{state.score}/60</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="answers-indicator">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
          <button
            type="button"
            className="bott"
            onClick={() => dispatch({ type: "home" })}
          >
            Riprova il quiz
          </button>

          <button
            type="button"
            className="bott"
            onClick={() => dispatch({ type: "return" })}
          >
            Home
          </button>

          <button
            type="button"
            className="bott"
            onClick={() => dispatch({ type: "show" })}
          >
            Mostra i dettagli della domande
          </button>
          <button
            type="button"
            className="bott"
            onClick={() => dispatch({ type: "details" })}
          >
            Mostra le risposte
          </button>
        </div>
      )}
    </div>
  );
}

export default Fisiologia;
