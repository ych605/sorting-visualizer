import { UPDATE_SECTION, UPDATE_LENGTH, UPDATE_SPEED } from '../actions/types';
import defaultValues from '../../config/defaultValues';

export const section = (state = defaultValues.section, action) => {
  switch (action.type) {
    case UPDATE_SECTION:
      return action.payload.newSection;
    default:
      return state;
  };
};

export const length = (state = defaultValues.length, action) => {
  switch (action.type) {
    case UPDATE_LENGTH:
      return action.payload.newLength;
    default:
      return state;
  };
};

export const speed = (state = defaultValues.speed, action) => {
  switch (action.type) {
    case UPDATE_SPEED:
      return action.payload.newSpeed;
    default:
      return state;
  };
};

export const elementRange = (state = [1, defaultValues.length], action) => {
  switch (action.type) {
    case UPDATE_LENGTH:
      return [1, action.payload.newLength];
    default:
      return state;
  };
};