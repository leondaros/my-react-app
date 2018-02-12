import {INCREMENT, DECREMENT} from '../config/constants/actions';

export const counterIncrement = () => {
 return {
  type: INCREMENT,
 };
};

export const counterDecrement = () => {
  return {
    type: DECREMENT,
  };
};
