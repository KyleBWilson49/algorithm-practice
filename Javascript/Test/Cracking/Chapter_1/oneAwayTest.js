'use strict'
/* eslint-env mocha */

const should = require('should')
const oneAway = require('../../../src/Cracking/Chapter_1/oneAway.js').oneAway

describe('#oneAway', () => {
  it('should return true if one char is missing', () => {
    oneAway('pale', 'ple').should.equal(true)
  })

  it('should return true if one char is inserted', () => {
    oneAway('hello', 'heallo').should.equal(true)
  })

  it('should return true if one char is replaced', () => {
    oneAway('number', 'numser').should.equal(true)
  })

  it('should return true if it is the same string', () => {
    oneAway('kyle', 'kyle').should.equal(true)
  })

  it('should return false if more than one char is modified', () => {
    oneAway('samsung', 'sambang').should.equal(false)
  })
})
