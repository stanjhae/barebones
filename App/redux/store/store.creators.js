import * as types from './store.types';

export const createStoreSuccess = store => ({ type: store.message, payload: store.result });

export const getStoreSuccess = store => ({ type: store.message, payload: store.result });

export const updateStoreSuccess = store => ({ type: store.message, payload: store.result });

export const deleteStoreSuccess = (message, store) => ({ type: message, payload: store });

// export const saveStoreSuccess = (message, store) => ({ type: message, payload: store });

export const getStoresSuccess = stores => ({ type: stores.message, payload: { stores: stores.result } });

export const getMyStoresSuccess = (stores, offset) => ({ type: stores.message, payload: { stores: stores.result, offset } });

export const getMyActiveStoresSuccess = (stores, offset) => ({ type: types.GET_MY_ACTIVE_STORES_SUCCESS, payload: { stores: stores.result, offset } });

// export const searchStoresSuccess = stores => ({ type: stores.message, payload: stores.result });

export const filterStoresSuccess = (stores, offset) => ({ type: stores.message, payload: { stores: stores.result, offset } });

export const updateSaveStoreSuccess = store => ({ type: types.SAVE_STORE_SUCCESS, user: store.user, store: store.store });

export const deleteSaveStoreSuccess = store => ({ type: types.DELETE_SAVED_STORE_SUCCESS, user: store.user, store: store.store });

export const clearSearchStoresSuccess = () => ({ type: types.CLEAR_SEARCH_STORES_SUCCESS });

export const startLoading = () => ({ type: types.START_STORE_LOADING });

export const stopLoading = () => ({ type: types.STOP_STORE_LOADING });

// export const increaseOffset = offset => ({ type: types.INCREASE_OFFSET, payload: offset });
//
// export const saveOffset = () => ({ type: types.SAVE_OFFSET });

export const resetOffset = () => ({ type: types.RESET_OFFSET });

export const startRefreshing = () => ({ type: types.START_STORE_REFRESHING });

export const noStoreData = () => ({ type: types.NO_STORE_DATA });
