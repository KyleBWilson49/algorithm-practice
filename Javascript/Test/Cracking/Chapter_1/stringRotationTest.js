'use strict'

const should = require('should')
const stringRotation = require('../../../src/Cracking/Chapter_1/stringRotation.js').stringRotation

describe('#stringRotation', () => {
  it('should return true for equal strings', () => {
    let string = 'hello'
    stringRotation(string, string).should.equal(true)
  })

  it('should return false for different length strings', () => {
    let s1 = 'hello'
    let s2 = 'goodbye'
    stringRotation(s1, s2).should.equal(false)
  })

  it('should return false if strings are not rotation', () => {
    let s1 = 'hello'
    let s2 = 'hlelo'
    stringRotation(s1, s2).should.equal(false)
  })

  it('should return true if they are rotations', () => {
    let s1 = 'hello'
    let s2 = 'llohe'
    stringRotation(s1, s2).should.equal(true)
  })
})
