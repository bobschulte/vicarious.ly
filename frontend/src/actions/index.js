import { createCity } from './cities'
import { createUser, loginUser, getUserData, relocateUser, logoutUser } from './user'
import { createStay } from './stays'

const actions = {
    user: {
        login: loginUser,
        logout: logoutUser,
        getData: getUserData,
        create: createUser,
        relocate: relocateUser
    },
    city: {
        create: createCity
    },
    stay: {
        create: createStay
    }
}

export default actions