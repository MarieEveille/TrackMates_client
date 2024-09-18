import api from '../config/axiosConfig.js';
import { getTokenAndRole } from '../services/Cookie.js';
import axios from 'axios';

export const getQuizzParChap = async (chap_id) => {
    try {
        const body = {
            chapitre: chap_id
        };
        const response = await api.post(`/quizz/quizzForChapter`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const getNoteUtilisateurDonneeAuQuizz = async (quizId) => {
    try {
        const body = {
            quizz: quizId
        };
        const response = await api.post(`/quizz/getNoteUtilisateurDonneeAuQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}


export const EnvoyerNoteQuizz = async (quizId, note) => {
    try{
        const body = {
            quizz: quizId,
            note: note
        };
        const response = await api.post(`/quizz/ajouterNoteUtilisateurPourQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}




export const getListQuizzStatForUser = async () => {
    const body = {

    }
    try {
        const response = await api.get(`/quizz/listQuizzPasser`, body);
        console.log("réponse : ", response);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const getQuestionParQUizz = async (quizz_id) => {
    try {
        const body = {
            quizz: quizz_id
        };
        const response = await api.post(`/quizz/questionsPourQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}




export const getReponsesPourQuestion = async (question_id) => {
    try {
        const body = {
            question: question_id
        };
        const response = await api.post(`/quizz/reponsesPourQuestion`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const handleSubmit = async (quizId, selectedAnswers) => {
    const payload = {
        quizz: quizId,
        data: selectedAnswers.map(idReponse => ({ idReponse }))
    };

    try {
        const response = await api.post('/quizz/ajouterReponseUtilisateurAuQuizz', payload);
        return response.data;
    }
    catch (error) {
        throw error;
    }
        
}

export const getQuizzInfo = async (quizId) => {
    try {
        const body = {
            quizz: quizId
        };

        const response = await api.post(`/quizz/getQuizzInfo`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const getNoteQuizzInfo = async (noteQuizId) => {
    try {
        const body = {
            note_quizz: noteQuizId
        };

        const response = await api.post(`/quizz/getNoteQuizzInfo`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const getStatQuestions = async (noteQuizId) => {
    try {
        const body = {
            note_quizz: noteQuizId
        };

        const response = await api.post(`/quizz/resultatUtilisateurQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}


export const getLastNoteQuizz = async (quizId) => {
    try {
        const body = {
            quizz: quizId
        };

        const response = await api.post(`/quizz/getLastNoteForQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}



export const getListQuizzCreateForUser = async () => {
    const body = {

    }
    try {
        const response = await api.get(`/quizz/listQuizzCreer`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const deleteQuizz = async (quizId) => {
    const body = {
        quizz: quizId
    }
    try {
        const response = await api.post(`/quizz/deleteQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}


export const noteMoyennePourQuizz = async (quizId) => {
    const body = {
        quizz: quizId
    }
    try {
        const response = await api.post(`/quizz/noteMoyennePourQuizz`, body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}