// isBST
function isBST(tree) {
  if (tree === null) {
    return true;
  }

  function maxValue(btree) {
    if (btree === null) {
      return Number.NEGATIVE_INFINITY
    }

    return Math.max(maxValue(btree.left))
  }

  return isBST(tree.left) && isBST(tree.right) &&
    maxValue(tree.left) < tree.value && minValue(tree.right) > tree.value;
}
// isBalanced
