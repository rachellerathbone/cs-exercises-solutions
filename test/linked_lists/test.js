'use strict'

const expect = require("chai").expect;
const level1 = require('../../linked_lists/level1');
const level2 = require('../../linked_lists/level2');
const level3 = require('../../linked_lists/level3');

const buildList = function(num, fcn = (num) => num) {
  if (num === 0) {
    return null;
  } else {
    return {
      value: fcn(num),
      next: buildList(num - 1, fcn)
    };
  }
};
describe('LinkedList', () => {
  describe('Level One', () => {
    describe("#Count", () => {
      it('Returns the count for an empty linked list', () => {
        expect(level1.count(buildList(0))).to.be.equal(0);
      });

      it('Returns the count for a non-empty linked list', () => {
        expect(level1.count(buildList(3))).to.be.equal(3);
      });
    });

    describe("#insertInFront", () => {
      it('Inserts a node on an empty linked list', () => {
        expect(level1.insertInFront(4, buildList(0))).to.be.eql({
          value: 4,
          next: null
        });
      });

      it('Inserts a node on a non-empty linked list', () => {
        expect(level1.insertInFront(4, buildList(3))).to.be.eql({
          value: 4,
          next: buildList(3)
        });
      });
    });

    describe("#Sum", () => {
      it('Returns the sum for an empty linked list', () => {
        expect(level1.sum(buildList(0))).to.be.equal(0);
      });

      it('Returns the sum for a non-empty linked list', () => {
        expect(level1.sum(buildList(3))).to.be.equal(6);
      });
    });

    describe("#GetValueAtIndex", () => {
      it('Returns the value for a linked list at a certain index', () => {
        expect(level1.getValueAtIndex(buildList(3), 2)).to.be.equal(1);
        expect(level1.getValueAtIndex(buildList(3), 0)).to.be.equal(3);
      });

      it('Throws an error when the index is out of bounds', () => {
        expect(() => level1.getValueAtIndex(buildList(3), -1)).to.throw(Error);
        expect(() => level1.getValueAtIndex(buildList(3), 3)).to.throw(Error);
      });
    });

    describe("#ToArray", () => {
      it('Returns the an empty array for an empty linked list', () => {
        expect(level1.toArray(buildList(0))).to.be.eql([]);
      });

      it('Returns an array for a non-empty linked list', () => {
        expect(level1.toArray(buildList(3))).to.be.eql([3, 2, 1]);
      });
    });
  });

  describe('Level Two', () => {
    describe("#InsertInBack", () => {
      it('Inserts an item to the end of an empty linked list', () => {
        expect(level2.insertInBack(4, buildList(0))).to.be.eql({
          value: 4,
          next: null
        });
      });

      it('Inserts an item to the end of a non-empty linked list', () => {
        expect(level2.insertInBack(4, buildList(3))).to.be.eql({
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: {
                value: 4,
                next: null
              }
            }
          }
        });
      });
    });

    describe("#RemoveNodeAtIndex", () => {
      it('Removes a node at a certain index for an empty linked list', () => {
        expect(level2.removeNodeAtIndex(buildList(0), 1)).to.be.equal(null);
      });

      it('Inserts an item to the end of a non-empty linked list', () => {
        expect(level2.removeNodeAtIndex(buildList(3), 1)).to.be.eql({
          value: 3,
          next: {
            value: 1,
            next: null
          }
        });
      });
    });

    describe("#Reverse", () => {
      it('Returns the reverse of an empty linked list', () => {
        expect(level2.reverse(buildList(0))).to.be.equal(null);
      });

      it('Returns the reverse of a non-empty linked list', () => {
        expect(level2.reverse(buildList(3), 1)).to.be.eql({
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null
            }
          }
        });
      });
    });
  });

  describe('Level Three', () => {
    describe("#Merge", () => {
      it('Merges two empty linked lists', () => {
        expect(level3.merge(null, null)).to.be.equal(null);
      });

      it('Merges one empty linked list', () => {
        expect(level3.merge(buildList(3), null)).to.be.eql(buildList(3));
      });

      it('Merges one (the other side) empty linked list', () => {
        expect(level3.merge(null, buildList(3))).to.be.eql(buildList(3));
      });

      it('Merges two non-empty linked lists', () => {
        expect(level3.merge(buildList(2, (num) => 3 - num),
         buildList(3, (num) => 4 - num))).to.be.eql({
          value: 1,
          next: {
           value: 1,
           next: {
            value: 2,
            next: {
             value: 2,
             next: {
              value: 3,
              next: null
            }
           }
          }
         }
        });
      });
    });

    describe("#Map", () => {
      it('Maps over an empty linked lists (double)', () => {
        expect(level3.map(null, (num) => num * 2)).to.be.equal(null);
      });

      it('Maps over a non-empty linked list (double)', () => {
        const double = (num) => num * 2
        expect(level3.map(buildList(3), double)).to.be.eql(buildList(3, double));
      });
    });
  });

  describe("#Filter", () => {
    it('Filters over an empty linked lists (only evens)', () => {
      expect(level3.filter(null, (num) => num * 2)).to.be.equal(null);
    });

    it('Filters over a non-empty linked lists (only evens)', () => {
      expect(level3.filter(buildList(3), (num) => num % 2 === 0)).to.be.eql({
        value: 2,
        next: null
      });
    });
  });
});
