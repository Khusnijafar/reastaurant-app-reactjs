import axios from 'axios'
const url = 'http://localhost:3030/users/'

export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${url}login`, data, {
            headers: {'authorization': 'khusni'}
        })
    }
}

// export const getUser = () =>