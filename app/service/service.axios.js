import axios from 'axios';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const baseUrl = 'https://data-show-solar-panels-g35sbyt74q-uc.a.run.app';

export async function post(url, data) {
    try {
        const response = await axios.post(`${baseUrl}${url}`, { ...data }, { defaultHeaders });
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