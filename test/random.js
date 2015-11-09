'use strict'

const assert = require('assert')
const ShortUUID = require('..')

describe('ShortUUID#random()', () => {

  let su

  before(() => {
    su = new ShortUUID()
  })

  it('should length is 22', () => {
    assert.ok(su.random().length === 22)
  })

  it('should length is 1', () => {
    assert.ok(su.random(1).length === 1)
  })

  it('should length is 5', () => {
    assert.ok(su.random(5).length === 5)
  })

  it('should length is 10', () => {
    assert.ok(su.random(10).length === 10)
  })

})
