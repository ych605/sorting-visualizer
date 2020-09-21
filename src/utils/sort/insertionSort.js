const insertionSort = function* (list) {
  for (let i = 0; i < list.length; i++) {
    const t = list[i];
    let j = i - 1;
    yield [[...list], [i, j], [0, i-1]];
    while (j >= 0 && list[j] > t) {
      j--;
      yield [[...list], [i, j], [0, i-1]];
    }
    list.splice(j+1, 0, list[i]);
    list.splice(i+1, 1);
    yield [[...list], [], []];
  }
};

export default insertionSort;