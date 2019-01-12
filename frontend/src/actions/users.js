export const createUser = user => {
  return {
    type: 'CREATE_USER',
    user
  };
};

export const relocateUser = userId => {
  return {
    type: 'RELOCATE_USER',
    userId: userId
  };
};
