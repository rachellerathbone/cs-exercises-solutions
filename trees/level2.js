// Write a function named toArray that takes in the following:
//   tree (a Binary Search Tree)
// The function returns an array of all the elements on the tree. The order is
// maintained.
//
// Example:
//    2
//   / \       produces [1, 2, 7]
//  1   7
//
//    2
//   / \       produces [1, 2, 4, 7]
//  1   4
//     / \
//    *   7
function toArray(tree) {
  if (tree === null) {
    return [];
  }

  return toArray(tree.left).concat([tree.value]).concat(toArray(tree.right));
}

// Write a function named findValueInTree that takes in the following:
//   tree (a Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
//
// Example:
//    1
//   /|\       with value 1, produces true
//  2 4 7      with value 3, produces false
function findValueInTree(tree, value) {
  return tree.value === value || tree.children.some((child) =>
    findValueInTree(child, value));
}

// Write a function named findValueInBinTree that takes in the following:
//   tree (a Binary Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
//
// Example:
//    2
//   / \       with value 1, produces true
//  1   7      with value 3, produces false
function findValueInBinTree(tree, value) {
  if (tree === null) {
    return false;
  }

  return tree.value === value || findValueInBinTree(tree.left, value) ||
    findValueInBinTree(tree.right, value);
}

// Write a function named findValueInBinSearchTree that takes in the following:
//   tree (a Binary Search Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
// NOTE: The same solution as findValueInBinTree would work, but we can improve
// the efficiency of these trees.
//
// Example:
//    2
//   / \       with value 1, produces true
//  1   7      with value 3, produces false
function findValueInBinSearchTree(tree, value) {
  if (tree === null) {
    return false;
  }

  return tree.value === value || (value < tree.value) ?
    findValueInBinTree(tree.left, value) :
    findValueInBinTree(tree.right, value);
}

// Write a function named insertInBinSearchTree that takes in the following:
//   tree (a Binary Search Tree)
//   value (number)
// The function returns a NEW Binary Search Tree with the value inserted. The
// tree does not need to be rebalanced. The position of each node will remain
// the same.
// Example:
//    2                                   2
//   / \       with value 5, produces    / \
//  1   7                               1   7
//                                         / \
//                                        5   *
function insertValueInBinSearchTree(tree, value) {
  if (tree === null) {
    return {
      value,
      left: null,
      right: null
    };
  }

  if (value < tree.value) {
    return {
      value: tree.value,
      left: insertValueInBinSearchTree(tree.left, value),
      right: tree.right
    };
  } else {
    return {
      value: tree.value,
      left: tree.left,
      right: insertValueInBinSearchTree(tree.right, value)
    };
  }
}

module.exports = {
  toArray,
  findValueInTree,
  findValueInBinTree,
  findValueInBinSearchTree,
  insertValueInBinSearchTree
}
