const rootUrl = 'http://localhost:7777'

const apiCall = (method, route, userData = {}) => {
    let headers = {
        'Content-Type': 'application/json'
    }
    let token = localStorage.getItem('token')
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return fetch(`${rootUrl}${route}`, {
        method: method,
        headers: headers,
        body: JSON.stringify(userData)
    })
}

const userReducer = (state = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    Stays: []
}, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            apiCall('POST', '/register', action.user)
                .then(res => res.json())
                .then(res => {
                    if (res.errors) {
                        console.log(res.errors)
                        res.errors.map(error => console.log(error.msg))
                        return state
                    } else {
                        console.log('registration successful, your token: ', res.token)
                        localStorage.setItem('token', res.token)
                        return state
                    }
                })
            return state
        case 'LOGIN_USER':
            apiCall('POST', '/register', action.user)
                .then(res => res.json())
                .then(res => {
                    if (res.errors) {
                        res.errors.map(error => console.log(error.msg))
                        return state
                    } else {
                        console.log('registration successful, your token: ', res.token)
                        localStorage.setItem('token', res.token)
                        return state
                    }
                })
            return state
        case 'GET_USER_DATA':
            // apiCall('GET', '/users')
            //     .then(res => {
            //         if (res.status !== 200) {
            //             console.log(`${res.status}: ${res.statusText}`)
            //             return state
            //         }
            //     })
            //     .then(res => res.json())
            //     .then(res => {
            //         // Figure this out... thunk?
            //     })
            return robert
        case 'RELOCATE_USER':
            console.log('relocate user action triggered')
            return state
        case 'LOGOUT_USER':
            localStorage.removeItem('token')
            return {}
        default:
            return state
    }
}

export default userReducer

const robert = {
    "id": "aaa31b1e-2186-4b29-876f-c436cdadb08d",
    "email": "robert@test.com",
    "firstName": "Robert",
    "lastName": "Schulte",
    "createdAt": "2019-01-15T02:40:42.784Z",
    "updatedAt": "2019-01-15T02:40:42.784Z",
    "Stays": [
        {
            "id": "bbb340be-7cd0-45c6-9ca4-de5670427252",
            "arrival": "2019-02-04T06:00:00.000Z",
            "departure": null,
            "CityId": "ae237528-252f-482c-9224-9730e59e33f6",
            "UserId": "aaa31b1e-2186-4b29-876f-c436cdadb08d",
            "createdAt": "2019-01-15T14:37:40.925Z",
            "updatedAt": "2019-01-15T14:37:40.925Z",
            "City": {
                "nameWithCountry": "Bogotá, Colombia",
                "id": "ae237528-252f-482c-9224-9730e59e33f6",
                "name": "Bogotá",
                "country": "Colombia",
                "createdAt": "2019-01-15T14:37:40.857Z",
                "updatedAt": "2019-01-15T14:37:40.859Z"
            }
        },
        {
            "id": "851a4200-8af7-4826-bcd1-15f6d851bd94",
            "arrival": "2018-12-24T06:00:00.000Z",
            "departure": "2019-02-04T06:00:00.000Z",
            "CityId": "5389c4e7-5a92-4624-a3c4-ba60f5c11e6d",
            "UserId": "aaa31b1e-2186-4b29-876f-c436cdadb08d",
            "createdAt": "2019-01-15T14:37:40.924Z",
            "updatedAt": "2019-01-15T14:37:40.924Z",
            "City": {
                "nameWithCountry": "Buenos Aires, Argentina",
                "id": "5389c4e7-5a92-4624-a3c4-ba60f5c11e6d",
                "name": "Buenos Aires",
                "country": "Argentina",
                "createdAt": "2019-01-15T14:37:40.861Z",
                "updatedAt": "2019-01-15T14:37:40.862Z"
            }
        }
    ]
}