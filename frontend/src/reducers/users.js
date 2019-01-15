const rootUrl = 'http://localhost:7777'

const apiCall = (method, route, userData) => {
    return fetch(`${rootUrl}${route}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

const usersReducer = (state = [], action) => {
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
        case 'RELOCATE_USER':
            console.log('relocate user action triggered')
            return state
        default:
            return state
    }
}

export default usersReducer