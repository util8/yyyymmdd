var assert = require('assert')
var yyyymmdd = require('./dist/index.js')

// it as a promise.
var date = new Date()
  .toISOString()
  .replace(/-/g, '')
  .split('T')[0]

assert(yyyymmdd() === date)

console.log('tests passed')
