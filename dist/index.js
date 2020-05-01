'use strict';

/**
 * @returns {String} ISO formatted date yyyymmdd
 */
function yyyymmdd () {
  return new Date()
    .toISOString()
    .replace(/-/g, '')
    .split('T')[0]
}

module.exports = yyyymmdd;
