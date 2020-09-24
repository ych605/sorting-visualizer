import React from 'react';
import Slider from './SliderConfiguration';
import { connect } from 'react-redux';
import { updateLength } from '../../redux/actions';
import defaultValues from '../../config/defaultValues';

const ListLength = props => {
  const { length, updateLength, isProcessing } = props;
  const [min, max] = defaultValues.lengthRange;

  return (
    <Slider
      title={'Length'}
      initValue={length}
      min={min}
      max={max}
      disabled={isProcessing}
      onChangeCommitted={(e, v) => updateLength(v)}
    />
  );
};

const mapStateToProps = state => ({
  length: state.length,
  isProcessing: state.isProcessing
});

export default connect(
  mapStateToProps,
  { updateLength }
)(ListLength);