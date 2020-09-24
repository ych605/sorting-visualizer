const bubbleSort = function* (list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      yield [[...list], [j, j+1], []];
      if (list[j] > list[j+1]) {
        [ list[j], list[j+1] ] = [ list[j+1], list[j] ]
      }
      yield [[...list], [], []];
    }
  }
};

export default bubbleSort;