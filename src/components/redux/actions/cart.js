import axios from 'axios'
const url = 'https://restaurant-app-12.herokuapp.com/cart/'

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

export const plusCart = (id_cart) => {
    return {
        type: 'PLUS_CART',
        payload: axios.post(`${url}quantityPlus` + id_cart, {}, {
            headers: {'authorization': 'khusni'}
        })
    }
}

export const minusCart = (id_cart) => {
    return {
        type: 'MINUS_CART',
        payload: axios.post(`${url}quantityPlus` + id_cart, {}, {
            headers: {'authorization': 'khusni'}
        })
    }
}

export const removeCart = (id_cart) => {
    return {
        type: 'REMOVE_CART',
        payload: axios.delete(`${url}` + id_cart, {
            headers: {'authorization': 'khusni'}
        })
    }
}