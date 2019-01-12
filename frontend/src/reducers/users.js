const usersReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_USER':
            console.log('create user action triggered')
            return state
        case 'RELOCATE_USER':
            console.log('relocate user action triggered')
            return state
        default:
            return state
    }
}

export default usersReducer