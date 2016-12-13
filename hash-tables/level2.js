'use strict';

/*

Create a function named reverseMerge.
It takes two arguments "keyArr" and "valArr" both of type Array.
It will return a hash that is a merge between the two inputs where
the values in keyArr will be the hashes key and
the values in valArr will be the hashes value.
The catch is that the values from the valArr will be assigned in from last to first.

i.e.
keyArr = [a, b, c];
valArr = [1, 2, 3];

output => {a: 3, b: 2, c: 1}

*/

const reverseMerge = (keyArr, valArr) => {
  const merge = {};
  const size = keyArr.length > valArr.length ? keyArr.length : valArr.length;

  for (let i = 0; i < size; i++) {
    const val = valArr[size - (i + 1)] || 42;
    const key = keyArr[i] || 'foo';

    if (key === 'foo' && merge[key]) {
      merge[key].push(val);
    } else if (key === 'foo') {
      merge[key] = [val];
    } else{
      merge[key] = val;
    }
  }

  return merge;
}

/*

Create a function named mostUsedWord.
It takes a single argument "sentence" of type string.
It will return an object with a single key-value pair.
The key will be the word with the highest occurance in the string.
The value will the the number of occurances of that word in the string.

*/

const mostUsedWord = (sentence) => {
  const wordArr = sentence.toLowerCase().split(' ');
  const starter = wordArr.splice(0,1);
  const count = { [starter]: 1 };
  let cache = { [starter]: 1 };

  wordArr.forEach( word => {
    if (word in count) {
      count[word] += 1;
      if (count[word] > cache[Object.keys(cache)[0]]) {
        cache = { [word]: count[word] };
      }
    } else {
      count[word] = 1;
    }
  });

  return cache;
}


/*

Write a function, isAnagram.
It takes a two arguments "test" and "original", both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {
  const og = {};
  let match = true;

  original.toLowerCase().split('').forEach( char => {
    if (char in og) {
      og[char] += 1;
    } else {
      og[char] = 1;
    }
  });

  test.toLowerCase().split('').forEach( char => {
    if (!char in og) {
      extra = true;
      return
    } else if ((char in og) && (og[char] > 1)) {
      og[char] -= 1;
    } else {
      delete og[char];
    }
  });

  if (Object.keys(og).length > 0) {
    match = false;
  }

  return match
}

module.exports = { reverseMerge, mostUsedWord, isAnagram };
