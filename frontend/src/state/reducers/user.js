import history from '../history/history'
import { storageId } from '../../helpers/storageItems'

const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            localStorage.setItem('vicariouslyToken', action.token)
            localStorage.setItem('vicariouslyId', action.id)
            history.push(`/${action.id}`)
            return state
        case 'SET_USER':
            return action.user // { ...state, user: action.user }  <-- if switch to other rootReducer implementation
        case 'RELOCATE_USER':
            console.log('relocate user action triggered for id: ', action.userId)
            history.push(`/users/${storageId}/relocate`)
            return state
        case 'LOGOUT_USER':
            localStorage.removeItem('vicariouslyToken')
            localStorage.removeItem('vicariouslyId')
            history.push('/login')
            return null
        default:
            return state
    }
}

export default userReducer