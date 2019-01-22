import apiCall from "./helpers/apiCall";

const beginStay = userIdSlug => {
    return {
        type: 'BEGIN_STAY'
    }
}

const arriveStay = (user, city) => {
    const newStay = { UserId: user.id, CityId: city.cityId }
    console.log(newStay)

    return dispatch => {
        return apiCall("POST", '/stays', newStay).then(res => {
            if (!res.error) {
                dispatch(beginStay());
            } else {
                console.log('nope, error: ', res.error)
                alert("User already has already been here (fix this)")
            }
        });
    };
};

export const relocate = (user, city) => {
    console.log('user: ', user, 'city: ', city)
    const hasVisitedBefore = user.Stays.find(stay => stay.City.id === city.cityId);
    if(user.Stays.length > 0 && !hasVisitedBefore) {
        const currentStay = user.Stays.find(stay => stay.departure ===  null)
        currentStay.departure = new Date()
        
        return dispatch => {
            return apiCall("PATCH", `/stays/${currentStay.id}`, currentStay).then(res => {
                if (!res.error) {
                    dispatch(arriveStay(user, city));
                } else {
                    console.log('nope, error: ', res.error)
                }
            });
        };
    } else {
        return dispatch => {
            dispatch(arriveStay(user, city))
        }
    }
};
