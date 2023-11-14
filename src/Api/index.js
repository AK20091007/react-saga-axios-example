import axios from "axios";

export const getUserData = (nationality, results) =>{
    return axios({
        method:'get',
        url:`https://randomuser.me/api/?nat=${nationality}&results=${results}`
    })
}