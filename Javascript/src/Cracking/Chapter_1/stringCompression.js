'use strict'

const stringCompression = function (string) {
  let result = [string[0], 1]
  let previous = string[0]

  for (var i = 1; i < string.length; i++) {
    const current = string[i]
    let charCount = result.length - 1
    if (previous === current) {
      result[charCount] += 1
    } else {
      result.push(current)
      result.push(1)
      previous = current
    }
  }
  const resultString = result.join('')

  if (resultString.length < string.length) {
    return resultString
  }
  return string
}

module.exports.stringCompression = stringCompression
