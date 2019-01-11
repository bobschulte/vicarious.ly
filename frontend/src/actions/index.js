import { createCity } from './cities'
import { createUser, relocateUser } from './users'
import { createStay } from './stays'

const actions = {
    city: {
        create: createCity
    },
    user: {
        create: createUser,
        relocate: relocateUser
    },
    stay: {
        create: createStay
    }
}

export default actions