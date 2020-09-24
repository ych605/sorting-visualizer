import { UPDATE_SECTION, UPDATE_LENGTH, UPDATE_SPEED } from '../actions/types';

export const updateSection = newSection => ({
  type: UPDATE_SECTION,
  payload: { newSection }
});

export const updateLength = newLength => ({
  type: UPDATE_LENGTH,
  payload: { newLength }
});

export const updateSpeed = newSpeed => ({
  type: UPDATE_SPEED,
  payload: { newSpeed }
});