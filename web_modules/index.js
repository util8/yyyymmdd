var yyyymmdd_1 = yyyymmdd;
var _default = yyyymmdd;

/**
 * @returns {String} ISO formatted date yyyymmdd
 */
function yyyymmdd () {
  return new Date()
    .toISOString()
    .replace(/-/g, '')
    .split('T')[0]
}
yyyymmdd_1.default = _default;

export default yyyymmdd_1;
