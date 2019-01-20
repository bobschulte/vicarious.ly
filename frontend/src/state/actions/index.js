import { registerUser, loginUser, fetchUser, logoutUser } from './user'
import { fetchAllCities } from './city'
import { relocate } from './stay'

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
        relocate: relocate
    }
}

export default actions