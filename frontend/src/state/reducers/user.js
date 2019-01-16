import history from '../history/history'

const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
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
            return null
        default:
            return state
    }
}

export default userReducer