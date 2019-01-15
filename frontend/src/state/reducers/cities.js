const citiesReducer = (state = [], action) => {
    switch(action.type) {
        case 'EXAMPLE_CITY_ACTION':
            console.log('example city action triggered')
            return state
        default:
            return state
    }
}

export default citiesReducer