import { redirect } from '../history/history'

const staysReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_STAY':
            redirect(`/users/${action.userIdSlug}/stays/${action.stay.id}`)
            return action.stay
        default:
            return state
    }
}

export default staysReducer