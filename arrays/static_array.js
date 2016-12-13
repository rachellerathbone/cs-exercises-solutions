const FixedArray = require('./fixed_array');

// When working with FixedArrays, do NOT edit the internal variable "_array".

// Write a function, named arrayPush that takes in the following as arguments
//   * array - A Fixed Array
//   * item - A number
// The function returns a new Fixed Array with length 1 with the item added.
// Example:
//     const fa = new FixedArray(3);
//     fa.set(0, 1);   // Set value 1 at index 0
//     fa.set(1, 2);   // Set value 2 at index 1
//     fa.set(2, 3);   // Set value 3 at index 2
//     const newFa = arrayPush(fa, 4);
//     newFa instanceof FixedArray === true
//     newFa.length === 4
function arrayPush(array, item) {
  const newFa = new FixedArray(array.length + 1);

  for (let i = 0; i < array.length; i++) {
    newFa.set(i, array.get(i));
  }

  newFa.set(array.length, item);

  return newFa;
}

// Write a function named arrayDelete which takes in the following as arguments:
//  * array - A Fixed Array
//  * index - index (to remove)
// The function will return a fixed array with the item at that index removed.
// Example:
//     const fa = new FixedArray(3);
//     fa.set(0, 1);   // Set value 1 at index 0
//     fa.set(1, 2);   // Set value 2 at index 1
//     fa.set(2, 3);   // Set value 3 at index 2
//     const newFa = arraryDelete(fa, 1);
//     newFa instanceof FixedArray === true
//     fa.get(1) === 3
//     newFa.length === 2

function arrayDelete(array, index) {
  if (index >= array.length || index < 0) {
    throw new Error('Index out of bounds');
  }

  const newFa = new FixedArray(array.length - 1);

  for (let i = 0; i < newFa.length; i++) {
    if (i >= index) {
      newFa.set(i, array.get(i + 1));
    } else {
      newFa.set(i, array.get(i));
    }
  }

  return newFa;
}

module.exports = { arrayPush, arrayDelete }
