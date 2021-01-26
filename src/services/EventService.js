import axios from 'axios'

const apliClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KarimeEsparza/mock-up-db',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apliClient.get('/events')
    },
    getEvent(id) {
        return apliClient.get('/events/' + id)
    }
}