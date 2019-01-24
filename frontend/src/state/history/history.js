import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

export const redirect = route => {
    setTimeout(history.push(route), 500)
}