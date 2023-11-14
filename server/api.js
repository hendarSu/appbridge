import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_CORE
})

export const postRegistrtion = async ({
    name, email, password, confirmationPassword
}) => {
    try {
        const response = await api.post('/api/v1/registration', {
            name,
            email,
            password,
            confirmationPassword
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const postLogin = async ({
     email, password
}) => {
    try {
        const response = await api.post('/api/v1/auth/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        if (error) {
            return error.response?.data;
        }
    }
}