import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '../Common/Slider';

const useStyles = makeStyles({
  container: {
    width: 'min(100px, 20vw)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  title: {
    fontSize: 'inherit',
    margin: '0',
    marginBottom: 'min(0.1vw, 6px)',
    textAlign: 'left'
  }
});

export default function SliderConfiguration(props) {
  const { title, initValue, min, max, disabled, marks = false, onChangeCommitted } = props;
  const classes = useStyles();
  const [value, setValue] = useState(initValue);

  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <Slider
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        marks={marks}
        onChange={(e, v) => setValue(v)}
        onChangeCommitted={onChangeCommitted}
      />
    </div>
  );
}