import axios from "axios";
import { BASE_API_URL } from "./constants";

export const publicAxiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

publicAxiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => error.data
)