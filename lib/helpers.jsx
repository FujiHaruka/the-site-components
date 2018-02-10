'use strict'

export function userNameParser (v) {
  if (!v) {
    return null
  }
  return String(v).toLowerCase().trim()
}
