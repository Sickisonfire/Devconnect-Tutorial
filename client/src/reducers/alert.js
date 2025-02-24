// function that takes in a piece of state and an action

import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      //filter durch alerts for each alert, alert.id not equal to payload
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
