import axios from 'axios'

const sexAPI = axios.create({
    baseURL: 'http://localhost:4000/sexes',
})

const shoplistAPI = axios.create({
    baseURL: 'http://localhost:4000/shoplists',
})

const orderAPI = axios.create({
    baseURL: 'http://localhost:4000/order',
})
// fetch("https://randomuser.me/api/?results=20")

export const createSex = payload => sexAPI.post(`/`, payload)
export const getSexes = () => sexAPI.get(`/`)
export const updateSex = (id, payload) => sexAPI.put(`/${id}`, payload)
export const deleteSex = id => sexAPI.delete(`/${id}`)
export const getSexById = id => sexAPI.get(`/${id}`)
export const getShoplists = () => shoplistAPI.get(`/`)
export const saveOrder = payload => orderAPI.post(`/`, payload)
export const getOrder = userId => orderAPI.get(`/${userId}`)


const apis = {
    createSex,
    getSexes,
    updateSex,
    deleteSex,
    getSexById,
    getShoplists,
    saveOrder,
    getOrder
}

export default apis
