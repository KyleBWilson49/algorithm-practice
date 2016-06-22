'use strict'
/* eslint-env mocha */

const should = require('should')
const stringCompression = require('../../../src/Cracking/Chapter_1/stringCompression.js').stringCompression

describe('#stringCompression', () => {
  let string1 = 'aabccccgg'
  let string1Result = 'a2b1c4g2'
  let string2 = 'abcdeeff'
  let string2Result = 'abcdeeff'
  let string3 = 'aabbbaaab'
  let string3Result = 'a2b3a3b1'

  it('should compress a given string', () => {
    stringCompression(string1).should.equal(string1Result)
  })

  it('should not compress if it would make the string longer', () => {
    stringCompression(string2).should.equal(string2Result)
  })

  it('should handle chars that are not ajacent', () => {
    stringCompression(string3).should.equal(string3Result)
  })

  it('should not modify the input', () => {
    stringCompression(string1)
    string1.should.equal('aabccccgg')
  })
})
