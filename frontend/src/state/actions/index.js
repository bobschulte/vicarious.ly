import { registerUser, loginUser, fetchUser, logoutUser } from './user'
import { fetchAllCities } from './city'
import { relocate, fetchStay } from './stay'

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
    }
}

export default actions