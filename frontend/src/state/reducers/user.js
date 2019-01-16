import history from '../history/history'

const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            // apiCall('POST', '/register', action.user)
            //     .then(res => res.json())
            //     .then(res => {
            //         if (res.errors) {
            //             console.log(res.errors)
            //             res.errors.map(error => console.log(error.msg))
            //             return state
            //         } else {
            //             console.log('registration successful, your token: ', res.token)
            //             localStorage.setItem('vicariouslyToken', res.token)
            //             return state
            //         }
            //     })
            return state
        case 'SET_TOKEN':
            localStorage.setItem('vicariouslyToken', action.token)
            history.push('/')
            return state
        case 'SET_USER':
            return action.user // { ...state, user: action.user }  <-- if switch to other rootReducer implementation
        case 'RELOCATE_USER':
            console.log('relocate user action triggered for id: ', action.userId)
            return state
        case 'LOGOUT_USER':
            localStorage.removeItem('vicariouslyToken')
            history.push('/login')
            return state
        default:
            return state
    }
}

export default userReducer