import * as actions from './user.creators';
import userApi from '../../utils/api/userApi';
import { setAsyncStorage, mergeAsyncStorage } from '../helper/helper.actions';
import { toggleLoading, toggleFlashMessage } from '../helper/helper.creators';

export const getUser = user => async (dispatch) => {
  dispatch(actions.stopLoading());
  const result = await userApi.getUser(user);
  dispatch(actions.getUserSuccess(result.response.data.result));
};

export const registerUser = user => async (dispatch) => {
  dispatch(toggleLoading('Creating your account', true));
  const result = await userApi.registerUser(user);
  dispatch(setAsyncStorage('user', result.result));
  dispatch(actions.createUserSuccess(result.result));
  dispatch(toggleLoading('', false));
  return true;
};

export const loginUser = user => async (dispatch) => {
  dispatch(toggleLoading('Logging you in', true));
  const result = await userApi.signInUser(user);
  if (!result.success) {
    dispatch(toggleLoading('', false));
    dispatch(toggleFlashMessage('Username or password incorrect', 'error', true));
    setTimeout(() => dispatch(toggleFlashMessage('', '', false)), 3000);
    return false;
  }
  dispatch(setAsyncStorage('user', result.result));
  dispatch(actions.createUserSuccess(result.result));
  dispatch(toggleLoading('', false));
  return true;
};


export const loadFalse = () => (dispatch) => {
  dispatch(actions.loadFalse());
};

export const editProfile = user => async (dispatch) => {
  dispatch(toggleLoading('Updating your profile', true));
  const result = await userApi.editProfile(user);
  if (!result.success) {
    dispatch(actions.userFailure());
    dispatch(toggleLoading('', false));
    return false;
  }
  dispatch(setAsyncStorage('user', result.response.data.result));
  dispatch(actions.updateUserSuccess(result.response.data));
  dispatch(toggleLoading('', false));
  return true;
};

export const changePassword = password => async (dispatch) => {
  dispatch(actions.startLoading());
  const result = await userApi.changePassword(password);
  if (!result.success) {
    dispatch(actions.userFailure());
    setTimeout(() => {
      dispatch(actions.stopLoading());
    }, 1000);
    return false;
  }
  dispatch(setAsyncStorage('user', result.response.data.result));
  dispatch(actions.updateUserSuccess(result.response.data));
  return true;
};

export const sendToken = email => async () => {
  const result = await userApi.verifyEmail(email);
  return result.success;
};

export const verifyToken = (email, token) => async (dispatch) => {
  const result = await userApi.verifyToken(email, token);
  if (!result.success) {
    return false;
  }
  dispatch(mergeAsyncStorage('user', result.response.data.result));
  return true;
};
