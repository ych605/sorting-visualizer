import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SortingAlgorithms from './SortingAlgorithms';
import ListLength from './ListLength';
import SortingSpeed from './SortingSpeed';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  panel: {
    position: 'fixed',
    zIndex: 2,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '16px 0',
    fontSize: 'min(2.5vw, 14px)',
    opacity: props => props.isProcessing ? 0.4 : 1
  },
});

const ConfigurationPanel = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.panel}>
      <SortingAlgorithms />
      <ListLength />
      <SortingSpeed />
    </div>
  );
};

const mapStateToProps = state => ({
  isProcessing: state.isProcessing
});

export default connect(
  mapStateToProps
)(ConfigurationPanel);