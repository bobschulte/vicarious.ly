const travelersReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_TRAVELER':
            console.log('create traveler action triggered')
            return state
        case 'RELOCATE_TRAVELER':
            console.log('relocate traveler action triggered')
            return state
        default:
            return state
    }
}

export default travelersReducer