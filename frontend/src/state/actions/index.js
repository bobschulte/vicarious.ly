import { registerUser, loginUser, fetchUser, relocateUser, logoutUser } from './user'
import { fetchAllCities } from './city'
import { exampleStayAction } from './stay'

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
        example: exampleStayAction
    }
}

export default actions