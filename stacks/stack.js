class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  pop(item) {
    return this._arr.pop(item);
  }

  length() {
    return this._arr.length;
  }
}

module.exports = Stack;
