'use strict'

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
  return this
}

Array.prototype.myMap = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result
}

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

Array.prototype.myAny = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true
    }
  }
  return false
}

Array.prototype.myAll = function (callback) {
  let result = true
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      result = false
    }
  }

  return result
}

Array.prototype.myReduce = function (callback) {
  let accumulator = this[0]
  for (let i = 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }
  return accumulator
}

let array = [1, 2, 3, 4, 5]
let callback = function (el) {
  if (el > 3) {
    return true
  }
  return false
}
let callback2 = function (x, y) {
  return x + y
}


console.log(array.myReduce(callback2))
