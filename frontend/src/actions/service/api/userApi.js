import axiosClient from "./axiosClient";

const UserAPi = {
    getAll: () =>{
        const url='/users/list';
        return axiosClient.get(url)
    },
    postLogin: (params) =>{
        const url='/users/login';
        return axiosClient.post(url,params)
    }
}
export default UserAPi