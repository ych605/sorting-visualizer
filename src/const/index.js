import { bubbleSort, insertionSort, mergeSort } from '../utils';

export const sortingMethods = [
  {
    name: 'Bubble sort',
    sort: bubbleSort
  },
  {
    name: 'Insertion sort',
    sort: insertionSort
  },
  {
    name: 'Merge sort',
    sort: mergeSort
  }
];