'use strict'

const assert = require('assert')
const ShortUUID = require('..')
const uuids = require('./fixtures/uuids')

describe('ShortUUID#decode()', () => {

  uuids.map((item) => {
    let uid = item[0]
    let short = item[1]

    it(`should decode to long, ${short} => ${uid}`, () => {

      let s = new ShortUUID()
      assert.ok(s.decode(short) === uid)

    })

  })

})
