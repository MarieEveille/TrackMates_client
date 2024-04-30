import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remplacez "Switch" par "Routes"
import PrivateRoute from './services/PrivateRoutes';
import PrivateRoute2 from './services/PrivateRoutes2';
import Principal from './principal/Principal';
import Connexion from './connexion/Connexion';
import Register from './connexion/Register';
import Carte_mental from './carte_mental/Carte_mental';
import SecurePage from './secure_page/securePage';
import Profile from './profile/Profile';
import Study from './STUDY/Study';
import Forum from './forum/Forum';
import Quizz_principale from './quizz/Quizz_principale';
import CreateQuizz from './quizz/CreateQuizz';
import Question from './quizz/Question';
import Layout from './composent/Layout';
import Ue from './ue/Ue';
import QuestionHandler from './quizz/QuestionHandler';
import QuizzFin from './quizz/QuizzFin';
import { QuizProvider } from './quizz/QuizContext';


function App() {
  return (
    <QuizProvider>
    <Router>
      <Routes> {/* Utilisez la composante "Routes" au lieu de "Switch" */}
        <Route path="/connexion" element={<Layout><Connexion /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/ue/:id" element={<PrivateRoute><Layout><Ue /></Layout></PrivateRoute>} />
        <Route path="/quizz/:id" element={/*<PrivateRoute> */<Layout><Quizz_principale /> </Layout>/*</PrivateRoute>*/} />
        <Route path="/carte_mental" element={/* <PrivateRoute> */<Layout><Carte_mental /></Layout>/* </PrivateRoute> */} />
        <Route path="/etude/:id" element={/* <PrivateRoute> */<Layout><Study/></Layout>/* </PrivateRoute> */}/>
        <Route path="/forum/:id" element={/* <PrivateRoute> */<Layout><Forum/></Layout>/* </PrivateRoute> */}/>
        <Route path="/quiz-completed/:quizId" element={<PrivateRoute><Layout><QuizzFin /></Layout></PrivateRoute>} />
        <Route path="/create_quizz" element={/* <PrivateRoute> */<Layout><CreateQuizz/></Layout>/* </PrivateRoute> */}/>
        <Route path="/quiz/:quizId/question/:questionId" element={/* <PrivateRoute> */<Layout><Question /></Layout>/* </PrivateRoute> */}/>
        <Route path="/quiz/:quizId/question-handler" element={<QuestionHandler />} />
        <Route path="/secure_page" element={/* <PrivateRoute> */<Layout><SecurePage /></Layout>/* <PrivateRoute> */} />
        <Route path="/profile" element={/*<PrivateRoute>*/<Layout><Profile /></Layout>/*</PrivateRoute> />*/}/>
        <Route path="/" element={<Layout><Principal /></Layout>} /> 
      </Routes>
    </Router>
    </QuizProvider>
  );
}

export default App;
