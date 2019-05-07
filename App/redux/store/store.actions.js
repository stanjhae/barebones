import * as actions from './store.creators';
import { createUserSuccess } from '../user/user.creators';
import { toggleLoading } from '../helper/helper.creators';
import storeApi from '../../utils/api/storeApi';
import { setAsyncStorage, saveFilter } from '../helper/helper.actions';

export function searchStores(query, offset) {
  return function (dispatch) {
    return storeApi.searchStores(query, offset).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      if (res.data.result.length > 0) {
        dispatch(actions.filterStoresSuccess(res.data));
        return { success: true };
      }
      return { success: false };
    });
  };
}

export const filterStores = query => async (dispatch) => {
  dispatch(toggleLoading('Filtering stores', true));
  const result = await storeApi.filterStores(query);
  if (result.success) {
    if (result.data.result.length > 0) {
      dispatch(actions.filterStoresSuccess(result.data, query.offset));
      dispatch(saveFilter(query, false));
      dispatch(actions.stopLoading());
    } else {
      dispatch(saveFilter(query, true));
      dispatch(actions.noStoreData());
      dispatch(actions.stopLoading());
    }
  }
  dispatch(toggleLoading('', false));
};

export function clearSearchStores() {
  return function (dispatch) {
    dispatch(actions.clearSearchStoresSuccess());
  };
}

export const newStore = store => async (dispatch) => {
  dispatch(toggleLoading('Creating store', true));
  const result = await storeApi.newStore(store);
  if (!result.success) {
    dispatch(toggleLoading('', false));
    return false;
  }
  dispatch(actions.createStoreSuccess(result));
  dispatch(toggleLoading('', false));
  return true;
};

export const getStore = (store, loader) => async (dispatch, getState) => {
  dispatch(toggleLoading(loader, true));
  const result = await storeApi.getStore(store);
  if (!result.success) {
    return false;
  }
  const user = getState().helper.asyncStorage.user._id;
  console.log(result.data.result.store.savedBy.includes(user));
  result.data.result.store.saved = result.data.result.store.savedBy.includes(user);
  dispatch(actions.getStoreSuccess(result.data));
  dispatch(toggleLoading(loader, false));
  return true;
};

export const getStores = () => async (dispatch) => {
  dispatch(toggleLoading('Getting Stores', true));
  const result = await storeApi.getStores(0);
  if (result.success) {
    if (result.result.length > 0) {
      dispatch(actions.getStoresSuccess(result));
    }
  }
  dispatch(toggleLoading('', false));
};

export const getMyStores = (user, offset, status, type) => async (dispatch) => {
  dispatch(actions.startLoading());
  const result = await storeApi.getMyStores(user, offset, status);
  if (result.success) {
    if (result.data.result.length > 0) {
      if (type === 'all') {
        dispatch(actions.getMyStoresSuccess(result.data, offset));
      } else {
        dispatch(actions.getMyActiveStoresSuccess(result.data, offset));
      }
    } else dispatch(actions.noStoreData());
  }
};

export const editMyStore = store => async (dispatch) => {
  const result = await storeApi.editMyStore(store);
  if (!result.success) {
    return false;
  }
  dispatch(actions.getStoreSuccess(result.data));
  return true;
};

export const resetStoreSuccess = store => async (dispatch) => {
  dispatch(actions.getStoreSuccess(store));
};

export const saveStore = (user, store) => async (dispatch) => {
  dispatch(actions.updateSaveStoreSuccess({ user, store }));
  const result = await storeApi.saveStore(user, store);
  if (!result.success) {
    return false;
  }
  dispatch(setAsyncStorage('user', result.data.result));
  dispatch(createUserSuccess(result.data));
  return true;
};

export const deleteSavedStore = (user, store) => async (dispatch) => {
  dispatch(actions.deleteSaveStoreSuccess({ user, store }));
  const result = await storeApi.deleteSavedStore(user, store);
  if (!result.success) {
    return false;
  }
  dispatch(setAsyncStorage('user', result.data.result));
  dispatch(createUserSuccess(result.data));
  return true;
};

export const getLatestStores = latestStore => async (dispatch) => {
  dispatch(actions.startRefreshing());
  const result = await storeApi.getLatestStores(latestStore);
  if (result.success) dispatch(actions.getStoreSuccess(result.data));
};

export const deleteStore = store => async (dispatch) => {
  const result = await storeApi.deleteStore(store);
  if (!result.success) {
    return false;
  }
  dispatch(actions.deleteStoreSuccess(result.data.message, store));
  return false;
};
