import * as actions from './itemOrder.creators';
import itemOrderApi from '../../utils/api/itemOrderApi';

export const getItemOrder = itemOrder => async (dispatch) => {
  dispatch(actions.startLoading());
  const result = await itemOrderApi.getItemOrder(itemOrder);
  if (!result.success) {
    return false;
  }
  dispatch(actions.getItemOrderSuccess(result.data));
  dispatch(actions.stopLoading());
  return result.data.result;
};

export const getMyItemOrders = (user, type) => async (dispatch) => {
  const result = await itemOrderApi.getMyItemOrders(user, type);
  if (!result.success) {
    return false;
  }
  dispatch(actions.getMyItemOrdersSuccess(result.data));
  return true;
};
