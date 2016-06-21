'use strict'

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
  return this
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

let array = [1, 2, 3, 4, 5]
let callback = function (el) {
  if (el > 3) {
    return true
  }
  return false
}

console.log(array.mySelect(callback))
