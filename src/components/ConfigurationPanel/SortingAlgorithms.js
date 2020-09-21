import React from 'react';
import Button from '../Common/Button';
import { makeStyles } from '@material-ui/core/styles';

const pseudoElementCommonStyles = {
  content: '""',
  height: '10px',
  width: '5px',
  left: 0,
  position: 'absolute',
  borderTop: '5px solid transparent',
  borderBottom: '5px solid transparent',
  boxSizing: 'border-box',
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  button: {
    fontSize: 'inherit',
    color: '#aaa',
    paddingLeft: '12px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      color: '#fff',
    },

    '&:hover:before': {
      ...pseudoElementCommonStyles,
      borderLeft: '5px solid #aaa'
    },

    '&.active': {
      color: '#fff',
    },

    '&.active::after': {
      ...pseudoElementCommonStyles,
      borderLeft: '5px solid #6fc1d4'
    },
  }
});

export default function SortingMethods(props) {
  const { sortingMethods, section, setSection, isProcessing } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {sortingMethods.map((s, i) => (
        <Button
          key={i}
          className={`${classes.button} ${section === i ? 'active' : ''}`}
          text={s.name}
          onClick={() => setSection(i)}
          disabled={section === i || isProcessing}
        />
      ))}
    </div>
  )
}