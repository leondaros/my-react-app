
import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';

import {
  createLogger,
} from 'redux-logger';

import reducers from '../reducers';

const loggerMiddleware = createLogger();
const middlewares = [loggerMiddleware];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares)),
);

export default store;
