import apiCall from './helpers/apiCall'

const loginUserWith = token => {
  return {
    type: 'LOGIN_USER',
    token
  }
}

export const registerUser = user => {
  return dispatch => {
    return apiCall('POST', '/register', user)
      .then(res => {
        if (res.errors) {
          alert('Invalid Registration Data')
        } else {
          dispatch(loginUserWith(res.token))
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
          dispatch(loginUserWith(res.token))
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

export const fetchUser = userId => {
  return (dispatch) => {
    return apiCall("GET", `/users/${userId}`)
      .then(user => dispatch(setUser(user)))
  }
}

export const relocateUser = userId => {
  return {
    type: 'RELOCATE_USER',
    userId
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
