const travelersReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_TRAVELER':
            console.log('create traveler event triggered')
            return state
        case 'RELOCATE_TRAVELER':
            console.log('relocate traveler event triggered')
            return state
        default:
            return state
    }
}

export default travelersReducer