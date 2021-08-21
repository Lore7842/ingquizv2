import {React, useState} from 'react';
import firebase from '../Results/base';
import DashBoard from '../DashBoard/DashBoard';
import NavBar from '../Home/NavBar/NavBar';
import {useMediaQuery} from 'react-responsive';


function Profile(props) {
  const [quiz, setQuiz] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const isSmall = useMediaQuery({query: '(max-width: 768px'});
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
        num_quiz = doc.data().total_quiz;
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
      <NavBar/>
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
                <td>{total != 0 ? Math.round(correct / total) : 0} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
      <DashBoard />
    </div>
  );
}

export default Profile;
