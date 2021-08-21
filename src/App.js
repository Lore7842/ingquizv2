import { React } from "react";
import { AuthProvider } from "./Components/Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import About from "./Components/Pages/About/About";
import Analisi2 from "./Components/Pages/Analisi2/Analisi2";
import Chimica from "./Components/Pages/Chimica/Chimica";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Elettronica from "./Components/Pages/Elettronica/Elettronica";
import Fisica2 from "./Components/Pages/Fisica2/Fisica2";
import Home from "./Components/Pages/Home/Home";
import Fisiologia from "./Components/Pages/Fisiologia/Fisiologia";
import MenuResp from "./Components/Pages/Home/Menu/MenuResp";
import ProfileResp from "./Components/Pages/Profile/ProfileResp";
// import LandingPage from "./Components/Pages/LandingPage/Landing";  da implementare se c'è tempo
import Metodi from "./Components/Pages/Metodi/Metodi";
import Profile from "./Components/Pages/Profile/Profile";
import LogIn from "./Components/Pages/LogIn/LogIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import { ProponiDomande } from "./Components/Pages/ProponiDomande/ProponiDomande";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Profile} />
            <PrivateRoute exact path="/quiz" component={Profile} />
            <PrivateRoute exact path="/r" component={ProfileResp} />
            <PrivateRoute exact path="/homeResp" component={MenuResp} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <PrivateRoute exact path="/Fisiologia" component={Fisiologia} />
            <Route path="/Chimica" component={Chimica} />
            <Route path="/Metodi" component={Metodi} />
            <Route path="/Fisica2" component={Fisica2} />
            <Route path="/Analisi2" component={Analisi2} />
            <Route path="/Elettronica" component={Elettronica} />
            <Route path="/stats" component={Profile} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/questions" component={ProponiDomande} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
