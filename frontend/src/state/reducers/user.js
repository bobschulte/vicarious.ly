import history from '../history/history'
import { setStorageToken, removeStorageToken, setStorageId, removeStorageId } from './helpers/storage'

const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            setStorageToken(action.token)
            setStorageId(action.userIdSlug)
            history.push(`/${action.userIdSlug}`)
            return state
        case 'SET_USER':
            if (action.user.Stays.length === 0) history.push(`/users/${localStorage.getItem("vicariouslyId")}/relocate`)
            return action.user // { ...state, user: action.user }  <-- if switch to other rootReducer implementation
        case 'INVALID_USER':
            const token = localStorage.getItem('vicariouslyId')
            token ? history.push(`/users/${token}`) : history.push('/')
            return state
        case 'RELOCATE_USER':
            console.log('relocate user action triggered for id: ', action.userId)
            console.log('moving user to: ', action.city)
            return state
        case 'LOGOUT_USER':
            removeStorageToken()
            removeStorageId()
            history.push('/login')
            return null
        default:
            return state
    }
}

export default userReducer