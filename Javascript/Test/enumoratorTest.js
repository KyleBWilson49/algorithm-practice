'use strict'
/* eslint-env mocha */

const should = require('should')
const imports = require('../src/enumorators.js')
const expect = require('chai').expect

const myEach = imports.myEach
const myMap = imports.myMap
const mySelect = imports.mySelect
const myReject = imports.myReject
const myAny = imports.myAny
const myAll = imports.myAll
const myReduce = imports.myReduce

const eachCallback = function (el) {
  return el + el
}
const array = [1, 2, 3, 4, 5]
const mappedArray = [2, 4, 6, 8, 10]
const block = function (x) {
  if (x < 3) { return true }
  return false
}
const block2 = function (x) {
  if (x > 10) { return true }
  return false
}
const block3 = function (x) {
  if (x < 10) { return true }
  return false
}
const block4 = function (x, y) {
  return x + y
}
const block5 = function (x, y) {
  return x * y
}

describe('Enumorators', function () {
  describe('#myEach', function () {
    it('should take in a callback', function () {
      array.myEach(eachCallback).should.not.throw()
    })

    it('should return the original array', function () {
      array.myEach(eachCallback).should.deepEqual([1, 2, 3, 4, 5])
    })
  })

  describe('#myMap', function () {
    it('should take in a callback', function () {
      array.myMap(eachCallback).should.not.throw()
    })

    it('should not modify the input', function () {
      array.myMap(eachCallback)
      array.should.deepEqual([1, 2, 3, 4, 5])
    })

    it('should return a new array based on callback', function () {
      array.myMap(eachCallback).should.deepEqual(mappedArray)
    })
  })

  describe('#mySelect', function () {
    it('should take in a callback', function () {
      array.mySelect(block).should.not.throw()
    })

    it('should return only elements that the block picks', function () {
      array.mySelect(block).should.deepEqual([1, 2])
    })

    it('should not modify the input', function () {
      array.mySelect(block)
      array.should.deepEqual([1, 2, 3, 4, 5])
    })
  })

  describe('#myReject', function () {
    it('should take in a callback', function () {
      array.myReject(block).should.not.throw()
    })

    it('should return only elements that the block picks', function () {
      array.myReject(block).should.deepEqual([3, 4, 5])
    })

    it('should not modify the input', function () {
      array.myReject(block)
      array.should.deepEqual([1, 2, 3, 4, 5])
    })
  })

  describe('#myAny', function () {
    it('should take in a callback', function () {
      array.myAny(block).should.not.throw()
    })

    it('should return true if any element meets the callbacks conditions', function () {
      array.myAny(block).should.equal(true)
    })

    it('should return false if no element meets the callbacks conditions', function () {
      array.myAny(block2).should.equal(false)
    })

    it('should not modify the input', function () {
      array.myAny(block)
      array.should.deepEqual([1, 2, 3, 4, 5])
    })
  })

  describe('#myAll', function () {
    it('should take in a callback', function () {
      array.myAll(block).should.not.throw()
    })

    it('should return true if all elements meets the callbacks conditions', function () {
      array.myAll(block3).should.equal(true)
    })

    it('should return false if any element does not meets the callbacks conditions', function () {
      array.myAll(block).should.equal(false)
    })

    it('should not modify the input', function () {
      array.myAll(block)
      array.should.deepEqual([1, 2, 3, 4, 5])
    })
  })

  describe('#myReduce', function () {
    it('should take in a callback', function () {
      array.myReduce(block4).should.not.throw()
    })

    it('should not modify the original array', function () {
      array.myReduce(block4)
      array.should.deepEqual([1, 2, 3, 4, 5])
    })

    it('should return add all the numbers given block4', function () {
      array.myReduce(block4).should.equal(15)
    })

    it('should return multiply all the numbers given block5', function () {
      array.myReduce(block5).should.equal(120)
    })
  })
})
