var cookieJwt = require('../')
var assert = require('assert')


describe('cookie-jwt', function(){
  var mockCookie = "name=0=value0; name1=value1; testToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"

  var mockInvalidCookie = "name=0=value0; name1=value1; testToken=eyJhbGciOiJsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"

  it('Valid cookie got payload', function(){
    var payload = cookieJwt(mockCookie, "testToken")
    assert.deepEqual(payload, {admin: true, name: 'John Doe', sub: '1234567890' } )
  })

  it('Valid cookie with invalid key', function(){
    var payload = cookieJwt(mockCookie, "invalidKey")
    assert.deepEqual(payload, {})
  })

  it('Inalid jwt got payload', function(){
    var payload = cookieJwt(mockInvalidCookie, "testToken")
    assert.deepEqual(payload, {})
  })

  it('Inalid cookie got payload', function(){
    var payload = cookieJwt('foo', "testToken")
    assert.deepEqual(payload, {} )
  })

})