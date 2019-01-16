const staysReducer = (state = [], action) => {
    switch(action.type) {
        case 'EXAMPLE_STAY_ACTION':
            console.log('example stay action triggered')
            return state
        default:
            return state
    }
}

export default staysReducer