import { registerUser, loginUser, fetchUser, logoutUser } from './user'
import { fetchAllCities } from './city'
import { relocate, fetchStay } from './stay'
import { addPlace } from './places'

const actions = {
    user: {
        register: registerUser,
        login: loginUser,
        fetch: fetchUser,
        logout: logoutUser
    },
    city: {
        fetchAll: fetchAllCities
    },
    stay: {
        relocate: relocate,
        // fetch: fetchStay
    },
    places: {
        add: addPlace
    }
}

export default actions