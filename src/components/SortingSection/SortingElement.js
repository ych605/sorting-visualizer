import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  element: {
    position: 'relative',
    color: props => `rgb(${props.brightness}, ${props.brightness}, ${props.brightness})`,
    fontSize: props => `min(calc(10px + 2vmin), ${60 / props.arrLength}vw)`,
    padding: props => `0 min(6px, ${10 / props.arrLength}vw)`,

    '&.node::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#7f8ca0',
      height: props => `min(2px, ${5 / props.arrLength}vw)`
    },

    '&.list::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#424d5d',
      height: props => `min(2px, ${5 / props.arrLength}vw)`,
      bottom: props => `max(-5px, ${-10 / props.arrLength}vw)`
    }
  },
});

export default function SortingElement(props) {
  const { n, inComparingNode, inComparingList } = props;
  const classes = useStyles(props);

  return (
    <span className={`${classes.element} ${inComparingNode ? 'node' : ''} ${inComparingList ? 'list' : ''}`} children={n} />
  );
}