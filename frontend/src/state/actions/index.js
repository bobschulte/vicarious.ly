import { registerUser, loginUser, fetchUser, relocateUser, logoutUser } from './user'
import { exampleCityAction } from './city'
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
        example: exampleCityAction
    },
    stay: {
        example: exampleStayAction
    }
}

export default actions