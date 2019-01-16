import defaultState from './helpers/defaultState'
import history from '../history/history'

const userReducer = (state=defaultState, action) => {
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
        case 'LOGIN_USER':
            // apiCall('POST', '/login', action.user)
            //     .catch(err => console.log(err))
            //     .then(res => res.status === 200 ? res.json() : { errors: [{ msg: "Invalid credentials" }] })
            //     .then(res => {
            //         if (res.errors) {
            //             alert(res.errors.map(err => err.msg).join(', '))
            //             return state
            //         } else {
            //             console.log('registration successful, your token: ', res.token)
            //             localStorage.setItem('vicariouslyToken', res.token)
            //             return state
            //         }
            //     })
            return state
        case 'GET_USER_DATA':
            return state
        case 'SET_USER_DATA_IN_STATE':
            console.log('reducer: ', action.user)
            return action.user
        case 'RELOCATE_USER':
            console.log('relocate user action triggered for id: ', action.userId)
            return state
        case 'LOGOUT_USER':
            localStorage.removeItem('vicariouslyToken')
            return defaultState
        default:
            return state
    }
}

export default userReducer