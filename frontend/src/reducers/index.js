import { combineReducers } from 'redux'
import users from './users'
import cities from './cities'
import stays from './stays'

export default combineReducers({
    users,
    cities,
    stays
})