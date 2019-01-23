import history from "../history/history";

const staysReducer = (state = [], action) => {
    switch(action.type) {
        case 'BEGIN_STAY':
            history.push(`/users/${action.userIdSlug}`)
            return action.stay
        // case 'SET_STAY':
        //     return action.stay
        default:
            return state
    }
}

export default staysReducer