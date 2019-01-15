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

export const getUserData = () => {
  return {
    type: 'GET_USER_DATA'
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
