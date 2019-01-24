import { registerUser, loginUser, fetchUser, logoutUser } from './user'
import { fetchAllCities } from './city'
import { relocate, viewStay } from './stay'
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
        view: viewStay
    },
    places: {
        add: addPlace
    }
}

export default actions