'use strict'
module.exports = (v) => {
  if (!v) {
    return null
  }
  return String(v).toLowerCase().trim()
}
