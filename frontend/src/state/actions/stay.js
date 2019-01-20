import apiCall from "./helpers/apiCall";


export const endStay = stay => {
  return {
    type: 'END_STAY',
    stay
  };
};

export const beginStay = stay => {
  return {
    type: 'BEGIN_STAY',
    stay
  };
};



const setCities = cities => {
  return {
    type: "SET_CITIES",
    cities
  };
};

export const fetchAllCities = () => {
  return dispatch => {
    return apiCall("GET", "/cities").then(res => {
      if (!res.error) {
        dispatch(setCities(res));
      }
    });
  };
};