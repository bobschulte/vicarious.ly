import history from '../history/history'
import { setStorageToken, removeStorageToken, setStorageId, removeStorageId } from './helpers/storage'

const userReducer = (state=null, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            setStorageToken(action.token)
            setStorageId(action.id)
            history.push(`/${action.id}`)
            return state
        case 'SET_USER':
            return action.user // { ...state, user: action.user }  <-- if switch to other rootReducer implementation
        case 'RELOCATE_USER':
            console.log('relocate user action triggered for id: ', action.userId)
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