import * as actions from './message.creators';
import { getItemOrderSuccess } from '../itemOrder/itemOrder.creators';
import messageApi from '../../utils/api/messageApi';
import { toggleLoading } from '../helper/helper.creators';

export const initMessage = (trip, item, type) => async (dispatch) => {
  dispatch(toggleLoading('Contacting courier...', true));
  const result = await messageApi.initMessage(trip, item, type);
  if (!result.success) {
    dispatch(toggleLoading('', false));
    return result;
  }
  dispatch(getItemOrderSuccess(result.data));
  dispatch(toggleLoading('', false));
  return result.data;
};

export const loadMessage = message => async (dispatch) => {
  dispatch(actions.loadMessageSuccess(message));
};

export const clearMessage = () => async (dispatch) => {
  dispatch(actions.clearMessageSuccess());
};
