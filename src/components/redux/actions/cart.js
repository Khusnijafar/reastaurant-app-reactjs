import axios from 'axios'
const url = 'http://localhost:3030/cart/'

export const getCart = () => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${url}`, {
            headers: {'authorization': 'khusni'}
        })
    }
}

export const addCart = (data) => {
    return {
        type: 'POST_CART',
        payload: axios.post(`${url}`, data, {
            headers: {'authorization': 'khusni'}
        })
    }
}

// export const quantityPlus = () => {
//     return {
//         type: 'PATC'
//     }
// }