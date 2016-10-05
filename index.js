var cookie = require('cookie')
var jwtDecode = require('jwt-decode')

var decode = function(cookieObject, tokenKey){
  var encodedJwt = cookieObject[tokenKey]
  if (!encodedJwt) {
    return {}
  }
  try{
    return jwtDecode(encodedJwt)
  }catch(_){
    return {}
  }
}

module.exports = function(cookieString, tokenKey) {
  var cookieObject = cookie.parse(cookieString) || {}
  return decode(cookieObject, tokenKey)
}
