'use strict'
/* eslint-env mocha */

const should = require('should')
const URLify = require('../../../src/Cracking/Chapter_1/URLify.js').URLify

describe('#URLify', function () {
  let emptyString = ''
  let stringWithSpaces = 'Hello my name is Kyle'
  let stringWithSpacesResult = 'Hello%20my%20name%20is%20Kyle'
  let stringNoSpaces = 'HellomynameisKyle'

  it('should not modify the input', function () {
    URLify(stringWithSpaces)
    stringWithSpaces.should.equal('Hello my name is Kyle')
  })

  it('should replace spaces with %20', function () {
    URLify(stringWithSpaces).should.equal(stringWithSpacesResult)
  })

  it('should not modify input if there are no spaces', function () {
    URLify(stringNoSpaces).should.equal(stringNoSpaces)
  })

  it('should return empty string if given empty string', function () {
    URLify(emptyString).should.equal(emptyString)
  })
})
