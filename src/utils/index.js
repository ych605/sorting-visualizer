import bubbleSort from './sort/bubbleSort';
import insertionSort from './sort/insertionSort';
import mergeSort from './sort/mergeSort';

const randomArray = function* (length, [min, max] = [1, 10]) {
  let n = length;
  const list = new Array(length);
  while (n > 0) {
    yield [...list];
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    list.splice(length - n, 1, num);
    n--;
  }
  yield [...list];
};

const isBetween = (min, max) => n => n >= min && n <= max;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export {
  bubbleSort,
  insertionSort,
  mergeSort,
  randomArray,
  isBetween,
  sleep
};