import { UPDATE_LIST, UPDATE_COMPARING_NODE, UPDATE_COMPARING_LIST } from '../actions/types';
import defaultValues from '../../config/defaultValues';

export const list = (state = defaultValues.list, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return action.payload.newList;
    default:
      return state;
  };
};

export const comparingNode = (state = defaultValues.comparingNode, action) => {
  switch (action.type) {
    case UPDATE_COMPARING_NODE:
      return action.payload.newComparingNode;
    default:
      return state;
  };
};

export const comparingList = (state = defaultValues.comparingList, action) => {
  switch (action.type) {
    case UPDATE_COMPARING_LIST:
      return action.payload.newComparingList;
    default:
      return state;
  };
};