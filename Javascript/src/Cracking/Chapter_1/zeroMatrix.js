'use strict'

const zeroMatrix = (matrix) => {
  let zeroHeightIdx = []
  let zeroWidthIdx = []
  const height = matrix.length
  const width = matrix[0].length

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let current = matrix[i][j]
      if (current === 0) {
        zeroHeightIdx.push(i)
        zeroWidthIdx.push(j)
      }
    }
  }

  zeroHeightIdx.forEach((el) => {
    for (let j = 0; j < width; j++) {
      matrix[el][j] = 0
    }
  })

  zeroWidthIdx.forEach((el) => {
    for (let i = 0; i < height; i++) {
      matrix[i][el] = 0
    }
  })

  return matrix
}

module.exports.zeroMatrix = zeroMatrix
