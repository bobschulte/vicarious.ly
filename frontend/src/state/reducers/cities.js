const citiesReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_CITIES":
        return action.cities; // { ...state, user: action.user }  <-- if switch to other rootReducer implementation
      default:
        return state;
    }
}

export default citiesReducer