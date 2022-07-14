import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://bookifybooking.herokuapp.com/api"
})