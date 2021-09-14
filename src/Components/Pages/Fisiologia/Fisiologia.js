import { React, useState, useEffect, useReducer } from "react";
import "./Fisiologia.css";
import { Questions } from "./Fisioback";
import { Results } from "../Results/Results";
import firebase from "../Results/base";
import { Redirect } from "react-router-dom";
import Home from "../Home/Home";
let history = [];
let historyNum = [];
let notAnswered = 0;
let wrong = 0;

const initialState = {
  email: "",
  num: 0,
  numD: Math.floor(Math.random() * (Questions.length - 1)),
  score: 0,
  attempts: 0,
  show: false,
};

let lastAction = { type: "null" };

function reducer(state, action) {
  let selector = document.querySelector(".answers-indicator");
  let domanda;
  console.log(lastAction.type + " " + action.type)
  if (lastAction.type === action.type && (action.type === "return" || action.type === "details")) {
    console.log("Same action: " + action.type);
    if (action.type === "return")
      return { ...state, num: 99 };
    else if (action.type === "details")
      return { ...state, show: true}
  }
  lastAction = action;
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
      // aggiornare i dati nel database se riprovo il quiz
      notAnswered = 0;
      wrong = 0;
      return {
        email: state.email,
        num: 1,
        numD: Math.floor(Math.random() * (Questions.length - 1)),
        score: 0,
        attempts: state.attempts,
        show: false,
      };
    case "restart":
      notAnswered = 0;
      wrong = 0;
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
        } else if (history[i] === -1) {
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
      notAnswered = 0;
      wrong = 0;
      firebase
        .firestore()
        .collection("registrati")
        .where("email", "==", state.email)
        .get()
        .then((querySnaphot) => {
          console.log(querySnaphot.size);
          querySnaphot.forEach((doc) => {
            let docRef = firebase
              .firestore()
              .collection("registrati")
              .doc(doc.id);
            docRef.update({
              correct_answers: firebase.firestore.FieldValue.increment(
                state.score
              ),
              wrong: firebase.firestore.FieldValue.increment(60 - state.score),
              total: firebase.firestore.FieldValue.increment(60),
              total_quiz: firebase.firestore.FieldValue.increment(1),
            });
          });
        });
      return {
        email: state.email,
        num: 1,
        numD: Math.floor(Math.random() * (Questions.length - 1)),
        score: 0,
        attempts: 0,
        show: true,
      };
    case "return":
      notAnswered = 0;
      wrong = 0;
      firebase
        .firestore()
        .collection("registrati")
        .where("email", "==", state.email)
        .get()
        .then((querySnaphot) => {
          console.log(querySnaphot.size);
          querySnaphot.forEach((doc) => {
            console.log("here");
            let docRef = firebase
              .firestore()
              .collection("registrati")
              .doc(doc.id);
            docRef.update({
              correct_answers: firebase.firestore.FieldValue.increment(
                state.score
              ),
              wrong: firebase.firestore.FieldValue.increment(60 - state.score),
              total: firebase.firestore.FieldValue.increment(60),
              total_quiz: firebase.firestore.FieldValue.increment(1),
            });
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
  const prox = (index) => {
    console.log("Punteggio: " + state.score);
    console.log("Sbagliate: " + wrong);
    console.log("Non date: " + notAnswered);
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
    if (history[index] != 1 && history[index] != -1) {
      history[index] = 0;
      console.log(history[index]);
      console.log(index);
      notAnswered += 1;
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
      wrong += 1;
    }
    state.attempts = state.attempts + 1;
    setTimeout(() => prox(index), 550);
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
            <button
              type="button"
              className="bott"
              onClick={() => prox(state.num - 1)}
            >
              Prossima
            </button>
          </div>
          <div className="terminator"></div>
        </div>
      ) : state.num == 99 ? (
        <Redirect to="/home" />
      ) : (
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
                <td>Sbagliate</td>
                <td>
                  <span className="total-wrong">{wrong}</span>
                </td>
              </tr>
              <tr>
                <td>Non date</td>
                <td>
                  <span className="total-wrong">{notAnswered}</span>
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
              <tr>
                <td>Voto</td>
                <td>
                  <span className="mark">
                    {((60 - 1.5 * wrong - notAnswered) * 33) / 60}
                  </span>
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
