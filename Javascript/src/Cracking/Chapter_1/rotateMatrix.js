'use strict'

// need to redo as an inplace rotation
const rotateMatrix = function (matrix) {
  if (matrix[0].length === 0 || matrix.length !== matrix[0].length) {
    return matrix
  }

  const maxIdx = matrix.length - 1
debugger
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

let threeByThree = [[1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]]
let threeByThreeResult = [[7, 4, 1],
                          [8, 5, 2],
                          [9, 6, 3]]
rotateMatrix(threeByThree)
