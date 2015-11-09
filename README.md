# shortuuid

shortuuid is a simple python library that generates concise, unambiguous,
URL-safe UUIDs.   
Based on and compatible with the Python library
[shortuuid](https://github.com/stochastic-technologies/shortuuid).

Often, one needs to use non-sequential IDs in places where users will see them,
but the IDs must be as concise and easy to use as possible. shortuuid solves
this problem by generating uuids using [uuid-1345][] and then
translating them to base57 using lowercase and uppercase letters and digits,
and removing similar-looking characters such as l, 1, I, O and 0.

  [![NPM version][npm-img]][npm-url]
  [![Build status][travis-img]][travis-url]
  [![Test coverage][coveralls-img]][coveralls-url]
  [![License][license-img]][license-url]
  [![Dependency status][david-img]][david-url]

## Usage

```js
const ShortUUID = require('shortuuid')

const su = new ShortUUID('23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz')

su.encode('6ca4f0f8-2508-4bac-b8f1-5d1e3da2247a')
// => 'cu8Eo9RyrUsV4MXEiDZpLM'

su.decode('cu8Eo9RyrUsV4MXEiDZpLM')
// => '6ca4f0f8-2508-4bac-b8f1-5d1e3da2247a'

su.uuid()
// => 'cu8Eo9RyrUsV4MXEiDZpLM'

su.uuid('example.com')
// => 'wpsWLdLt9nscn2jbTD3uxe'

su.uuid('http://example.com')
// => 'c8sh5y9hdSMS6zVnrvf53T'
```

[uuid-1345]: https://github.com/scravy/uuid-1345

[npm-img]: https://img.shields.io/npm/v/shortuuid.svg?style=flat-square
[npm-url]: https://npmjs.org/package/shortuuid
[travis-img]: https://img.shields.io/travis/trekjs/shortuuid.svg?style=flat-square
[travis-url]: https://travis-ci.org/trekjs/shortuuid
[coveralls-img]: https://img.shields.io/coveralls/trekjs/shortuuid.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/trekjs/shortuuid
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[david-img]: https://img.shields.io/david/trekjs/shortuuid.svg?style=flat-square
[david-url]: https://david-dm.org/trekjs/shortuuid
