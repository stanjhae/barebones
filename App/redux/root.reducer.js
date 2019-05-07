import appReducer from './appReducer';

export default function rootReducer(state, action) {
  switch (action.type) {
    case 'RESET_APP': {
      state = undefined;
      return appReducer(state, action);
    }
    default: {
      return appReducer(state, action);
    }
  }
}
