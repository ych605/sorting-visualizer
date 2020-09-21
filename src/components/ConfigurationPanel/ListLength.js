import React from 'react';
import Slider from './SliderConfiguration';

export default function ListLength(props) {
  const { listLength, setListLength, isProcessing } = props;
  const [min, max] = [10, 100];

  return (
    <Slider
      title={'Length'}
      initValue={listLength}
      min={min}
      max={max}
      disabled={isProcessing}
      onChangeCommitted={(e, v) => setListLength(v)}
    />
  );
}