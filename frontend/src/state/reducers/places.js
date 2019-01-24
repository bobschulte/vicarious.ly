// import history from "../history/history";
import { redirect } from '../history/history'


const placesReducer = (state = [], action) => {
    switch (action.type) {
        case 'PLACE_ADDED':
            console.log('PLACE_ADDED ACTION HIT: ', action.place)
            // redirect(`/staybegun`)
            return state
        // case 'SET_STAY':
        //     return action.stay
        default:
            return state
    }
}

export default placesReducer