import apiCall from './helpers/apiCall'

const setToken = token => {
  return {
    type: 'SET_TOKEN',
    token
  }
}

export const registerUser = user => {
  return {
    type: 'CREATE_USER',
    user
  };
};

export const loginUser = user => {
  return (dispatch) => {
    return apiCall('POST', '/login', user)
      .then(res => {
        if (res.errors) {
          alert('Invalid credentials')
        } else {
          dispatch(setToken(res.token))
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
