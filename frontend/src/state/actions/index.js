import { registerUser, loginUser, fetchUser, relocateUser, logoutUser } from './user'
import { fetchAllCities } from './city'
import { endStay, beginStay } from './stay'

const actions = {
    user: {
        register: registerUser,
        login: loginUser,
        fetch: fetchUser,
        relocate: relocateUser,
        logout: logoutUser
    },
    city: {
        fetchAll: fetchAllCities
    },
    stay: {
        end: endStay,
        begin: beginStay
    }
}

export default actions