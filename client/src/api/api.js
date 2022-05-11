import axios from 'axios'

const sneakerAPI = axios.create({
    baseURL: 'http://localhost:4000/sneakers',
})

const shoplistAPI = axios.create({
    baseURL: 'http://localhost:4000/shoplists',
})

const orderAPI = axios.create({
    baseURL: 'http://localhost:4000/order',
})
export const getShoplists = () => shoplistAPI.get(`/`)
export const saveOrder = payload => orderAPI.post(`/`, payload)
export const getOrder = userId => orderAPI.get(`/${userId}`)


const apis = {
    getShoplists,
    saveOrder,
    getOrder
}

export default apis
