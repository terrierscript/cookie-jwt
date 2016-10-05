Wrapper for [`cookie`](https://github.com/jshttp/cookie) + [`jwt-decode`](https://github.com/auth0/jwt-decode)

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
* If got parse error, this return **empty object (`{}`)**
