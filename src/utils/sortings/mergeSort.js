const mergeSort = function* (list, min, max) {
  if (min < max) {
    let mid = Math.floor((min + max) / 2);
    yield* mergeSort(list, min, mid);
    yield* mergeSort(list, mid+1, max);
    while (min <= mid && mid+1 <= max) {
      yield [[...list], [min, mid+1], [min, max]];
      if (list[min] > list[mid+1]) {
        mid++;
        list.splice(min, 0, list[mid]);
        list.splice(mid+1, 1);
        min++;
      } else {
        min++;
      }
      yield [[...list], [], [min, max]];
    }
    yield [[...list], [], []];
  }
};

export default mergeSort;