import { PROCESS_START, PROCESS_END, LIST_RAMDOMIZED, LIST_SORTED } from '../actions/types';

export const processStart = () => ({
  type: PROCESS_START
});

export const processEnd = () => ({
  type: PROCESS_END
});

export const listRandomized = () => ({
  type: LIST_RAMDOMIZED
});

export const listSorted = () => ({
  type: LIST_SORTED
});