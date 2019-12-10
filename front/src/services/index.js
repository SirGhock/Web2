import axios from "axios";

const api = axios.create({
    
    baseURL: "https://post-twit-api-v2.herokuapp.com/posts/"
});



export default api;