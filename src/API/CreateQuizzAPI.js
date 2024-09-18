import api from '../config/axiosConfig';

export const createQuizz = async (label, type, chapitre, questions) => {
    try {
        const body = {
            data: {
                label: label,
                type: type,
                chapitre: chapitre,
                questions: questions
            }

        };
        const response = await api.post('/quizz/ajouterQuizz', body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const updateQuizz = async (quizId, label, type, chapitre) => {
    try {
        const body = {
            quizz: quizId,
            data: {
                label: label,
                type: type,
                id_chapitre: chapitre
            }

        };
        const response = await api.put('/quizz/updateQuizz', body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const updateQuestionduQuizz = async (label, nombre_bonne_reponse, type, reponses, delReponse, questionId) => {
    try {
        let reponses_body = []
        reponses.map((reponse) => {
            reponses_body.push({
                reponse: reponse.id_reponse,
                delete: delReponse != [] && delReponse.includes(reponse) ? true : false,
                data: { contenu: reponse.contenu, est_bonne_reponse: reponse.est_bonne_reponse }
            })
        })
        const body = {
            question: questionId,
            data: {
                label: label,
                type: type,
                nombre_bonne_reponse: nombre_bonne_reponse,
                reponses: reponses_body
            }

        };
        const response = await api.put('/quizz/updateQuestion', body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const ajouterQuestionAuQuizz = async (label, nombre_bonne_reponse, type, reponses, quizzId) => {
    try {
        const body = {
            quizz: quizzId,
            label: label,
            nombre_bonne_reponse: nombre_bonne_reponse,
            type: type,           
            reponses: reponses

        };
        const response = await api.post('/quizz/ajouterQuestionAuQuizz', body);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

