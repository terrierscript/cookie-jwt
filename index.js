var cookie = require('cookie')
var jwtDecode = require('jwt-decode')

var getTokenDecoded = function(cookieObject, tokenKey){
  var encodedJwt = cookieObject[tokenKey]
  if (!encodedJwt) {
    return {}
  }
  return jwtDecode(encodedJwt)
}

module.exports = function(cookieString, tokenKey) {
  var documentCookie = cookie.parse(cookieString) || {}
  return getTokenDecoded(documentCookie)
}