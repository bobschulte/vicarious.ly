import apiCall from "./helpers/apiCall";

const placeAdded = place => {
    return {
        type: 'PLACE_ADDED',
        place
    }
}


export const addPlace = place => {
    console.log('action creator hit: ', place)
    return dispatch => {
        return apiCall('POST', '/places', place).then(res => {
            if (!res.error) {
                dispatch(placeAdded(res))
            } else {
                console.log('nope, error here: ', res.error)
            }
        })
    }
}