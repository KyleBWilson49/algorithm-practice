'use strict'
/* eslint-env mocha */

let should = require('should')
let isUnique = require('../../../src/Cracking/Chapter_1/isUnique.js').isUnique

describe('isUnique', function () {
  let uniqueString = 'Wilson'
  let nonUniqueString = 'solution'
  let emptyString = ''

  it('should return false given repeats', function () {
    isUnique(nonUniqueString).should.equal(false)
  })

  it('should return true given no repeats', function () {
    isUnique(uniqueString).should.equal(true)
  })

  it('should return true given an empty string', function () {
    isUnique(emptyString).should.equal(true)
  })
})
