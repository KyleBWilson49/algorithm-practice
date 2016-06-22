'use strict'

const palindromePermutation = function (string) {
  let result = true
  let chars = string.toLowerCase()
  let charsCount = {}

  for (var i = 0; i < chars.length; i++) {
    const current = chars[i]
    if (current.charCodeAt(0) <= 'a'.charCodeAt(0) ||
        'z'.charCodeAt(0) <= current.charCodeAt(0)) {
      continue
    }

    if (charsCount[current]) {
      charsCount[current] += 1
    } else {
      charsCount[current] = 1
    }
  }

  let usedOdd = false

  Object.keys(charsCount).forEach(function (key) {
    if (charsCount[key] % 2 !== 0) {
      if (usedOdd) {
        result = false
      }
      usedOdd = true
    }
  })

  return result
}

module.exports.palindromePermutation = palindromePermutation

console.log(palindromePermutation('Tact Coa'))
