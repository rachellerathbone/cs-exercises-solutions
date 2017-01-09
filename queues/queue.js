// In this exercise, you will build an example queue using a linked list with a
// reference to the tail. In this case, you will implement the methods of a
// queue.
class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  // The enqueue method will add an item to the internal linked list at the
  // tail. If this is the first time added, it needs to set the tail and the
  // head. Don't forget to update the length field.
  enqueue(value) {
    if (this._tail === null) {
      this._head = {
        value,
        next: null
      };
      this._tail = this._head;
    } else {
      this._tail.next = {
        value,
        next: null
      };
      this._tail = this._tail.next;
    }

    this.length += 1;
  }

  // The peek method will return the first item's value in the queue, but it
  // does not remove it from the queue. It will return undefined if there are
  // no items in the queue.
  peek() {
    if (this._head === null) {
      return undefined;
    } else {
      return this._head.value;
    }
  }

  // The dequeue method will return the first item's value from the linked list
  // as well as remove it from the linked list. It will return undefined if
  // there are no items in the queue. Don't forget to update the length field.
  // Also, if the list is emptied, update the tail to be null as well.
  dequeue() {
    if (this._head === null) {
      return undefined;
    } else {
      const node = this._head;

      this._head = this._head.next;

      if (this._head === null) {
        this._tail = null;
      }

      this.length -= 1;
      return node.value;
    }
  }
}

module.exports = Queue;
