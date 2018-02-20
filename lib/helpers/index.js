/**
 * Helper modules
 * @module helpers
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

module.exports = {
  get userNameParser () { return _d(require('./userNameParser')) },
}