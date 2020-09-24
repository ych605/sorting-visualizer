import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { isBetween } from '../../utils';
import SortingElement from './SortingElement';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  list: {
    'margin': '1em 0'
  }
});

const SortingList = props => {
  const { list, comparingNode, comparingList, elementRange: [listMin, listMax] } = props;
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
};

const mapStateToProps = state => ({
  list: state.list,
  comparingNode: state.comparingNode,
  comparingList: state.comparingList,
  elementRange: state.elementRange
});

export default connect(
  mapStateToProps
)(SortingList);