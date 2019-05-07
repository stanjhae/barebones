import * as types from './item.types';
import initialState from './item.initial';

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ITEM_SUCCESS: {
      const newArray = state.myItems.slice();
      newArray.splice(0, 0, action.payload);
      return {
        ...state,
        item: action.payload,
        myItems: newArray,
      };
    }
    case types.UPDATE_ITEM_SUCCESS: {
      return {
        ...state,
        item: action.payload,
      };
    }
    case types.GET_ITEMS_SUCCESS: {
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    }
    case types.SEARCH_ITEMS_SUCCESS: {
      return {
        ...state,
        searchItems: [...state.searchItems, ...action.payload],
      };
    }
    case types.FILTER_ITEMS_SUCCESS: {
      return {
        ...state,
        searchItems: [...state.searchItems, ...action.payload],
      };
    }
    case types.CLEAR_SEARCH_ITEMS_SUCCESS: {
      return {
        ...state,
        searchItems: [],
      };
    }

    case types.GET_MY_ITEMS_SUCCESS: {
      return {
        ...state,
        myItems: [...state.myItems, ...action.payload],
      };
    }
    case types.GET_MY_ACTIVE_ITEMS_SUCCESS: {
      return {
        ...state,
        myActiveItems: [...state.myActiveItems, ...action.payload.items],
      };
    }
    case types.GET_ITEM_SUCCESS: {
      return {
        ...state,
        item: action.payload,
        myItems: state.myItems.map((item) => {
          if (item._id !== action.payload._id) {
            return item;
          }
          return {
            ...item,
            ...action.payload,
          };
        }),
      };
    }
    case types.RESET_ITEM_SUCCESS: {
      return {
        ...state,
        item: initialState.item,
      };
    }
    case types.DELETE_ITEM_SUCCESS: {
      return {
        ...state,
        item: initialState.item,
        myItems: state.myItems.filter(item => action.payload !== item._id),
      };
    }
    case types.START_ITEM_LOADING: {
      return {
        ...state,
        isLoading: true,
        loaded: false,
      };
    }

    case types.STOP_ITEM_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.ITEM_FAILURE: {
      return {
        ...state,
        loaded: true,
        success: false,
      };
    }

    case types.ITEM_SUCCESS: {
      return {
        ...state,
        loaded: true,
        success: true,
      };
    }

    case types.LOADED_ITEM_FALSE: {
      return {
        ...state,
        loaded: false,
      };
    }

    case types.NO_ITEM_DATA: {
      return {
        ...state,
        isLoading: false,
        loaded: true,
      };
    }
    default:
      return state;
  }
}
