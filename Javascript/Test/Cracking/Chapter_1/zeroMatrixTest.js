'use strict'

const should = require('should')
const zeroMatrix = require('../../../src/Cracking/Chapter_1/zeroMatrix.js').zeroMatrix

describe('#zeroMatrix', () => {
  let matrix1 = [[1, 2], [3, 0]]
  let matrix1Result = [[1, 0], [0, 0]]

  let matrix2 = [[1, 2, 3], [4, 0, 8]]
  let matrix2Result = [[1, 0, 3], [0, 0, 0]]

  it('should zero all elements in a row and column of found elements == 0', () => {
    zeroMatrix(matrix1).should.deepEqual(matrix1Result)
  })

  it('should handle NXM matrix', () => {
    zeroMatrix(matrix2).should.deepEqual(matrix2Result)
  })
})
