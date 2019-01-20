import { registerUser, loginUser, fetchUser, endStay, relocateUserTo, logoutUser } from './user'
import { fetchAllCities } from './city'
// import {  } from './stay'

const actions = {
    user: {
        register: registerUser,
        login: loginUser,
        fetch: fetchUser,
        endStay: endStay,
        relocateTo: relocateUserTo,
        logout: logoutUser
    },
    city: {
        fetchAll: fetchAllCities
    },
    // stay: {
        
    // }
}

export default actions