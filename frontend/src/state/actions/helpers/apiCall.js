const rootUrl = 'http://localhost:7777'

const apiCall = (method, route, userData={}) => {
    let headers = {
        'Content-Type': 'application/json'
    }

    let token = localStorage.getItem('vicariouslyToken')
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    let options = {
        method: method,
        headers: headers,
    }
    if (method === 'POST') {
        options.body = JSON.stringify(userData)
    }

    return fetch(`${rootUrl}${route}`, options)
    .then(res => {
        if (res.status !== 200) {
          console.log(`${res.status}: ${res.statusText}`)
          return { errors: [ { status: res.status, msg: res.statusText} ]}
        } else {
            return res.json()
        }
    })
}

export default apiCall