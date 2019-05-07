import * as types from './helper.types';

export function setAsyncStorageSuccess(item, value) {
  return { type: types.SET_ASYNC_STORAGE_SUCCESS, payload: { item, value } };
}

export function saveFilterSuccess(value, flag) {
  return { type: types.SAVE_FILTER_SUCCESS, payload: { filter: value, flag } };
}

export function saveDateTimeSuccess(value) {
  return { type: types.SAVE_DATE_TIME_SUCCESS, payload: value };
}

export function saveItemTripSuccess(value) {
  return { type: types.SAVE_ITEM_TRIP_SUCCESS, payload: value };
}

export function saveModeMailSuccess(value) {
  return { type: types.SAVE_MODE_MAIL_SUCCESS, payload: value };
}

export function saveAddressSuccess(value) {
  return { type: types.SAVE_ADDRESS_SUCCESS, payload: value };
}

export function sendDispatch(dispatch) {
  return { type: dispatch.type, payload: dispatch.payload };
}

export const stateOrRegionPicker = value => ({
  type: types.STATE_REGION_PICKER, payload: value,
});

export const countryPicker = value => ({
  type: types.COUNTRY_PICKER, payload: value,
});

export const toggleLoading = (message, status) => ({ type: types.TOGGLE_LOADER, payload: { message, status } });

// export function getAsyncStorageSuccess(item, value) {
//   return {type: types.GET_ASYNC_STORAGE_SUCCESS, payload:{item:item, value:value}}
// }
