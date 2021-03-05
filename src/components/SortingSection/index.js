import React, { useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SortingList from './SortingList';
import SortButton from './SortButton';
import { processStart, processEnd, listRandomized, listSorted, updateList, updateComparingNode, updateComparingList } from '../../redux/actions';
import { connect } from 'react-redux';
import { sortingMethods } from '../../const';
import { randomArray, sleep } from '../../utils';

const randomInterval = 15;

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1
  }
});

const SortingSection = props => {
  const {
    listRandomized,
    listSorted,
    isSorted,
    isProcessing,
    processStart,
    processEnd,
    section,
    length,
    elementRange,
    speed,
    list,
    updateList,
    updateComparingNode,
    updateComparingList
  } = props;
  const classes = useStyles();

  const sort = useCallback(function* (list) {
    yield* sortingMethods[section].sort([...list], 0, list.length-1);
  }, [section]);

  const sortList = useCallback(async () => {
    if (isProcessing) return;
    processStart();
    for (const [eachList, comparingNode, comparingList] of sort(list)) {
      updateList(eachList);
      updateComparingNode(comparingNode);
      updateComparingList(comparingList);
      await sleep(1000 / speed);
    }
    listSorted();
    processEnd();
  }, [isProcessing, processStart, processEnd, listSorted, sort, list, speed, updateList, updateComparingNode, updateComparingList]);

  const randomizeList = useCallback(async () => {
    if (isProcessing) return;
    processStart();
    for (const randomizinglist of randomArray(length, elementRange)) {
      updateList(randomizinglist);
      await sleep(randomInterval);
    }
    listRandomized();
    processEnd();
  }, [processStart, processEnd, listRandomized, isProcessing, length, elementRange, updateList]);

  useEffect(() => {
    listSorted();
    randomizeList();
  }, [length]);

  return (
    <div className={classes.container}>
      <SortingList />
      <SortButton onClick={isSorted ? randomizeList : sortList} isSorted={isSorted} isProcessing={isProcessing} />
    </div>
  );
};

const mapStateToProps = state => ({
  isSorted: state.isSorted,
  isProcessing: state.isProcessing,
  section: state.section,
  length: state.length,
  elementRange: state.elementRange,
  speed: state.speed,
  list: state.list
});

export default connect(
  mapStateToProps,
  { processStart, processEnd, listRandomized, listSorted, updateList, updateComparingNode, updateComparingList }
)(SortingSection);