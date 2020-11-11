const TOKEN = 'token'

export function setToken (token) {
  sessionStorage.setItem(TOKEN, token)
}

export function getToken () {
  return sessionStorage.getItem(TOKEN)
}

export function removeToken () {
  sessionStorage.removeItem(TOKEN)
}

export function isAuthenticated () {
  return this.getToken()
}

