'use strict'

const assert = require('assert')
const ShortUUID = require('..')

describe('ShortUUID#uuid()', () => {

  let su

  before(() => {
    su = new ShortUUID()
  })

  it('should generate uuid v4', () => {
    assert.ok(su.uuid('example.com') === 'wpsWLdLt9nscn2jbTD3uxe')
  })

  it('should generate uuid v5 with url namespace', () => {
    assert.ok(su.uuid('http://example.com') === 'c8sh5y9hdSMS6zVnrvf53T')
  })

})
