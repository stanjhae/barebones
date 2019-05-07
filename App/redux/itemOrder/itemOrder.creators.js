import * as types from './itemOrder.types';

export const getMyItemOrdersSuccess = itemOrders => ({ type: itemOrders.message, payload: itemOrders.result });

export const getItemOrderSuccess = itemOrders => ({ type: itemOrders.message, payload: itemOrders.result });

export const startLoading = () => ({ type: types.START_ITEM_ORDER_LOADING });

export const stopLoading = () => ({ type: types.STOP_ITEM_ORDER_LOADING });
