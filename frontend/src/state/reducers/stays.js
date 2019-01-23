import history from "../history/history";

const staysReducer = (state = [], action) => {
    switch(action.type) {
        case 'VIEW_STAY':
            history.push(`/users/${action.userIdSlug}/stays/${action.stay.id}`)
            return action.stay
        // case 'SET_STAY':
        //     return action.stay
        default:
            return state
    }
}

export default staysReducer