import axios from 'axios'
const url = 'https://restaurant-app-12.herokuapp.com/item'

export const getItem = () => {
    return {
        type: 'GET_ITEM',
        payload: axios.get(`${url}`, {
            headers: {'authorization': 'khusni'}
        })
    }
}

export const addItem = (dataFile) => {
    return {
        type: 'POST_ITEM',
        payload: axios.post(`${url}`, dataFile, {
            headers: {'authorization': 'khusni'}
        })
    }
}