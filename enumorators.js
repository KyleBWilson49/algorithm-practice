'use strict'

Array.prototype.each = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
  return this
}

let array = [1, 2, 3, 4]
let callback = (el) => {
  console.log(el)
}

array.each(callback)
