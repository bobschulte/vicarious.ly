import apiCall from "./helpers/apiCall";

const placeAdded = () => {
    return {
        type: 'PLACE_ADDED'
    }
}


export const addPlace = place => {
    console.log('action creator hit: ', place)
    return dispatch => {
        return apiCall('POST', '/places', place).then(res => {
            if (!res.error) {
                dispatch(placeAdded())
            } else {
                console.log('nope, error here: ', res.error)
            }
        })
    }
}