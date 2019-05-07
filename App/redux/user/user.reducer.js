import * as types from './user.types';
import initialState from './user.initial';

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loaded: true,
        success: true,
        isLoading: false,
      };
    }
    case types.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loaded: true,
        success: true,
        isLoading: false,
      };
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: true,
      };
    }

    case types.START_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        loaded: false,
      };
    }

    case types.STOP_USER_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.USER_FAILURE: {
      return {
        ...state,
        loaded: true,
        success: false,
      };
    }

    case types.USER_SUCCESS: {
      return {
        ...state,
        loaded: true,
        success: true,
      };
    }

    case types.LOADED_USER_FALSE: {
      return {
        ...state,
        loaded: false,
      };
    }

    case types.TOGGLE_MODAL: {
      return {
        ...state,
        modal: !state.modal,
      };
    }

    case types.STATUS_BAR: {
      return {
        ...state,
        user: {
          ...state.user,
          statusBar: !state.user.statusBar,
        },
      };
    }

    default:
      return state;
  }
}
