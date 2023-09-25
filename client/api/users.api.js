import axios from 'axios'

const usersAPI = axios.create({
  baseURL: 'http://localhost:8000/api/users/',
})

export const getAllUsers = () => usersAPI.get('/')
export const newUser = user => usersAPI.post('/', user)
