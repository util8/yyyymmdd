module.exports = yyyymmdd
module.exports.default = yyyymmdd

/**
 * @returns {String} ISO formatted date yyyymmdd
 */
function yyyymmdd () {
  return new Date()
    .toISOString()
    .replace(/-/g, '')
    .split('T')[0]
}
