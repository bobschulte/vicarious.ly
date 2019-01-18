const rootUrl = 'http://localhost:7777'

const apiCall = (method, route, data={}) => {
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

    if (method === 'POST' || method === 'PATCH') {
        options.body = JSON.stringify(data)
    }

    return fetch(`${rootUrl}${route}`, options)
    .then(res => {
        // console.log(res)
        if (res.status !== 200) {
          console.log(`${res.status}: ${res.statusText}`)
          return { error: { status: res.status, msg: res.statusText} }
        } else {
            return res.json()
        }
    })
}

export default apiCall