'use strict'

const isUnique = function (string) {
  let result = true
  let chars = string.split('').sort()
  for (let idx = 0; idx < chars.length - 1; idx++) {
    let current = chars[idx]
    let next = chars[idx + 1]
    if (current === next) {
      result = false
    }
  }
  return result
}

module.exports.isUnique = isUnique
