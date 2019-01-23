import history from '../history/history'
import { setStorageToken, removeStorageToken, setStorageId, removeStorageId } from './helpers/storage'

const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            setStorageToken(action.token)
            setStorageId(action.userIdSlug)
            history.push(`/users/${action.userIdSlug}`)
            return state
        case 'SET_USER':
            const { user } = action
            if (user.Stays.length === 0 && user.userIdSlug === localStorage.getItem('vicariouslyId')) history.push(`/users/${user.userIdSlug}/relocate`)
            return action.user // { ...state, user: action.user }  <-- if switch to other rootReducer implementation
        case 'INVALID_USER':
            const token = localStorage.getItem('vicariouslyId')
            token ? history.push(`/users/${token}`) : history.push('/')
            return state
        case 'LOGOUT_USER':
            removeStorageToken()
            removeStorageId()
            history.push('/')
            return null
        default:
            return state
    }
}

export default userReducer