import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from 'C:\\Users\\lollo\\quiz\\src\\Components\\Context\\AuthContext.js';
import { Link, useHistory } from "react-router-dom";
import './Dash.css'
import {useMediaQuery} from 'react-responsive';

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const isSmall = useMediaQuery({query: '(max-width:1224px)'});

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card className="text-center" style={{width : isSmall ? '100%' : '30%' , margin: '0 auto'}}>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong >Email:</strong> {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <button className = 'home-btn' onClick={handleLogout}>Log Out</button>
        <Link className="home-btn" to="/home">Home</Link>
      </div>
    </>
  );
}
