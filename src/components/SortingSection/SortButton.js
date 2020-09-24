import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Common/Button';

const pseudoElementCommonStyles = {
  content: '""',
  display: 'inline-block',
  width: '1em',
  textAlign: 'left'
};

const useStyles = makeStyles({
  button: {
    color: '#4970a0',
    fontSize: 'min(10px + 2vmin, 14px)',

    '&:hover': {
      color: '#6f9cd4'
    },

    '&:active': {
      color: '#3c6182'
    },

    '&[disabled]::before': {
      ...pseudoElementCommonStyles
    },

    '&[disabled]::after': {
      ...pseudoElementCommonStyles,
      animation: '$loading 0.8s infinite',
    }
  },
  '@keyframes loading': {
    '0%': {
      content: '""'
    },
    '25%': {
      content: '"."'
    },
    '50%': {
      content: '".."'
    },
    '75%': {
      content: '"..."'
    }
  },
});

const buttonText = {
  true: {
    true: 'Randomizing',
    false: 'Randomize'
  },
  false: {
    true: 'Sorting',
    false: 'Sort'
  }
};

export default function SortButton(props) {
  const { onClick, isSorted, isProcessing } = props;
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      onClick={onClick}
      disabled={isProcessing}
      text={buttonText[!!isSorted][!!isProcessing]}
    />
  );
};