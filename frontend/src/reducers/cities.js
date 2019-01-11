const citiesReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_CITY':
            console.log('create city action triggered')
            return state
        default:
            return state
    }
}

export default citiesReducer