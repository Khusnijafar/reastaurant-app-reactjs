import axios from 'axios'
const url = 'https://restaurant-app-12.herokuapp.com/users'

export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${url}/login`, data, {
            headers: {'authorization': 'khusni'}
        })
    }
}

// export const getUser = () =>