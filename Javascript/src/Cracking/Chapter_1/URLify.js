'use strict'

const URLify = function (string) {
  return string.replace(/\s/gi, '%20')
}

module.exports.URLify = URLify
