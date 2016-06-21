'use strict'

Array.prototype.bubbleSort = function (callback) {
  if (!callback) {
    callback = function (x, y) {
      if (x <= y) {
        return true
      }
      return false
    }
  }
  let sorted = false
  let array = this.slice(0)

  while (!sorted) {
    sorted = true
    for (let i = 0; i < array.length - 1; i++) {
      if (!callback(array[i], array[i + 1])) {
        let temp = array[i]
        array[i] = array [i + 1]
        array[i + 1] = temp
        sorted = false
      }
    }
  }

  return array
}

if (typeof module !== 'undefined' && module.exports != null) {
  module.exports.bubbleSort = Array.prototype.bubbleSort
}
