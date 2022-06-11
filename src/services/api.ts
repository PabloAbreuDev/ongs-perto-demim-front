import axios from "axios";

const BASE_URL = 'http://localhost:3001/api'

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


export default api