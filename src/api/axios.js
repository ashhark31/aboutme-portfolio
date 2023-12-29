import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://aboutme-api-microservice.onrender.com'
    // baseURL: 'http://localhost:3100'
})

export default instance