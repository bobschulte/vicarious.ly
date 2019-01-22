import history from "../history/history";

const staysReducer = (state = [], action) => {
    switch(action.type) {
        case 'BEGIN_STAY':
            history.push(`/staybegun`)
            return state
        default:
            return state
    }
}

export default staysReducer