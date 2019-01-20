import apiCall from "./helpers/apiCall";

const beginStay = () => {
    return {
        type: 'BEGIN_STAY'
    }
}

const arriveStay = (UserId, CityId) => {
    const newStay = { UserId, CityId }

    return dispatch => {
        return apiCall("POST", '/stays', newStay).then(res => {
            if (!res.error) {
                dispatch(beginStay());
            } else {
                console.log('nope, error: ', res.error)
            }
        });
    };
};

export const relocate = (user, city) => {
    const currentStay = user.Stays.find(stay => stay.departure ===  null)
    currentStay.departure = new Date()
    
    return dispatch => {
        return apiCall("PATCH", `/stays/${currentStay.id}`, currentStay).then(res => {
            if (!res.error) {
                dispatch(arriveStay(user.id, city.cityId));
            } else {
                console.log('nope, error: ', res.error)
            }
        });
    };
};
