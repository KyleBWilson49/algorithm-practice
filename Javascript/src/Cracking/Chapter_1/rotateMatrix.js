'use strict'

// need to redo as an inplace rotation
const rotateMatrix = function (matrix) {
  if (matrix[0].length === 0 || matrix.length !== matrix[0].length) {
    return matrix
  }

  const size = matrix.length
  let result = []

  for (let i = 0; i < size; i++) {
    let row = []

    for (let j = size - 1; j >= 0; j--) {
      row.push(matrix[j][i])
    }

    result.push(row)
  }

  return result
}

module.exports.rotateMatrix = rotateMatrix
