import * as types from './message.types';

export const loadMessageSuccess = message => ({ type: types.LOAD_MESSAGE_SUCCESS, payload: message });

export const clearMessageSuccess = () => ({ type: types.CLEAR_MESSAGE_SUCCESS });
