'use strict'

const stringRotation = (s1, s2) => {
  return (s2 + s2).indexOf(s1) > -1
}

module.exports.stringRotation = stringRotation
