import { UPDATE_LIST, UPDATE_COMPARING_NODE, UPDATE_COMPARING_LIST } from '../actions/types';

export const updateList = newList => ({
  type: UPDATE_LIST,
  payload: { newList }
});

export const updateComparingNode = newComparingNode => ({
  type: UPDATE_COMPARING_NODE,
  payload: { newComparingNode }
});

export const updateComparingList = newComparingList => ({
  type: UPDATE_COMPARING_LIST,
  payload: { newComparingList }
});