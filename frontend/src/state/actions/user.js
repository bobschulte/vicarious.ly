import apiCall from './helpers/apiCall'

export const createUser = user => {
  return {
    type: 'CREATE_USER',
    user
  };
};

export const loginUser = user => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

const getUserData = user => {
  // console.log('action creator:', user)
  return {
    type: 'GET_USER_DATA',
    user
  }
}

export const fetchUser = userId => {
  return (dispatch) => {
    return apiCall("GET", `/users/${userId}`)
      .then(user => dispatch(getUserData(user)))
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
