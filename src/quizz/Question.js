import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import "@fontsource/nanum-pen-script";
import Header from '../composent/Header.js';

import './Question.css';
import StyledButton from '../composent/StyledBouton.js';

function Question() {
    const navigate = useNavigate();
    const [questionType, setQuestionType] = useState('qcm2');
    // Modifiez pour utiliser un tableau afin de gérer plusieurs sélections
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const getIndicationText = () => {
        switch (questionType) {
            case 'qcm1':
                return 'Choisissez la bonne réponse';
            case 'qcm2':
                return 'Choisissez les bonnes réponses';
            case 'vrai':
                return 'Selectionner la réponse vraie';
            case 'faux':
                return 'Selectionner la réponse fausse';
            default:
                return '';
        }
    };

    const handleAnswerSelect = (answerId) => {
        if (questionType === 'qcm2') {
            // Pour 'qcm2', permettez la sélection de plusieurs réponses
            if (selectedAnswers.includes(answerId)) {
                // Si la réponse est déjà sélectionnée, retirez-la
                setSelectedAnswers(selectedAnswers.filter(id => id !== answerId));
            } else {
                // Sinon, ajoutez la réponse au tableau
                setSelectedAnswers([...selectedAnswers, answerId]);
            }
        } else {
            // Pour les autres types, gardez une seule sélection
            setSelectedAnswers([answerId]);
        }
    };

    return (
        <div className='background-question'>
            <div className='base_container_quizz_question'>
                <h1 className='quizz-title'>Quizz</h1>
                <div className='question-quest-container'>
                    <h3 className='Question_titre'>1. Quel est la couleur de la pomme ?</h3>
                    <p className='indication'>{getIndicationText()}</p>
                    <div className='reponse-container'>
                        <button id='1' className={`reponse ${selectedAnswers.includes('1') ? 'selected' : ''}`} onClick={() => handleAnswerSelect('1')}>Rouge</button>
                        <button id='2' className={`reponse ${selectedAnswers.includes('2') ? 'selected' : ''}`} onClick={() => handleAnswerSelect('2')}>Vert</button>
                        <button id='3' className={`reponse ${selectedAnswers.includes('3') ? 'selected' : ''}`} onClick={() => handleAnswerSelect('3')}>Bleu</button>
                        <button id='4' className={`reponse ${selectedAnswers.includes('4') ? 'selected' : ''}`} onClick={() => handleAnswerSelect('4')}>Jaune</button>
                    </div>
                </div>
                <div className='button-container'>
                    <StyledButton onClick={()=> navigate('/')} color={"secondary"} content={"Retour"} className='btn_retour button-connection'></StyledButton>
                    <StyledButton onClick={()=> navigate('/')} color={"primary"} content={"Valider"} className='btn_valider button-connection'></StyledButton>
                </div>
            </div>
        </div>
    );
}

export default Question;
