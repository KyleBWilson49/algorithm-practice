'use strict'

const checkPermutation = function (string1, string2) {
  if (string1.length !== string2.length) { return false }

  let chars = {}

  for (let i = 0; i < string1.length; i++) {
    let char = string1[i].toLowerCase()
    if (chars[char]) {
      chars[char] += 1
    } else {
      chars[char] = 1
    }
  }

  for (let i = 0; i < string2.length; i++) {
    let char = string2[i].toLowerCase()
    if (chars[char]) {
      chars[char] -= 1
    } else {
      return false
    }

    if (chars[char] < 0) {
      return false
    }
  }

  return true
}

module.exports.checkPermutation = checkPermutation

console.log(checkPermutation('Wilson', 'loniws'))
