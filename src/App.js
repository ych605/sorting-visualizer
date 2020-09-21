import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { bubbleSort, insertionSort, mergeSort, randomArray, sleep } from './utils';
import SortingSection from './components/SortingSection';
import ConfigurationPanel from './components/ConfigurationPanel';

const randomInterval = 15;

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    textAlign: 'center',
    height: '100vh',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    backgroundImage: 'linear-gradient(45deg, #142129, #3a404a)'
  },
});

const sortingMethods = [
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

export default function App() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [comparingNode, setComparingNode] = useState([]);
  const [comparingList, setComparingList] = useState([]);
  const [listLength, setListLength] = useState(30);
  const [section, setSection] = useState(0);
  const [speed, setSpeed] = useState(100);

  const sort = useCallback(function* (list) {
    yield* sortingMethods[section].sort([...list], 0, list.length-1);
  }, [section]);

  const sortList = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    for (const [eachList, comparingNode, comparingList] of sort(list)) {
        setList(eachList);
        setComparingNode(comparingNode);
        setComparingList(comparingList);
        await sleep(1000 / speed);
    }
    setIsSorted(true);
    setIsProcessing(false);
  }, [isProcessing, sort, list, speed]);

  const randomizeList = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    for (const randomizinglist of randomArray(listLength, [1, listLength])) {
      setList(randomizinglist);
      await sleep(randomInterval);
    }
    setIsSorted(false);
    setIsProcessing(false);
  }, [isProcessing, listLength]);

  useEffect(() => {
    setIsSorted(true);
    randomizeList();
  }, [listLength]);

  return (
    <div className={classes.root}>
      <SortingSection
        listRange={[1, listLength]}
        list={list}
        comparingNode={comparingNode}
        comparingList={comparingList}
        randomizeList={randomizeList}
        sortList={sortList}
        isSorted={isSorted}
        isProcessing={isProcessing}
      />
      <ConfigurationPanel
        sortingMethods={sortingMethods}
        section={section}
        setSection={setSection}
        listLength={listLength}
        setListLength={setListLength}
        isProcessing={isProcessing}
        speed={speed}
        setSpeed={setSpeed}
      />
    </div>
  );
};