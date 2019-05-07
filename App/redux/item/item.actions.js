import * as actions from './item.creators';
import itemApi from '../../utils/api/itemApi';
import { setAsyncStorage } from '../helper/helper.actions';
import { createUserSuccess } from '../user/user.creators';
import { toggleLoading } from '../helper/helper.creators';

export const getItems = () => async (dispatch) => {
  dispatch(toggleLoading('Gathering the items', true));
  const result = await itemApi.getItems(0);
  if (result.result.length > 0) {
    dispatch(actions.getItemsSuccess(result));
  }
  dispatch(toggleLoading('', false));
};

export const newItem = item => async (dispatch) => {
  dispatch(toggleLoading('Creating your item', true));
  const result = await itemApi.newItem(item);
  if (!result.success) {
    dispatch(toggleLoading('', false));
    return false;
  }
  dispatch(toggleLoading('', false));
  dispatch(actions.createItemSuccess(result.result));
  return true;
};

export const getItem = (item, loader) => async (dispatch) => {
  dispatch(toggleLoading(loader, true));
  const result = await itemApi.getItem(item);
  if (!result.success) {
    dispatch(toggleLoading('', false));
    return false;
  }
  dispatch(actions.getItemSuccess(result));
  dispatch(toggleLoading('', false));
  return true;
};

export const updateItemLocation = (item, location) => async () => {
  const result = await itemApi.updateItemLocation(item, location);
  if (!result.success) {
    return false;
  }
  return true;
};

export function searchItems(query, offset) {
  return function (dispatch) {
    return itemApi.searchItems(query, offset).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      if (res.data.result.length > 0) {
        dispatch(actions.searchItemsSuccess(res.data));
        return { success: true };
      }
      return { success: false };
    });
  };
}

export function filterItems(query) {
  return function (dispatch) {
    return itemApi.filterItems(query).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      if (res.data.result.length > 0) {
        dispatch(actions.filterItemsSuccess(res.data));
        return { success: true };
      }
      return { success: false };
    });
  };
}

export const getMyItems = user => async (dispatch) => {
  dispatch(toggleLoading('Getting your items', true));
  const result = await itemApi.getMyItems(user);
  if (result.success) {
    dispatch(actions.getMyItemsSuccess(result));
  }
  dispatch(toggleLoading('', false));
};

export const editMyItem = item => async (dispatch) => {
  dispatch(toggleLoading('', true));
  const result = await itemApi.editMyItem(item);
  if (!result.success) {
    dispatch(toggleLoading('', false));
    return false;
  }
  dispatch(actions.getItemSuccess(result));
  dispatch(toggleLoading('', false));
  return true;
};

export const resetItem = () => async (dispatch) => {
  dispatch(actions.resetItemSuccess());
};

export const saveItem = (user, item) => async (dispatch) => {
  const result = await itemApi.saveItem(user, item);
  if (!result.success) {
    return false;
  }
  dispatch(setAsyncStorage('user', result.data.result));
  dispatch(actions.updateSaveItemSuccess({ user, item }));
  dispatch(createUserSuccess(result.data));
  return true;
};

export const deleteSavedItem = (user, item) => async (dispatch) => {
  const result = await itemApi.deleteSavedItem(user, item);
  if (!result.success) {
    return false;
  }
  dispatch(setAsyncStorage('user', result.data.result));
  dispatch(actions.deleteSaveItemSuccess({ user, item }));
  dispatch(createUserSuccess(result.data));
  return true;
};

export const deleteItem = item => async (dispatch) => {
  const result = await itemApi.deleteItem(item);
  if (!result.success) {
    return false;
  }
  dispatch(actions.deleteItemSuccess(result.data.message, item));
  return true;
};
