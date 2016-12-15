// Write a function named insertInBack that takes in the following:
//   value (a number)
//   list (a linked list)
// The function returns The linked list with the node inserted at the end.
// Example:
//    insertInBack(1 -> 2 -> 3 -> ., 4) produces 1 -> 2 -> 3 -> 4 -> .
function insertInBack(value, list) {
  if (list === null) {
    return { value, next: null };
  }

  let head = list;      // Point to head

  while (list.next !== null) {
    list = list.next;
  }

  list.next = { value, next: null };

  return head;
}

// Write a function named removeNodeAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the linked list with the node at that index removed.
// Example:
//  removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .
function removeNodeAtIndex(list, index) {
  let head = list;      // Point to head
  let prev = list;
  let curIndex = 0;

  while(list !== null) {
    if (curIndex === index) {
      if (index === 0) {
        return list.next;
      } else {
        prev.next = list.next;

        return head;
      }
    }

    prev = list;
    curIndex += 1;
    list = list.next;
  }

  return head;
}

// Write a function named reverse that takes in the following:
//   list (a linked list)
// The function returns a NEW linked list with the items in reverse order.
// Example:
//   1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
function reverse(list) {
  let newList = null;

  while(list !== null) {
    newList = {
      value: list.value,
      next: newList
    };

    list = list.next;
  }

  return newList;

  // const tailFcn = function (list, acc) {
  //   if (list === null) {
  //     return acc;
  //   } else {
  //     return tailFcn(list.next, {
  //       value: list.value,
  //       next: acc
  //     });
  //   }
  // }
  //
  // tailFcn(list, null);
}

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
