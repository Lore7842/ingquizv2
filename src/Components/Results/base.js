import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyC2ybkJVzSufq7PmVSbWBTUCKNqjFTgJt0",
  authDomain: "react-auth-8c230.firebaseapp.com",
  projectId: "react-auth-8c230",
  storageBucket: "react-auth-8c230.appspot.com",
  messagingSenderId: "586214538364",
  appId: "1:586214538364:web:e63d9ce98de46029dbddf9",
  measurementId: "G-FR7Y560WZE",
};

const c = firebase.initializeApp(firebaseConfig);
export const auth = c.auth()
export default firebase;
