import { AsyncStorage } from 'react-native';
import { noTripData } from '../trip/trip.creators';
import { updateItemAttrSuccess } from '../item/item.creators';
import * as actions from './helper.creators';
import helperApi from '../../utils/api/helperApi';

export const setAsyncStorage = (item, value) => (dispatch) => {
  AsyncStorage.setItem(item, JSON.stringify(value));
  dispatch(actions.setAsyncStorageSuccess(item, value));
};

export const getAsyncStorage = item => async (dispatch) => {
  const value = await AsyncStorage.getItem(item);
  dispatch(actions.setAsyncStorageSuccess(item, JSON.parse(value)));
};

export const mergeAsyncStorage = (item, value) => async (dispatch) => {
  await AsyncStorage.mergeItem(item, JSON.stringify(value));
  const newValue = await AsyncStorage.getItem(item);
  dispatch(actions.setAsyncStorageSuccess(item, JSON.parse(newValue)));
};

export const removeAsyncStorage = item => (dispatch) => {
  AsyncStorage.removeItem(item);
  dispatch(actions.setAsyncStorageSuccess(item, {}));
};

export function cardPay(values, user, item) {
  return dispatch => helperApi.cardPay(values, user, item).then((res) => {
    if (!res.success) {
      return { success: false, message: 'BVN Incorrect' };
    }
    return { success: true, message: 'Payment Successful', data: res.response.data.result };
  });
}

export function payValidate(token, ref, item) {
  return dispatch => helperApi.payValidate(token, ref, item).then((res) => {
    if (!res.success) {
      return { success: false, message: 'BVN Incorrect' };
    }
    return { success: true, message: 'Payment Successful', data: res.response.data.result };
  });
}

export function saveFilter(filter, flag) {
  return (dispatch) => {
    dispatch(actions.saveFilterSuccess(filter, flag));
  };
}

export const stateOrRegionPicker = stateOrRegionDetails => (dispatch) => {
  dispatch(actions.stateOrRegionPicker(stateOrRegionDetails));
  dispatch(updateItemAttrSuccess(stateOrRegionDetails));
};

export const countryPicker = countryDetails => (dispatch) => {
  dispatch(actions.countryPicker(countryDetails));
  dispatch(updateItemAttrSuccess(countryDetails));
};

export const saveDateTime = DateTime => (dispatch) => {
  dispatch(actions.saveDateTimeSuccess(DateTime));
  dispatch(updateItemAttrSuccess(DateTime));
};

export const saveModeMail = modeMail => dispatch => dispatch(actions.saveModeMailSuccess(modeMail));

export const sendFeedback = feedback => async () => {
  const result = await helperApi.sendFeedback(feedback);
  return result.success;
};

export const resetState = () => dispatch => dispatch(actions.sendDispatch({ type: 'RESET_APP', payload: {} }));

export const resetFilter = () => (dispatch) => {
  dispatch(actions.sendDispatch({ type: 'RESET_FILTER', payload: {} }));
  dispatch(noTripData());
};
