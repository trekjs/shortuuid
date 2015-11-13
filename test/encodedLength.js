'use strict'

const assert = require('assert')
const ShortUUID = require('..')

describe('ShortUUID#encodedLength()', () => {

  let su

  before(() => {
    su = new ShortUUID()
  })

  it('should equal 22', () => {
    assert.ok(su.encodedLength() === 22)
  })

  it('should equal 35', () => {
    assert.ok(su.encodedLength(25) === 35)
  })

  it('should equal 14', () => {
    assert.ok(su.encodedLength(10) === 14)
  })

})
