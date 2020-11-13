import Cookies from 'js-cookie'
const TOKEN = 'token'

export function setToken (token) {
  // sessionStorage.setItem(TOKEN, token)
  Cookies.set(TOKEN, token)
}

export function getToken () {
  // return sessionStorage.getItem(TOKEN)
  return Cookies.get(TOKEN)
}

export function removeToken () {
  // sessionStorage.removeItem(TOKEN)
  Cookies.remove(TOKEN)
}

export function isAuthenticated () {
  return getToken()
}

