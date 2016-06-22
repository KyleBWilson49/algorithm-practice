'use strict'
/* eslint-env mocha */

const should = require('should')
const palindromePermutation = require('../../../src/Cracking/Chapter_1/palindromePermutation.js').palindromePermutation

describe('#palindromePermutation', function () {
  let string1 = 'Tact Coa'
  let string2 = 'hlzlhz'
  let string3 = 'Hello'

  it('should not modify the input', function () {
    palindromePermutation(string1)
    string1.should.equal('Tact Coa')
  })

  it('should return true given palindrome with odd number of letters', function () {
    palindromePermutation(string1).should.equal(true)
  })

  it('should return true given palindrome with even number of letters', function () {
    palindromePermutation(string2).should.equal(true)
  })

  it('should return false given a non palindrome permutation', function () {
    palindromePermutation(string3).should.equal(false)
  })
})
