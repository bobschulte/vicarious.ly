const rootUrl = 'http://localhost:7777'

export const apiCall = (method, route, userData = {}) => {
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