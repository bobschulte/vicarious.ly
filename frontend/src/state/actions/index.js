import { createUser, loginUser, fetchUser, relocateUser, logoutUser } from './user'
import { exampleCityAction } from './city'
import { exampleStayAction } from './stay'

const actions = {
    user: {
        login: loginUser,
        fetch: fetchUser,
        logout: logoutUser,
        create: createUser,
        relocate: relocateUser
    },
    city: {
        example: exampleCityAction
    },
    stay: {
        example: exampleStayAction
    }
}

export default actions