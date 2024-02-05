import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remplacez "Switch" par "Routes"
import PrivateRoute from './services/PrivateRoutes';
import PrivateRoute2 from './services/PrivateRoutes2';
import Principal from './principal/Principal';
import Connexion from './connexion/Connexion';
import Register from './connexion/Register';
import Carte_mental from './carte_mental/Carte_mental';
import TestHeader from './test/TestHeader'
import SecurePage from './secure_page/securePage';
import Profile from './profile/Profile';
import Study from './STUDY/Study';
import Forum from './question/Forum';
import Quizz_principale from './quizz/Quizz_principale';

function App() {
  return (
    <Router>
      <Routes> {/* Utilisez la composante "Routes" au lieu de "Switch" */}
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quizz" element={/*<PrivateRoute> */<Quizz_principale /> /*</PrivateRoute>*/} />
        <Route path="/carte_mental" element={<PrivateRoute><Carte_mental /></PrivateRoute>} />
        <Route path="/etude" element={/* <PrivateRoute> */<Study/>/* </PrivateRoute> */}/>
        <Route path="/forum" element={/* <PrivateRoute> */<Forum/>/* </PrivateRoute> */}/>
        <Route path="/secure_page" element={<PrivateRoute><SecurePage /></PrivateRoute>} />
        <Route path="/testHeader" element={<TestHeader />} /> 
        <Route path='/secure_page2' element={<PrivateRoute2><SecurePage /></PrivateRoute2>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/" element={<Principal />} /> 
      </Routes>
    </Router>
  );
}

export default App;
