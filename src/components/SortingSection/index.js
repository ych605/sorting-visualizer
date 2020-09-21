import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SortingList from './SortingList';
import SortButton from './SortButton';

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

export default function SortingSection(props) {
  const { listRange, list, comparingNode, comparingList, randomizeList, sortList, isSorted, isProcessing } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SortingList listRange={listRange} list={list} comparingNode={comparingNode} comparingList={comparingList} />
      <SortButton onClick={isSorted ? randomizeList : sortList} isSorted={isSorted} isProcessing={isProcessing} />
    </div>
  );
}