// An implementation of a stack with push, pop, peek, and length methods are
// provided for you.
const Stack = require('./stack');

// Write a function named checkParens that takes in the following:
//   - str (a string)
// The function returns true if all matching start parenthesis has a matching
// end parenthesis in proper order. All other characters are ignored.
// Example:
//   checkParens('()') -> true
//   checkParens('(Hello)') -> true
//   checkParens('') -> true
//   checkParens('(') -> false
//   checkParens(')(') -> false (closes before one is open)
//   checkParens('()()') -> true
//   checkParens('(adfa(dvb)') -> false

function checkParens(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push('(');
    }

    if (str[i] === ')') {
      if (stack.length() > 0) {
        stack.pop();
      }
    }
  }

  return stack.length() === 0;
}

// Write a function named validate that takes in a string of text
// representing some code filled with parentheses (), brackets [], and
// curly braces {}.
//
// (, {, [ are called "openers."
// ), }, ] are called "closers."
//
// The function returns true if the input strings openers are matched in
// properly nested with the closers.
//
// Examples:
//
// "{ [ ] ( ) }" should return true (properly nested and matched)
// "{ [ ( ] ) }" should return false (closing bracket before closing
// parentheses)
// "{ [ }" should return false (no closing bracket)
// "}" should return false (no opening curly brace)

function validate(str) {
  const openers = ['{', '(', '[']
  const closers = ['}', ')', ']']
  const symbols = new Stack();

  for (let i = 0; i < str.length; i++) {
    const openerIndex = openers.indexOf(str[i]);
    const closerIndex = closers.indexOf(str[i]);

    if (openerIndex >= 0) {
      symbols.push(openerIndex);
    }

    if (closerIndex >= 0 && (symbols.length === 0 || symbols.pop() !== closerIndex)) {
      return false;
    }
  }

  return symbols.length() === 0;
}

// Write a function called finalText that takes in an array of commands. A
// command is one of the following:
//   * { command: 'write', text: STRING }
//   * { command: 'undo' }
//
// The array of commands follows an order of commands issued to an editor. For
// example, given the following input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' }
// ]
//
// The function would produce 'HelloWorld'. This because we first wrote "Hello", and then we wrote "World" (no spaces or newlines in between)
//
// The undo command undoes the last write command. For example, given:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
// ]
//
// The function would produce just 'Hello'. This is because it wrote the first
// two commands, and then it undo-ed the last write command. You can undo
// multiple times too. For example, given the input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
//
// The function would produce the empty string (''). This is because it wrote
// the first two commands, and then it undid each command. If there are too
// many undo's throw an error. The following example would throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
function finalText(commands) {
  const text = new Stack();

  for (cmd of commands) {
    if (cmd.command === 'write') {
      text.push(cmd.text);
    }

    if (cmd.command === 'undo') {
      if (text.length() === 0) {
        throw new Error('Nothing left to undo');
      } else {
        text.pop();
      }
    }
  }

  let str = '';
  while(text.length() > 0) {
    str += text.pop();
  }

  return str;
}

// Write a function called finalText2 that takes in an array of commands. A
// command is one of the following:
//   * { command: 'write', text: STRING }
//   * { command: 'undo' }
//   * { command: 'redo' }
//
// The difference is the addition of the redo command, which allows the ability
// to redo an action that was undone.
//
// Example: All of the above examples should apply.
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
//   { command: 'redo' }
// ]
// Should produce 'HelloWorld'
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
//   { command: 'redo' }
//   { command: 'undo' }
// ]
// Should produce 'Hello'
//
// Similarly, if there's nothing to redo, the function should throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'undo' },
//   { command: 'redo' },
//   { command: 'redo' }
// ]
// Should throw an error.
function finalText2(commands) {
  const text = new Stack();
  const undoStack = new Stack();

  for (cmd of commands) {
    if (cmd.command === 'write') {
      text.push(cmd.text);
    }

    if (cmd.command === 'undo') {
      if (text.length() === 0) {
        throw new Error('Nothing left to undo');
      } else {
        undoStack.push(text.pop());
      }
    }

    if (cmd.command === 'redo') {
      if (undoStack.length() === 0) {
        throw new Error('Nothing left to redo');
      } else {
        text.push(undoStack.pop());
      }
    }
  }

  let str = '';
  while(text.length() > 0) {
    str += text.pop();
  }

  return str;
}
