'use strict'

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
  return this
}

module.exports.myEach = Array.prototype.myEach

Array.prototype.myMap = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result
}

module.exports.myMap = Array.prototype.myMap

Array.prototype.mySelect = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    let el = this[i]
    if (callback(el)) {
      result.push(el)
    }
  }

  return result
}

module.exports.mySelect = Array.prototype.mySelect

Array.prototype.myReject = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    let el = this[i]
    if (!callback(el)) {
      result.push(el)
    }
  }

  return result
}

module.exports.myReject = Array.prototype.myReject

Array.prototype.myAny = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true
    }
  }
  return false
}

module.exports.myAny = Array.prototype.myAny

Array.prototype.myAll = function (callback) {
  let result = true
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      result = false
    }
  }

  return result
}

module.exports.myAll = Array.prototype.myAll

Array.prototype.myReduce = function (callback) {
  let accumulator = this[0]
  for (let i = 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }
  return accumulator
}

module.exports.myReduce = Array.prototype.myReduce
