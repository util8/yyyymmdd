var assert = require('assert')
var yyyymmdd = require('./')

// it as a promise.
var date = new Date()
  .toISOString()
  .replace(/-/g, '')
  .split('T')[0]

console.log(yyyymmdd())

assert(yyyymmdd() === date)

console.log('tests passed')