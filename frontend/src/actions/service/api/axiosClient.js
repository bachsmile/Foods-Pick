import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "AAccess-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Credentials": true,
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use( async (config) =>{
    return config;
});
axiosClient.interceptors.response.use( async (response) =>{
    if(response && response.data){
        return response.data
    }
    return response;
},(error)=>{
    throw error;
});
export default axiosClient;
