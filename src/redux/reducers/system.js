import { PROCESS_START, PROCESS_END, LIST_RAMDOMIZED, LIST_SORTED } from '../actions/types';
import defaultValues from '../../config/defaultValues';

export const isSorted = (state = defaultValues.isSorted, action) => {
  switch (action.type) {
    case LIST_RAMDOMIZED:
      return false;
    case LIST_SORTED:
      return true;
    default:
      return state;
  };
};

export const isProcessing = (state = defaultValues.isProcessing, action) => {
  switch (action.type) {
    case PROCESS_START:
      return true;
    case PROCESS_END:
      return false;
    default:
      return state;
  };
};