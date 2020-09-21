import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { isBetween } from '../../utils';
import SortingElement from './SortingElement';

const useStyles = makeStyles({
  list: {
    'margin': '1em 0'
  }
});

export default function SortingList(props) {
  const { list, comparingNode, comparingList, listRange: [listMin, listMax] } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.list}>
      {list.map((n, i, arr) => (
        <SortingElement
          key={i}
          n={n}
          brightness={Math.round(255 * (listMax - n) / (listMax - listMin))}
          arrLength={arr.length}
          inComparingNode={comparingNode.includes(i)}
          inComparingList={isBetween(...comparingList)(i)}
        />
      ))}
    </div>
  );
}