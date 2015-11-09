'use strict'

const BigNumber = require('bignumber.js')
const crypto = require('crypto')
const uuid = require('uuid-1345')

const ALPHABET = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = class ShortUUID {

  constructor(alphabet) {
    alphabet = alphabet || ALPHABET
    this.alphabet = alphabet
    this.length = alphabet.length
  }

  /**
   * Convert a number to a string, using the given alphabet.
   *
   * @api private
   */
  _numToString(number, padToLen) {
    number = number || 0
    padToLen = padToLen || 0
    number = new BigNumber(number)
    let output = ''
    let digit
    while (number.toNumber()) {
      digit = number.mod(this.length)
      number = number.dividedToIntegerBy(this.length)
      output += this.alphabet[digit.toNumber()]
    }
    if (padToLen) {
      let remainder = Math.max(padToLen - output.length, 0)
      output += this.alphabet[0].repeat(remainder)
    }
    return output
  }

  /**
   * Encodes a UUID into a string (LSB first) according to the alphabet
   * If leftmost (MSB) bits 0, string might be shorter.
   *
   * @param {String} str - uuid
   * @param {Number} padToLen
   * @return {String} the short uuid
   */
  encode(str, padToLen) {
    str = str || ''
    padToLen = padToLen || 22
    let newstr = str.replace(/\-/g, '')
    let number = new BigNumber(newstr, 16)
    return this._numToString(number.toString(), padToLen)
  }

  /**
   * Convert a string to a number, using the given alphabet.
   *
   * @api private
   */
  _stringToNum(str) {
    let number = new BigNumber(0)
    let arr = str.split('').reverse()
    arr.forEach(char => {
      number = number.times(this.length).plus(this.alphabet.indexOf(char))
    })
    return number.toString(16)
  }

  /**
   * Decodes a string according to the current alphabet into a UUID
   * Raises ValueError when encountering illegal characters or too long string
   * If string too short, fills leftmost (MSB) bits with 0.
   *
   * @param {String} str - the short uuid
   * @return {String} the long uuid
   */
  decode(str) {
    str = this._stringToNum(str || '')
    let len = str.length
    if (len < 32) {
      str = '0'.repeat(32 - len) + str
    }
    return `${str.substring(0, 8)}-${str.substring(8, 12)}-` +
      `${str.substring(12, 16)}-${str.substring(16, 20)}-${str.substring(20)}`
  }

  /**
   * Calculate encoded length.
   *
   * @api private
   */
  encodedLength(numBytes) {
    numBytes = numBytes || 16
    const factor = new BigNumber(String(Math.log(256) / Math.log(this.length)))
    const length = Math.ceil(factor.times(numBytes).toString())
    return length
  }

  /**
   * Generate and return a UUID.
   *
   * If the name parameter is provided, set the namespace to the provided
   * name and generate a UUID.
   */
  uuid(name, padToLen) {
    name = name || ''
    padToLen = padToLen || 22
    let id
    if (name === '') {
      id = uuid.v4()
    } else if (name.toLowerCase().startsWith('http')) {
      id = uuid.v5({
        namespace: uuid.namespace.url,
        name: name
      })
    } else {
      id = uuid.v5({
        namespace: uuid.namespace.dns,
        name: name
      })
    }
    return this.encode(id, padToLen)
  }

  /**
   * Generate and return a cryptographically-secure short random string
   * of the specified length.
   */
  random(len) {
    len = len || 22
    const randomStr = crypto.randomBytes(20).toString('hex')
    const num = new BigNumber(randomStr, 16);
    return this._numToString(num.toString(), len).substring(0, len)
  }

}
