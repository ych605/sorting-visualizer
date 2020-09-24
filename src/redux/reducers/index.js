import { combineReducers } from 'redux';
import { isSorted, isProcessing } from './system';
import { section, length, speed, elementRange } from './configuration';
import { list, comparingNode, comparingList } from './list';

export default combineReducers({
  isSorted,
  isProcessing,
  section,
  length,
  speed,
  elementRange,
  list,
  comparingNode,
  comparingList
});