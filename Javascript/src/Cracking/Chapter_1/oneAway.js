'use strict'

const oneAway = function (string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) { return false }

  let charCounts = {}

  for (let i = 0; i < string1.length; i++) {
    const current = string1[i]
    if (charCounts[current]) {
      charCounts[current] += 1
    } else {
      charCounts[current] = 1
    }
  }

  for (let i = 0; i < string2.length; i++) {
    const current = string2[i]
    if (charCounts[current]) {
      charCounts[current] -= 1
    } else {
      charCounts[current] = -1
    }
  }

  let extraChars = []

  Object.keys(charCounts).forEach((el) => {
    const value = charCounts[el]
    if (value === 1 || value === -1) {
      extraChars.push(value)
    }
  })

  if (extraChars.length < 3 && extraChars.length !== 0) {
    const sum = extraChars.reduce((x, y) => {
      if (!x) { x = 0 }
      return x + y
    })
    if (Math.abs(sum) > 1) {
      return false
    }
  } else if (extraChars.length > 3) {
    return false
  }

  return true
}

const oneAway2 = function (string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) { return false }

  const small = string1.length <= string2.length ? string1 : string2
  const large = string1.length > string2.length ? string1 : string2

  let smallIdx = 0
  let largeIdx = 0
  let foundDiff = false

  while (smallIdx < small.length && largeIdx < large.length) {
    if (small[smallIdx] !== large[largeIdx]) {
      if (foundDiff) { return false }
      foundDiff = true

      if (small.length === large.length) {
        smallIdx += 1
      }
    } else {
      smallIdx += 1
    }
    largeIdx += 1
  }

  return true
}

module.exports.oneAway = oneAway2
