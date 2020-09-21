import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
  slider: {
    color: '#4970a0',
    transition: 'all 0.15s ease-in-out',

    '&:hover' : {
      color: '#6f9cd4'
    }
  },
  thumb: {
    width: '10px !important',
    height: '10px !important',
    marginTop: '-4px !important',
    marginLeft: '-5px !important'
  },
  valueLabel: {
    color: '#585858d1'
  },
  disabled: {
    color: '#4970a0 !important',
  }
});


const ValueLabelComponent = props => {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function CommonSlider(props) {
  const { value, min, max, step, disabled, marks, onChange, onChangeCommitted } = props;
  const classes = useStyles();

  return (
    <Slider
      ValueLabelComponent={ValueLabelComponent}
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      marks={marks}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      classes={{
        root: classes.slider,
        thumb: classes.thumb,
        valueLabel: classes.valueLabel,
        disabled: classes.disabled
      }}
    />
  );
}