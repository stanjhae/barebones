import * as types from './item.types';

export const createItemSuccess = item => ({ type: item.message, payload: item.result });

export const getItemSuccess = item => ({ type: item.message, payload: item.result });

export const updateItemSuccess = item => ({ type: item.message, payload: item.result });

export const updateItemAttrSuccess = value => ({ type: types.UPDATE_ITEM_ATTR_SUCCESS, payload: value });

export const deleteItemSuccess = (message, item) => ({ type: message, payload: item });

// export const saveItemSuccess = (message, item) => ({ type: message, payload: item });

export const getItemsSuccess = (items, offset) => ({ type: items.message, payload: { items: items.result, offset } });

export const getMyItemsSuccess = (items, offset) => ({ type: items.message, payload: { items: items.result, offset } });

export const getMyActiveItemsSuccess = (items, offset) => ({ type: types.GET_MY_ACTIVE_ITEMS_SUCCESS, payload: { items: items.result, offset } });

// export const searchItemsSuccess = items => ({ type: items.message, payload: items.result });

export const filterItemsSuccess = (items, offset) => ({ type: items.message, payload: { items: items.result, offset } });

export const updateSaveItemSuccess = item => ({ type: types.SAVE_ITEM_SUCCESS, user: item.user, item: item.item });

export const deleteSaveItemSuccess = item => ({ type: types.DELETE_SAVED_ITEM_SUCCESS, user: item.user, item: item.item });

export const clearSearchItemsSuccess = () => ({ type: types.CLEAR_SEARCH_ITEMS_SUCCESS });

export const startLoading = () => ({ type: types.START_ITEM_LOADING });

export const stopLoading = () => ({ type: types.STOP_ITEM_LOADING });

// export const increaseOffset = offset => ({ type: types.INCREASE_OFFSET, payload: offset });
//
// export const saveOffset = () => ({ type: types.SAVE_OFFSET });

// export const resetOffset = () => ({ type: types.RESET_OFFSET });
//
// export const startRefreshing = () => ({ type: types.START_ITEM_REFRESHING });

export const noItemData = () => ({ type: types.NO_ITEM_DATA });
