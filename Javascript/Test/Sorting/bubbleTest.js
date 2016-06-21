'use strict'

let should = require('should')
let bubble = require('../../src/Sorting/bubble.js')
let bubbleSort = bubble.bubbleSort

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let unsortedArray = [7, 3, 9, 10, 6, 2, 8, 1, 4, 5]
let repeatArray = [5, 2, 7, 2, 9, 2, 3, 2, 1]
let emptyArray = []
let accend = function (x, y) {
  if (x <= y) {
    return true
  }
  return false
}
let decend = function (x, y) {
  if (x >= y) {
    return true
  }
  return false
}
let accendArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let decendArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

describe('Array', function () {
  describe('#bubbleSort()', function () {
    it('should return sorted array accending', function () {
      unsortedArray.bubbleSort().should.deepEqual(accendArray)
    })

    it('should return sorted array when given sorted array', function () {
      sortedArray.bubbleSort().should.deepEqual(accendArray)
    })

    it('should be able to take sorting callback', function () {
      unsortedArray.bubbleSort(accend).should.deepEqual(accendArray)
      unsortedArray.bubbleSort(decend).should.deepEqual(decendArray)
    })

    it('should return empty array when given empty array', function () {
      emptyArray.bubbleSort().should.deepEqual([])
    })

    it('should handle inputs with repeats', function () {
      repeatArray.bubbleSort().should.deepEqual([1, 2, 2, 2, 2, 3, 5, 7, 9])
    })

    it('should not modify the input', function () {
      unsortedArray.bubbleSort()
      unsortedArray.should.deepEqual([7, 3, 9, 10, 6, 2, 8, 1, 4, 5])
    })
  })
})
