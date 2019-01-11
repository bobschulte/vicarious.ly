import { combineReducers } from 'redux'
import travelers from './travelers'
import cities from './cities'
import stays from './stays'

export default combineReducers({
    travelers,
    cities,
    stays
})