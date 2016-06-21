'use strict'

let should = require('should');
let bubble = require("../../src/Sorting/bubble.js")
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

describe('Array', function () {
  describe('#bubbleSort()', function () {
    it('should return sorted array accending', function () {
      unsortedArray.bubbleSort(accend).should.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
})
