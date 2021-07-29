import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import "./App.css";
import "../src/Components/NavBar/NavBar.css";
import "../src/Components/Menu/Menu.scss";
import "../src/Components/Pages/fisio.css";
import { React, useEffect } from "react";
import { ScriptTag } from "react-script-tag";
import { Helmet } from "react-helmet";
import { useState } from "react";
import {Fisiologia, HomePage, AboutPage, Analisi2, Fisica2, Chimica, Elettronica, Metodi} from './Components/Pages/Pages'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/Fisiologia" component={Fisiologia} />
        <Route path="/Chimica" component={Chimica} />
        <Route path="/Metodi" component={Metodi} />
        <Route path="/Fisica2" component={Fisica2} />
        <Route path="/Analisi2" component={Analisi2} />
        <Route path="/Elettronica" component={Elettronica} />
      </div>
    </Router>
  
  );
}

export default App;
