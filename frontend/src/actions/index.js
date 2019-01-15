import { createUser, loginUser, getUserData, relocateUser, logoutUser } from './user'
import { exampleCityAction } from './city'
import { exampleStayAction } from './stay'

const actions = {
    user: {
        login: loginUser,
        logout: logoutUser,
        getData: getUserData,
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