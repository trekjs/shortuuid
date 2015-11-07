'use strict'

const assert = require('assert')
const ShortUUID = require('..')
const uuids = require('./fixtures/uuids')

describe('ShortUUID#encode()', () => {

  uuids.map((item) => {
    let uid = item[0]
    let short = item[1]

    it(`should encode to short, ${uid} => ${short}`, () => {

      let s = new ShortUUID()
      assert.ok(s.encode(uid) === short)

    })

  })

})
