import { combineReducers } from 'redux'
import user from './user'
import cities from './cities'
import stays from './stays'

const rootReducer = combineReducers({
    user,
    // cities,
    // stays
})

export default rootReducer


// if i need access across reducers to other pieces of state, implement the below instead

// const rootReducer = (state, action) => {
//     state = user(state, action)
//     state = cities(state, action)
//     state = stays(state, action)
//     return state
// }