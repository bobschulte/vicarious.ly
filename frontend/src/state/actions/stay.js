import apiCall from "./helpers/apiCall";
import { fetchUser } from './user'

const setStay = (stay, userIdSlug) => {
    return {
        type: 'SET_STAY',
        stay,
        userIdSlug
    }
}

export const viewStay = (stayId, userIdSlug) => {
    return dispatch => {
        return apiCall('GET', `/stays/${stayId}`).then(res => {
            if (!res.error) {
                dispatch(setStay(res, userIdSlug))
            } else {
                console.log('nope, couldnt set stay: ', res.error)
            }
        })
    }
}

const arriveStay = (user, city) => {
    const newStay = { UserId: user.id, CityId: city.cityId }

    return dispatch => {
        return apiCall("POST", '/stays', newStay).then(res => {
            if (!res.error) {
                dispatch(fetchUser(user.userIdSlug));
            } else {
                console.log('nope, error: ', res.error)
                alert("User already has already been here (fix this)")
                dispatch(fetchUser(user.userIdSlug));
            }
        });
    };
};

export const relocate = (user, city) => {
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
}
