import { React, useState } from "react";
import { Menu } from "C:\\Users\\lollo\\quiz\\src\\Components\\Menu\\Menu.js";
import { NavBar } from "C:\\Users\\lollo\\quiz\\src\\Components\\NavBar\\NavBar.js";
import { Questions } from "C:\\Users\\lollo\\quiz\\src\\Components\\Pages\\fisioBack.js";

const history = [];

const HomePage = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <NavBar />
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
//FISIOLOGIA
const Fisiologia = () => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const clickHandler = (isCorrect) => {
    setNum(num + 1);
    console.log(num);

    if (isCorrect) {
      setScore(score + 1);
      history.push(1);
      console.log(history);
      console.log("score " + score);
    } else {
      history.push(-1);
    }
  };

  const Start = (num) => {
    setNum(num + 1);
    console.log("sono entrato in start");
    num == 0 ? console.log("vaff") : console.log("ciao");
  };

  const toHome = () => {
    setNum(0);
  };

  const Successiva = () => {
    setNum(num + 1);
    console.log("ciao");
    console.log(num);
  };

  const domande = [
    {
      text: "quanti anni hai?",
      answers: [
        {
          text: 12,
          isCorrect: false,
        },
        {
          text: 20,
          isCorrect: true,
        },
      ],
    },
    {
      text: "domanda 2?",
      answers: [
        {
          text: "SI",
          isCorrect: true,
        },
        {
          text: "NO",
          isCorrect: false,
        },
      ],
    },
  ];
  return (
    <div className="fisio">
      {num === 0 ? (
        <div className="home-box custom-box">
          <h3>Istruzioni per il quiz:</h3>
          <p>
            Il quiz è composto da <span className="total-question">15</span>{" "}
            domande
          </p>
          <button type="button" className="btn" onClick={() => Start(num)}>
            Inizia
          </button>
        </div>
      ) : (num <= 1 && num > 0) ? (
        <div className="quiz-box custom-box">
          <div className="question-number">Domanda numero {num}</div>
          <div className="question-text">prima domanda</div>
          <div className="option-container">
            <div className="option">a</div>
            <div className="option">b</div>
            <div className="option">c</div>
            <div className="option">d</div>
          </div>
          <div className="next-button">
            <button
              type="button"
              className="btn"
              onClick={() => clickHandler(true)}
            >
              Prossima
            </button>
          </div>
          <div className="answers-indicator">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : num > 1 ? (
        <div className="result-box custom-box">
          <h1>Risultati del quiz</h1>
          <table>
            <tr>
              <td>Numero di domande</td>
              <td>
                <span className="total-question"></span>
              </td>
            </tr>
            <tr>
              <td>Tentativi</td>
              <td>
                <span className="total-attempt"></span>
              </td>
            </tr>
            <tr>
              <td>Corrette</td>
              <td>
                <span className="total-correct"></span>
              </td>
            </tr>
            <tr>
              <td>Sbagliate</td>
              <td>
                <span className="total-wrong"></span>
              </td>
            </tr>
            <tr>
              <td>Percentuale</td>
              <td>
                <span className="percentage"></span>
              </td>
            </tr>
            <tr>
              <td>Punteggio totale</td>
              <td>
                <span className="total-score"></span>
              </td>
            </tr>
          </table>
          <button type="button" className="btn">
            Riprova il quiz
          </button>
          <button type="button" className="btn" onClick={toHome()}>
            Torna alla pagina principale
          </button>
        </div>
      ) : null}
    </div>
  );
};
// CHIMICA (ORA IN TEST)
const Chimica = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * (Questions.length - 1))
  );
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showScore, setShowScore] = useState(false);

  let voto = Math.round(((60 - 1.5 * (60 - score)) * 35) / 60); //aggiunto da ali attenzione
  const clickHandler = (Answer, CurrentQuestion) => {
    //console.log(score);
    console.log(Questions[CurrentQuestion].id);
    if (Answer === Questions[CurrentQuestion].TrueOrFalse) {
      console.log("Giusta");
      setScore(score + 1);
    } else {
      console.log("Sbagliata");
    }
    if (questionNumber < 59) {
      setCurrentQuestion(Math.floor(Math.random() * Questions.length - 1));
      setQuestionNumber(questionNumber + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
            
      {showScore === true ? (
        <div className="score-section">
                    
          <p>
                        Hai totalizzato {score} su {60}
                      
          </p>
                    
          <p>
            <br />
                      Il tuo voto sarebbe {voto}
                      
          </p>
                    
          <p className="promosso-bocciato">
                        {voto < 18 ? "Ritenta sarai più fortunato :(" : null}
                      
          </p>
                    
          <p className="full-score">
                        
            {voto >= 30 ? "Complimenti! Beccati sto 30 e zitt*!" : null}
                      
          </p>
                  
        </div>
      ) : (
        <>
                    
          <div className="question-section">
                        
            <div className="question-count">
                            <span>Domanda {questionNumber + 1}</span>/{60}
                          
            </div>
                        
            <div className="question-text">
                            {Questions[currentQuestion].text}
                          
            </div>
                      
          </div>
                    
          <div className="answer-section">
                        
            <button onClick={() => clickHandler(true, currentQuestion)}>
                            <div className="Answer-text"> Vero </div>
                          
            </button>
                        
            <button
              className="falseButton"
              onClick={() => clickHandler(false, currentQuestion)}
            >
                    <div className="Answer-text"> Falso </div>
                          
            </button>
                      
          </div>
                  
        </>
      )}
                 
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
};
