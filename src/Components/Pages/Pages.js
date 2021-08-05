import { React, useState, useReducer } from "react";
import { Menu } from "C:\\Users\\lollo\\quiz\\src\\Components\\Menu\\Menu.js";
import { NavBar } from "C:\\Users\\lollo\\quiz\\src\\Components\\NavBar\\NavBar.js";
import { Questions } from "C:\\Users\\lollo\\quiz\\src\\Components\\Pages\\fisioBack.js";
import { Results } from "../Results/Results";
import "./fisio.css";
import firebase from "C:\\Users\\lollo\\quiz\\src\\Components\\Results\\base.js";
import DashBoard from "../DashBoard/DashBoard";
import { navBar } from "../NavBar/NavBar";

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
      firebase
        .firestore()
        .collection("registrati")
        .where("email", "==", state.email)
        .get()
        .then((querySnaphot) => {
          querySnaphot.forEach((doc) => {
            doc.update({
              correct_answers: firebase.firestore.FieldValue.increment(
                state.score
              ),
            });
          });
        });
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
      for (let i = 0; i < 30; i++) {
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
          querySnaphot.forEach((doc) => {
            let docRef = firebase
              .firestore()
              .collection("registrati")
              .doc(doc.id);
            docRef.update({
              correct_answers: firebase.firestore.FieldValue.increment(
                state.score
              ),
              wrong: firebase.firestore.FieldValue.increment(30 - state.score),
              total: firebase.firestore.FieldValue.increment(30),
            });
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

    default:
      throw new Error();
  }
}

const HomePage = (props) => {
  const [input, setInput] = useState("");
  const currentUser = props.user;
  return (
    <div>
      <NavBar userProp={currentUser} />
      <Menu inputProp={input} setInputProp={setInput} />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h1>Seguici su Instagram</h1>
    </div>
  );
};

const ProfilePage = (props) => {
  const [quiz, setQuiz] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const currentUser = props.user;
  let num_quiz = 0;
  let total_answers = 0;
  let correct_answers = 0;
  let wrong_answers = 0;
  firebase
    .firestore()
    .collection("registrati")
    .where("email", "==", currentUser.email)
    .get()
    .then((querySnaphot) => {
      querySnaphot.forEach((doc) => {
        correct_answers = doc.data().correct_answers;
        num_quiz = doc.data().num_quiz;
        wrong_answers = doc.data().wrong;
        total_answers = doc.data().total;
      });
      console.log(currentUser.email);
      setQuiz(num_quiz);
      setCorrect(correct_answers);
      setWrong(wrong_answers);
      setTotal(total_answers);
      setLoading(false);
    })
    .catch((e) => alert(e.message));

  return (
    <div className="profilo">
      <NavBar />
      {!loading ? (
        <div className="stats-container">
          <h1>Statistiche quiz</h1>
          <table>
            <tbody>
              <tr>
                <td>Numero totale di quiz effettuati </td>
                <td>{quiz}</td>
              </tr>
              <tr>
                <td>Numero di risposte giuste date:</td>
                <td>{correct}</td>
              </tr>
              <tr>
                <td>Numero di risposte sbagliate date:</td>
                <td>{wrong}</td>
              </tr>
              <tr>
                <td>Percentuale risposte giuste date:</td>
                <td>{total!=0 ? Math.round(correct / total) : 0} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
      <DashBoard />
    </div>
  );
};

const Stats = () => {
  return <div>STATISTICHE</div>;
};
//FISIOLOGIA
const Fisiologia = (props) => {
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
          numD={30}
          dispatch={dispatch}
        />
      ) : state.num === 0 ? (
        <div className="home-box custom-box">
          <h3>Istruzioni per il quiz:</h3>
          <p>
            Il quiz è composto da <span className="total-questions">30</span>{" "}
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
      ) : state.num <= 30 ? (
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
      ) : (
        <div className="result-box custom-box">
          <h1>Risultati del quiz</h1>
          <table>
            <tbody>
              <tr>
                <td>Numero di domande</td>
                <td>
                  <span className="total-question">30</span>
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
                  <span className="total-wrong">{30 - state.score}</span>
                </td>
              </tr>
              <tr>
                <td>Percentuale</td>
                <td>
                  <span className="percentage">
                    {Math.round((state.score / 30) * 100)}%
                  </span>
                </td>
              </tr>
              <tr>
                <td>Punteggio totale</td>
                <td>
                  <span className="total-score">{state.score}/30</span>
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
            onClick={() => dispatch({ type: "home" })}
          >
            Torna alla pagina principale
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
};
// CHIMICA (NOW IN TEST)
const Chimica = () => {
  return (
    <div className="chimica">
      <h1>Quiz chimica</h1>
    </div>
  );
};
//ANALISI 2
const Analisi2 = () => {
  return (
    <div className="analisi2">
      <h1>Quiz analisi II</h1>
    </div>
  );
};

// FISICA 2
const Fisica2 = () => {
  return (
    <div className="fisica2">
      <h1>Quiz fisica II</h1>
    </div>
  );
};

//ELETTRONICA
const Elettronica = () => {
  return (
    <div className="elettro">
      <h1>Quiz elettronica</h1>
    </div>
  );
};

//METODI
const Metodi = () => {
  return (
    <div className="metodi">
      <h1>Quiz metodi</h1>
    </div>
  );
};

export {
  HomePage,
  AboutPage,
  Fisiologia,
  Analisi2,
  Elettronica,
  Fisica2,
  Chimica,
  Metodi,
  Stats,
  ProfilePage,
};
