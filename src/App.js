import "./App.css";
import "../src/Components/NavBar/NavBar.css";
import "../src/Components/Menu/Menu.scss";
import "../src/Components/Pages/fisio.css";
import { React } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Components/Context/AuthContext";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SignUp from "./Components/SignUp/SignUp";

import {
  Fisiologia,
  HomePage,
  AboutPage,
  Analisi2,
  Fisica2,
  Chimica,
  Elettronica,
  Metodi,
  Stats,
  ProfilePage,
} from "./Components/Pages/Pages";
import { ContactUs } from "./Components/Pages/ContactUs/ContactUs";
import { ProponiDomande } from "./Components/Pages/ProponiDomande/ProponiDomande";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={ProfilePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/home" component={HomePage} />
              <PrivateRoute exact path="/Fisiologia" component={Fisiologia} />
              <Route path="/Chimica" component={Chimica} />
              <Route path="/Metodi" component={Metodi} />
              <Route path="/Fisica2" component={Fisica2} />
              <Route path="/Analisi2" component={Analisi2} />
              <Route path="/Elettronica" component={Elettronica} />
              <Route path="/stats" component={Stats} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/questions" component={ProponiDomande} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
