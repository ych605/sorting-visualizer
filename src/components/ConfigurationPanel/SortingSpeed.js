import React from 'react';
import Slider from './SliderConfiguration';
import { connect } from 'react-redux';
import { updateSpeed } from '../../redux/actions';
import defaultValues from '../../config/defaultValues';

const SortingSpeed = props => {
  const { speed, isProcessing, updateSpeed } = props;
  const [min, max] = defaultValues.speedRange;
  
  return (
    <Slider
      title={'Speed'}
      initValue={speed}
      min={min}
      max={max}
      disabled={isProcessing}
      onChangeCommitted={(e, v) => updateSpeed(v)}
    />
  );
};

const mapStateToProps = state => ({
  speed: state.speed,
  isProcessing: state.isProcessing
});

export default connect(
  mapStateToProps,
  { updateSpeed }
)(SortingSpeed);