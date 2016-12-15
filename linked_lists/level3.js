// Write a function named merge that takes in the following as arguments:
//   list1 - a linked list in sorted order
//   list2 - a linked list in sorted order
// The function returns a NEW linked list that is in sorted order.
// Example:
//    merge(1 -> 3 -> 5 -> ., 2 -> 4 -> 6 -> .) produces
//       1 -> 2 -> 3 -> 4 -> 5 -> 6 -> .
function merge(list1, list2) {
  let newList = {
    value: null,
    next: null
  };
  let listTail = newList;

  while(list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      listTail.next = {
        value: list1.value,
        next: null
      };
      list1 = list1.next;
      listTail = listTail.next;
    } else {
      listTail.next = {
        value: list2.value,
        next: null
      };
      list2 = list2.next;
      listTail = listTail.next;
    }
  }

  while(list1 !== null) {
    listTail.next = {
      value: list1.value,
      next: null
    };
    list1 = list1.next;
    listTail = listTail.next;
  }

  while(list2 !== null) {
    listTail.next = {
      value: list2.value,
      next: null
    };
    list2 = list2.next;
    listTail = listTail.next;
  }

  return newList.next;

  // if (list1 === null && list2 === null) {
  //   return null;
  // } else if (list1 === null) {
  //   return {
  //     value: list2.value,
  //     next: merge(list1, list2.next);
  //   };
  // } else if (list2 === null) {
  //   return {
  //     value: list1.value,
  //     next: merge(list1.next, list2);
  //   };
  // } else if (list1.value < list2.value) {
  //   return {
  //     value: list1.value,
  //     next: merge(list1.next, list2);
  //   };
  // } else {
  //   return {
  //     value: list2.value,
  //     next: merge(list1, list2.next);
  //   };
  // }
}

// Write a function named map, that takes in the following as arguments:
//   list - A linked list
//   fcn - a function that takes in the value of each node as an argument.
//         it returns a new value.
// The function returns a NEW linked list, where each node's value is the same as the function applied on the original linked list.
// Example:
//    map(1 -> 2 -> 3 -> ., (num) => num * 2) produces 2 -> 4 -> 6 -> .
function map(list, fcn) {
  let newList = null;
  let listTail = null;

  while(list !== null) {
    if(newList === null) {
      newList = {
        value: fcn(list.value),
        next: null
      };
      listTail = newList;
    } else {
      listTail.next = {
        value: fcn(list.value),
        next: null
      };
      listTail = listTail.next;
    }

    list = list.next;
  }

  return newList;

  // if (list === null) {
  //   return null;
  // } else {
  //   return {
  //     value: fcn(list.value),
  //     next: map(list.next, fcn);
  //   }
  // }
}

// Write a function named filter, that takes in the following as arguments:
//   list - A linked list
//   fcn - a function that takes in the value of each node as an argument and
//         returns a boolean.
// The function returns a NEW linked list, where each node's value is the same
// as the function applied on the original linked list.
// Example:
//    filter(1 -> 2 -> 3 -> 4 -> ., (num) => num % 2 === 0) produces
//        2 -> 4 -> 6 -> .
function filter(list, fcn) {
  let newList = null;
  let listTail = null;

  while(list !== null) {
    if (fcn(list.value)) {
      if(newList === null) {
        newList = {
          value: list.value,
          next: null
        };
        listTail = newList;
      } else {
        listTail.next = {
          value: list.value,
          next: null
        };
        listTail = listTail.next;
      }
    }

    list = list.next;
  }

  return newList;

  // if (list === null) {
  //   return null;
  // } else {
  //   if (fcn(list.value)) {
  //     return {
  //       value: list.value,
  //       next: filter(list.next, fcn);
  //     }
  //   }
  //
  //   return filter(list.next, fcn);
  // }
}

module.exports = {
  merge,
  map,
  filter
}
