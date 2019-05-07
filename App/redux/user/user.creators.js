import * as types from './user.types';

export const createUserSuccess = user => ({ type: types.CREATE_USER_SUCCESS, payload: user });

export const getUserSuccess = user => ({ type: types.GET_USER_SUCCESS, payload: user });

export const updateUserSuccess = user => ({ type: user.message, payload: user.result });

export const startLoading = () => ({ type: types.START_USER_LOADING });

export const stopLoading = () => ({ type: types.STOP_USER_LOADING });

export const loadFalse = () => ({ type: types.LOADED_USER_FALSE });

export const userFailure = () => ({ type: types.USER_FAILURE });

export const userSuccess = () => ({ type: types.USER_SUCCESS });

export const toggleModal = () => ({ type: types.TOGGLE_MODAL });

export const toggleStatusBar = () => ({ type: types.STATUS_BAR });
