'use strict'

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr){
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) swap(arr, i, min);
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }

  return arr;
}

function merge(arr1, arr2) {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    result.push(arr1[idx1] < arr2[idx2] ? arr1[idx1++] : arr2[idx2++]);
  }

  return result.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));
}

function partition(arr, left, right){
  let pivotValue = arr[left];
  let partitionIndex = left;

  for(let i = left+1; i <= right; i++){
    if(arr[i] < pivotValue){
      partitionIndex++;
      swap(arr, i, partitionIndex);
    }
  }

  swap(arr, left, partitionIndex);

  return partitionIndex;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
   let partitionIndex = partition(arr, left, right);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

module.exports = {
  swap,
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  partition,
  mergeSort,
  quickSort
};
