import { apiCall } from './helpers/apiCall'
import { robert } from './helpers/robert'

const defaultState = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    Stays: []
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            apiCall('POST', '/register', action.user)
                .then(res => res.json())
                .then(res => {
                    if (res.errors) {
                        console.log(res.errors)
                        res.errors.map(error => console.log(error.msg))
                        return state
                    } else {
                        console.log('registration successful, your token: ', res.token)
                        localStorage.setItem('token', res.token)
                        return state
                    }
                })
            return state
        case 'LOGIN_USER':
            apiCall('POST', '/register', action.user)
                .then(res => res.json())
                .then(res => {
                    if (res.errors) {
                        res.errors.map(error => console.log(error.msg))
                        return state
                    } else {
                        console.log('registration successful, your token: ', res.token)
                        localStorage.setItem('token', res.token)
                        return state
                    }
                })
            return state
        case 'GET_USER_DATA':
            // apiCall('GET', '/users')
            //     .then(res => {
            //         if (res.status !== 200) {
            //             console.log(`${res.status}: ${res.statusText}`)
            //             return state
            //         }
            //     })
            //     .then(res => res.json())
            //     .then(res => {
            //         // Figure this out... thunk?
            //     })
            return robert
        case 'RELOCATE_USER':
            console.log('relocate user action triggered for id: ', action.userId)
            return state
        case 'LOGOUT_USER':
            localStorage.removeItem('token')
            return defaultState
        default:
            return state
    }
}

export default userReducer