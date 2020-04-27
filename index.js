/**
 * @returns {String} ISO formatted date yyyymmdd
 */
export default function yyyymmdd () {
  return new Date()
    .toISOString()
    .replace(/-/g, '')
    .split('T')[0]
}
