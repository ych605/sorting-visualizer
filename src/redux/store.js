import { applyMiddleware, createStore, compose } from 'redux';
import logger from './middleware/logger';
import reducers from './reducers';

// const middleware = applyMiddleware(logger, thunkMiddleware);

const store = createStore(reducers);

export default store;