import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    border: 0,
    background: 'transparent',
    outline: 'none',
    color: 'inherit',
    transition: 'all 0.15s ease-in-out',

    '&:hover': {
      cursor: 'pointer'
    },

    '&[disabled]': {
      pointerEvents: 'none'
    },
  }
});

export default function CommonButton(props) {
  const { text, onClick, className = '', style = {}, disabled } = props;
  const classes = useStyles();

  return (
    <button
      style={style}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}