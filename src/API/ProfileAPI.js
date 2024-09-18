import api from '../config/axiosConfig';


export const getUserInfo = async () => {
    const body = {

    }
    try {
        const response = await api.get(`/user/getUserInfo`, body);
        console.log("réponse : ", response);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const updateUserProfilePicture = async (image) => {

    try {
        const response = await api.put(`/user/updateUserProfilePicture`, image);
        console.log("réponse : ", response);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}