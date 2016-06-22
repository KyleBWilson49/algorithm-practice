'use strict'

const palindromePermutation = function (string) {
  let result = true
  let chars = string.toLowerCase()
  let charsCount = {}

  for (var i = 0; i < chars.length; i++) {
    const current = chars[i]
    if (current <= 'a' || current >= 'z') {
      continue
    }

    if (charsCount[current]) {
      charsCount[current] += 1
    } else {
      charsCount[current] = 1
    }
  }

  let usedOdd = false

  Object.keys(charsCount).forEach((key) => {
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
