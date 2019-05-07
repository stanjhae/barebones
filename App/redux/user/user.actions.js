import * as actions from './user.creators';
import userApi from '../../utils/api/userApi';
import { setAsyncStorage, mergeAsyncStorage } from '../helper/helper.actions';
import { toggleLoading } from '../helper/helper.creators';

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
    return false;
  }
  dispatch(setAsyncStorage('user', result.result));
  dispatch(actions.createUserSuccess(result.result));
  dispatch(toggleLoading('', false));
  return true;
};

export const stopLoading = () => (dispatch) => {
  dispatch(actions.stopLoading());
};

export const toggleModal = () => (dispatch) => {
  dispatch(actions.toggleModal());
};

export const toggleStatusBar = () => (dispatch) => {
  dispatch(actions.toggleStatusBar());
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

export function addBank(bank) {
  return function (dispatch) {
    return userApi.addBank(bank).then((res) => {
      if (!res.success) {
        return { success: false, message: 'There is something wrong with your bank account' };
      }
      dispatch(setAsyncStorage('user', res.response.data.result));
      dispatch(actions.updateUserSuccess(res.response.data));
      return { success: true, message: 'Bank Account added' };
    });
  };
}

export const verifyToken = (email, token) => async (dispatch) => {
  const result = await userApi.verifyToken(email, token);
  if (!result.success) {
    return false;
  }
  dispatch(mergeAsyncStorage('user', result.response.data.result));
  return true;
};

export const verifyBVN = (user, bvn) => async (dispatch) => {
  dispatch(actions.startLoading());
  const result = await userApi.verifyBVN(user, bvn);
  if (!result.success) {
    dispatch(actions.userFailure());
    setTimeout(() => {
      dispatch(actions.stopLoading());
    }, 1000);
    return false;
  }
  dispatch(mergeAsyncStorage('user', result.response.data.result));
  dispatch(actions.userSuccess());
  setTimeout(() => {
    dispatch(actions.stopLoading());
  }, 1000);
  return true;
};

export function makePayment() {
  return function (dispatch) {
    return userApi.makePayment().then((res) => {
      if (!res.success) {
        return { success: false, message: 'BVN Incorrect' };
      }
      dispatch(mergeAsyncStorage('user', res.response.data.result));
      return { success: true, message: 'BVN Verified' };
    });
  };
}
