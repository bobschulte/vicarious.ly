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

const getUserData = () => {
  return {
    type: 'GET_USER_DATA'
  }
}

const setUserDataInState = user => {
  // console.log('action creator:', user)
  return {
    type: 'SET_USER_DATA_IN_STATE',
    user
  }
}

export const fetchUser = userId => {
  return (dispatch) => {
    dispatch(getUserData());
    return apiCall("GET", `/users/${userId}`)
      .then(user => dispatch(setUserDataInState(user)))
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
