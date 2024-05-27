import axios from 'axios';
import {AxiosInstance} from "axios";

export const API_URL = process.env.VUE_APP_API_URL;

const Request = (baseURL: any): AxiosInstance => {
    const request = axios.create({
        baseURL: baseURL,
        withCredentials: true
    });

    request.interceptors.response.use(response => {
        if (response.data) return response.data;
        return response;
    }, async error => {
        if (error && error.response && (error.response.status == 401 || error.response.status == 403)) {
            window.location.replace("/login");
        }
        return Promise.reject(error.response);
    });
    return request;
}
const request = Request(API_URL);
export default request;