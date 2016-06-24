'use strict'
/* eslint-env mocha */

const should = require('should')
const rotateMatrix = require('../../../src/Cracking/Chapter_1/rotateMatrix.js').rotateMatrix

describe('#rotateMatrix', () => {
  let twoByTwo = [[1, 2],
                  [3, 4]]
  let twoByTwoResult = [[3, 1],
                        [4, 2]]
  let threeByThree = [[1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9]]
  let threeByThreeResult = [[7, 4, 1],
                            [8, 5, 2],
                            [9, 6, 3]]
  let fourByFour = [[1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12],
                    [13, 14, 15, 16]]
  let fourByFourResult = [[13, 9, 5, 1],
                    [14, 10, 6, 2],
                    [15, 11, 7, 3],
                    [16, 12, 8, 4]]
  let rectangle = [[1, 2, 3],
                   [1, 2, 3]]

  it('should not modify the input', () => {
    rotateMatrix(twoByTwo)
    twoByTwo.should.deepEqual([[1, 2], [3, 4]])
  })

  it('should return the input if it is not NXN', () => {
    rotateMatrix(rectangle).should.deepEqual(rectangle)
  })

  it('should be able to handle an empty matrix', () => {
    rotateMatrix([[]]).should.deepEqual([[]])
  })

  it('should be able to handle a 2X2 matrix', () => {
    rotateMatrix(twoByTwo).should.deepEqual(twoByTwoResult)
  })

  it('should be able to handle a 3X3 matrix', () => {
    rotateMatrix(threeByThree).should.deepEqual(threeByThreeResult)
  })

  it('should be able to handle a 4X4 matrix', () => {
    rotateMatrix(fourByFour).should.deepEqual(fourByFourResult)
  })
})
