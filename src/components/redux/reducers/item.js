const initialState = {
    itemList: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITEM_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false, 
                isError: false
            }
        case "GET_ITEM_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "GET_ITEM_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                itemList: action.payload.data.result,
            }
        case "POST_ITEM_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false, 
                isError: false
            }
        case "POST_ITEM_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "POST_ITEM_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                itemList: action.payload.data.result,
            }
        default:
            return state
    }
}

export default item