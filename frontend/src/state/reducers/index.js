import { combineReducers } from 'redux'
import user from './user'
// import cities from './cities'
// import stays from './stays'

const rootReducer = combineReducers({
    user,
    // cities,
    // stays
})

export default rootReducer