import * as types from './message.types';
import initialState from './message.initial';

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MESSAGE_SUCCESS: {
      const newArray = state.messages.slice();
      newArray.splice(0, 0, action.payload);
      return {
        ...state,
        messages: newArray,
      };
    }
    case types.CLEAR_MESSAGE_SUCCESS: {
      return {
        ...state,
        messages: [],
      };
    }
    default:
      return state;
  }
}
