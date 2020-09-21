import React from 'react';
import Slider from './SliderConfiguration';

export default function ListLength(props) {
  const { speed, setSpeed, isProcessing } = props;
  const [min, max] = [1, 100];

  return (
    <Slider
      title={'Speed'}
      initValue={speed}
      min={min}
      max={max}
      disabled={isProcessing}
      onChangeCommitted={(e, v) => setSpeed(v)}
    />
  );
}