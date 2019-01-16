import { combineReducers } from 'redux'
import user from './manageUser'
import cities from './cities'
import stays from './stays'

export default combineReducers({
    user,
    // cities,
    // stays
})