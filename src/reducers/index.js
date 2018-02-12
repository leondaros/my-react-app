import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers ({
  counter: counterReducer
});

export default reducers
