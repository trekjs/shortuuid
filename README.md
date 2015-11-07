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
```

[uuid-1345]: https://github.com/scravy/uuid-1345
