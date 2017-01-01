Tiny wrapper function for got [jwt](http://jwt.io/) payload form cookie

[![Build Status](https://travis-ci.org/inuscript/cookie-jwt.svg?branch=master)](https://travis-ci.org/inuscript/cookie-jwt)
[![npm](https://img.shields.io/npm/v/cookie-jwt.svg?maxAge=2592000)](https://www.npmjs.com/package/cookie-jwt)

# Description

This library is wrapper function combinate [`cookie`](https://github.com/jshttp/cookie) and [`jwt-decode`](https://github.com/auth0/jwt-decode)

# Usage

```js
var cookieJwt = require('cookie-jwt')

var payload = cookieJwt(document.cookie, 'my-jwt-token-key')

// payload like below:
// { admin: true, name: 'John Doe', sub: '1234567890' }
```

# API

## cookieJwt(`cookieString`, `jwtTokenKey`)

* Return jwt payload.
* If got parse error, this return **empty object**  (like `{}`)
