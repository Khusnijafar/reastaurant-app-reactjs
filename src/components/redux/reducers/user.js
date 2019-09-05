const initalState = {
    userList: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
    token: '',
    id_user: 1,
    username: '',
}

const user = (state = initalState, action) => {
    switch (action.type) {
        case "LOGIN_USER_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false, 
                isError: false
            }
        case "LOGIN_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "LOGIN_USER_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                id_user: action.payload.data.result.id_user,
                username: action.payload.data.result.username,
                token: action.payload.data.result.token
            }
        default:
            return state
    }
}

export default user