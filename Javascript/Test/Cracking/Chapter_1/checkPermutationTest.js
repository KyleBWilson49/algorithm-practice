'use strict'
/* eslint-env mocha */

let should = require('should')
let checkPermutation = require('../../../src/Cracking/Chapter_1/checkPermutation.js').checkPermutation

describe('#checkPermutation', function () {
  let string1 = 'Wilson'
  let string2 = 'Silwon'
  let string3 = 'cleans'
  let string4 = 'Kyle'

  it('should return true if the strings are permutations of each other', function () {
    checkPermutation(string1, string2).should.equal(true)
  })

  it('should return false if the strings are not permutations of each otehr', function () {
    checkPermutation(string1, string3).should.equal(false)
  })

  it('should exit early if the strings size does not match', function () {
    checkPermutation(string1, string4).should.equal(false)
  })
})
