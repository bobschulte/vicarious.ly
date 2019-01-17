const tokenName = 'vicariouslyToken'
const idName = 'vicariouslyId'

export const setStorageToken = token => {
    localStorage.setItem(tokenName, token)
}

export const removeStorageToken = () => {
    localStorage.removeItem(tokenName)
}

export const setStorageId = id => {
    localStorage.setItem(idName, id)
}

export const removeStorageId = () => {
    localStorage.removeItem(idName)
}