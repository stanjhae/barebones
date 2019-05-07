import * as types from './itemOrder.types';
import initialState from './itemOrder.initial';

export default function itemOrderReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ITEM_ORDER_SUCCESS: {
      const newArray = state.myItemOrders.slice();
      newArray.splice(0, 0, action.payload);
      return {
        ...state,
        success: true,
        loaded: true,
        itemOrder: action.payload,
        myItemOrders: newArray,
      };
    }
    case types.GET_ITEM_ORDERS_SUCCESS: {
      return {
        ...state,
        itemOrders: action.payload,
      };
    }
    case types.GET_MY_ITEM_ORDERS_SUCCESS: {
      return {
        ...state,
        myItemOrders: action.payload,
      };
    }
    case types.GET_ITEM_ORDER_SUCCESS: {
      return {
        ...state,
        success: true,
        loaded: true,
        itemOrder: action.payload,
      };
    }
    case types.DELETE_ITEM_ORDER_SUCCESS: {
      return {
        ...state,
        itemOrder: {},
        myItemOrders: state.myItemOrders.filter(itemOrder => action.payload !== itemOrder._id),
      };
    }

    case types.START_ITEM_ORDER_LOADING: {
      return {
        ...state,
        isLoading: true,
        success: false,
        loaded: false,
      };
    }

    case types.STOP_ITEM_ORDER_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
