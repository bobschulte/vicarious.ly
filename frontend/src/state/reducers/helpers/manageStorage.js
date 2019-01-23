const tokenName = 'vicariouslyToken'
const idName = 'vicariouslyId'

export function setToken(token) {
    localStorage.setItem(tokenName, token)
}
export function removeToken() {
    localStorage.removeItem(tokenName)
}
export function setId(id) {
    localStorage.setItem(idName, id)
}
export function removeId() {
    localStorage.removeItem(idName)
}