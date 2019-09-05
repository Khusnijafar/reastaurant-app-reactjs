const initialState = {
    cartList: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false, 
                isError: false
            }
        case "GET_CART_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "GET_CART_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                cartList: action.payload.data.result,
            }
        case "POST_CART_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false, 
                isError: false
            }
        case "POST_CART_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "POST_CART_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                cartList: action.payload.data.result,
            }
        default:
            return state
    }
}

export default cart