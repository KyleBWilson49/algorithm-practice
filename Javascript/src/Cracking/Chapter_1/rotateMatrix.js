'use strict'

const rotateMatrix = function (matrix) {
  if (matrix[0].length === 0 || matrix.length !== matrix[0].length) {
    return matrix
  }

  const maxIdx = matrix.length - 1

  for (let i = 0; i < Math.floor((maxIdx + 1) / 2); i++) {
    for (let j = 0; j + i < maxIdx - i; j++) {
      let temp = matrix[i][j + i]
      matrix[i][j + i] = matrix[maxIdx - j - i][i]
      matrix[maxIdx - j - i][i] = matrix[maxIdx - i][maxIdx - j - i]
      matrix[maxIdx - i][maxIdx - j - i] = matrix[i + j][maxIdx - i]
      matrix[i + j][maxIdx - i] = temp
    }
  }

  return matrix
}

module.exports.rotateMatrix = rotateMatrix
