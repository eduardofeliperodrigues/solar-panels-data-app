import axios from 'axios';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const baseUrl = 'https://flask-api-upx06.web.app/';

export async function post(url, payload) {
    try {
        const response = await axios.post(`${baseUrl}${url}`, { ...payload }, { defaultHeaders });
        return response.data;
    } catch (error) {
        const errorResponse = error.response.data;
        if (errorResponse.message) {
            throw new Error(errorResponse.message);
        } else {
            throw new Error('algo deu errado');
        }
    }
}

export async function get(url) {
    try {
        const response = await axios.get(`${baseUrl}${url}`);
        return response.data;
    } catch (error) {
        const errorResponse = error.response.data;
        if (errorResponse.message) {
            throw new Error(errorResponse.message);
        } else {
            throw new Error('algo deu errado');
        }
    }
}