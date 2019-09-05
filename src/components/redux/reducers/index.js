import { combineReducers } from 'redux'

// import all reducers
import item from './item'
import user from './user'
import cart from './cart'

const appReducer = combineReducers({
    item,
    user,
    cart
})

export default appReducer