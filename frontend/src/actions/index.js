import { createCity } from './cities'
import { createTraveler, relocateTraveler } from './travelers'
import { createStay } from './stays'

const actions = {
    city: {
        create: createCity
    },
    traveler: {
        create: createTraveler,
        relocate: relocateTraveler
    },
    stay: {
        create: createStay
    }
}

export default actions