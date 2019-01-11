const staysReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_STAY':
            console.log('create stay action triggered')
            return state
        default:
            return state
    }
}

export default staysReducer