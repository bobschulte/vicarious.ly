import apiCall from './helpers/apiCall'

export const createUser = user => {
  return {
    type: 'CREATE_USER',
    user
  };
};

const setToken = token => {
  return {
    type: 'SET_TOKEN',
    token
  }
}

export const loginUser = user => {
  return (dispatch) => {
    return apiCall('POST', '/login', user)
      .then(res => {
        if (res.errors) {
          console.log('errors!')
        } else {
          dispatch(setToken(res.token))
        }
      })

    // .catch(err => console.log(err))
    // .then(res => res.status === 200 ? res.json() : { errors: [{ msg: "Invalid credentials" }] })
    // .then(res => {
    //     if (res.errors) {
    //         alert(res.errors.map(err => err.msg).join(', '))
    //         return state
    //     } else {
    //         console.log('registration successful, your token: ', res.token)
    //         localStorage.setItem('vicariouslyToken', res.token)
    //         return state
    //     }
    // })
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
