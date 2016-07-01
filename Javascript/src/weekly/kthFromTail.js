'use strict'

const kthFromTail = (head, k) => {
  let runner1 = head
  let runner2 = head

  for (let i = 0; i < k; i++) {
    runner2 = runner2.next
  }

  while (runner2.next) {
    runner1 = runner1.next
    runner2 = runner2.next
  }

  return runner1
}
