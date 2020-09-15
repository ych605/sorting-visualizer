import React, { useState, useEffect } from 'react';
import './App.css';

const listLength = 50;
const [listMin, listMax] = [1, 100];
const sortingInterval = 10;
const randomInterval = 15;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const sort = function* (list) {
  // yield* bubbleSortHelper([...list]);
  // yield* insertionSortHelper([...list]);
  yield* mergeSortHelper([...list], 0, list.length-1);
};

// const bubbleSortHelper = function* (list) {
//   for (let i = 0; i < list.length - 1; i++) {
//     for (let j = 0; j < list.length - 1 - i; j++) {
//       yield [[...list], [j, j+1], []];
//       if (list[j] > list[j+1]) {
//         [ list[j], list[j+1] ] = [ list[j+1], list[j] ]
//       }
//       yield [[...list], [], []];
//     }
//   }
// }
//
// const insertionSortHelper = function* (list) {
//   for (let i = 0; i < list.length; i++) {
//     const t = list[i];
//     let j = i - 1;
//     yield [[...list], [i, j], [0, i-1]];
//     while (j >= 0 && list[j] > t) {
//       j--;
//       yield [[...list], [i, j], [0, i-1]];
//     }
//     list.splice(j+1, 0, list[i]);
//     list.splice(i+1, 1);
//     yield [[...list], [], []];
//   }
// }

const mergeSortHelper = function* (list, min, max) {
  if (min < max) {
    let mid = Math.floor((min + max) / 2);
    yield* mergeSortHelper(list, min, mid);
    yield* mergeSortHelper(list, mid+1, max);
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

export default function App() {
  const [list, setList] = useState([]);
  const [isSorted, setIsSorted] = useState(true);
  const [isSorting, setIsSorting] = useState(false);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [comparingNode, setComparingNode] = useState([]);
  const [comparingList, setComparingList] = useState([]);

  const sortList = async () => {
    if (isSorting) return;
    setIsSorting(true);
    for (const [eachList, comparingNode, comparingList] of sort(list)) {
        setList(eachList);
        setComparingNode(comparingNode);
        setComparingList(comparingList);
        await sleep(sortingInterval);
    }
    setIsSorted(true);
    setIsSorting(false);
  };

  const randomizeList = async () => {
    if (isRandomizing) return;
    setIsRandomizing(true);
    for (const randomizinglist of randomArray(listLength, [listMin, listMax])) {
      setList(randomizinglist);
      await sleep(randomInterval);
    }
    setIsSorted(false);
    setIsRandomizing(false);
  }

  useEffect(() => {
    randomizeList();
  }, []);

  return (
    <div className="App">
      <p>{list.map((n, i, arr) => {
        const v = Math.round(255 * (listMax - n) / (listMax - listMin));
        const inComparingNode = comparingNode.includes(i);
        const inComparingList = isBetween(...comparingList)(i);
        const props = {
          key: i,
          style: {
            color: `rgb(${v}, ${v}, ${v})`,
            fontSize: `min(calc(10px + 2vmin), ${60 / arr.length}vw)`,
            padding: `min(6px, ${10 / arr.length}vw)`
          }
        };
        const nodeProps = {
          style: {
            height: `min(2px, ${5 / arr.length}vw)`
          }
        }
        const listProps = {
          style: {
            height: `min(2px, ${5 / arr.length}vw)`,
            bottom: `max(-5px, ${-10 / arr.length}vw)`
          }
        }
        return (
          <span {...props}>
            {n}
            {inComparingNode && <i className={`node`} {...nodeProps} />}
            {inComparingList && <i className={`list`} {...listProps} />}
          </span>
        );
      })}</p>
      {isSorted ?
        <button onClick={randomizeList} data-disabled={isRandomizing}>{isRandomizing ? `Randomizing` : `Randomize`}</button>
      : <button onClick={sortList} data-disabled={isSorting}>{isSorting ? `Sorting` : `Sort`}</button>
      }
    </div>
  );
};
