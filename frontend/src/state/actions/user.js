import apiCall from './helpers/apiCall'

const loginUserWith = (userIdSlug, token) => {
  return {
    type: 'LOGIN_USER',
    token,
    userIdSlug
  }
}

export const registerUser = user => {
  return dispatch => {
    return apiCall('POST', '/register', user)
      .then(res => {
        if (res.errors) {
          alert('Invalid Registration Data')
        } else {
          dispatch(loginUserWith(res.userIdSlug, res.token))
        }
      })
  }
};

export const loginUser = user => {
  return dispatch => {
    return apiCall('POST', '/login', user)
      .then(res => {
        if (res.error) {
          alert('Invalid credentials')
        } else {
          dispatch(loginUserWith(res.userIdSlug, res.token))
        }
      })
  }
}

const setUser = user => {
  return {
    type: 'SET_USER',
    user
  }
}

const invalidUser = () => {
  return {
    type: 'INVALID_USER'
  }
}

export const fetchUser = userIdSlug => {
  return (dispatch) => {
    return apiCall("GET", `/users/${userIdSlug}/${localStorage.getItem('vicariouslyId')}`)
      .then(res => {
        return !res.error ? dispatch(setUser(res)) : dispatch(invalidUser())
      })
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
