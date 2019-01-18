import { registerUser, loginUser, fetchUser, relocateUser, logoutUser } from './user'
import { fetchCities } from './city'
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
        fetch: fetchCities
    },
    stay: {
        example: exampleStayAction
    }
}

export default actions