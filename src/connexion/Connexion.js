//dependances
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//modules
import { Authenticate } from './UserAPI.js';
import { createCookie } from '../services/Cookie.js';
import {Link, Box} from '@mui/material';
import './Connexion.css';
import "@fontsource/nanum-pen-script";
import Header from '../composent/Header.js';



function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await Authenticate(username, password)
      .then(data => {
        const { username, token, days, role } = data;
        if (token) {
          createCookie(token, days, role);
          navigate('/secure_page');
        } else {
          console.log("Erreur de connexion");
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'authentification :', error);
      });

  };

  const toRegister = async (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className='background'>
      <Header></Header>
      <div className='base-container'>
        <h1 style={{ fontFamily: "Nanum Pen Script", fontSize: "4em", margin: "0px" }}>Connexion</h1>
        <div className='sub-container'>
          <input
            className='input-connexion'
            style={{ fontFamily: "Nanum Pen Script" }}
            type="text"
            id="username"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='input-connexion'
            style={{ fontFamily: "Nanum Pen Script"}}
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link style={{fontSize:"2em"}} color="#f5f5f5" href="/forgot_password" underline='always'>Mot de passe oublie?</Link>
        </div>
        <div className='buttons-container'>
          <button 
            style={{ fontFamily: "Nanum Pen Script"}}
            className='reg-button button-connection'
            onClick={toRegister}>Inscription</button>
          <button
            style={{ fontFamily: "Nanum Pen Script" }}
            className='valid-button button-connection'
            onClick={handleLogin}>Valider</button>
        </div>

      </div>

    </div>
  );
} export default Connexion;
