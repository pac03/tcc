import axios from "axios"

const api = axios.create({

    //baseURL: 'http://www.webapiesperanca.online/webApi/'
    baseURL: 'http://localhost:5173/academico/api/v1/'
})

export default api