import { Alert, Keyboard } from 'react-native';
import { store } from '../../redux/store';
import {
  loginUser,
  registerUser,
  editProfile as editMe,
  changePassword as changePass,
  addBank,
  loadFalse,
  getUser as getU,
  sendToken as sendT,
  verifyToken as verifyT,
  verifyBVN as verifyB,
} from '../../redux/user/user.actions';
import {
  removeAsyncStorage,
  resetState,
  saveModeMail,
} from '../../redux/helper/helper.actions';

export const login = async (values, navigation) => {
  const result = await store.dispatch(loginUser(values));
  if (result) {
    navigation.navigate('HomeScreen');
  }
};

export const signUp = async (values, navigation) => {
  const result = await store.dispatch(registerUser(values));
  if (result) {
    navigation.navigate('HomeScreen');
  }
};

export const falseLoaded = () => {
  store.dispatch(loadFalse());
};

export const setModeMail = (email, mode, navigation) => {
  store.dispatch(saveModeMail({ item: 'email', value: email }));
  store.dispatch(saveModeMail({ item: 'mode', value: mode }));
  navigation.navigate('ForgotPasswordScreen');
};

export const getUser = (user, navigation, screen) => {
  store.dispatch(getU(user));
  navigation.navigate(screen);
};

export const logout = async (navigation) => {
  store.dispatch(removeAsyncStorage('user'));
  store.dispatch(resetState());
  navigation.navigate('AuthLoadingScreen');
};

export const editProfile = async (values, formikBag, navigation) => {
  Keyboard.dismiss();
  const result = await store.dispatch(editMe(values));
  if (!result) {
    formikBag.setSubmitting(false);
    Alert.alert('Edit Failed', '');
  } else {
    formikBag.resetForm({ address: {}, dob: '' });
    navigation.navigate('ProfileScreen');
    formikBag.setSubmitting(false);
  }
};

export const changePassword = async (values, formikBag, navigation, mode, mail = null) => {
  if (mode === 'in') {
    values.password = '';
  } else {
    values.email = mail;
  }
  Keyboard.dismiss();
  const result = await store.dispatch(changePass(values));
  if (!result) {
    formikBag.setSubmitting(false);
    Alert.alert('Password change failed', '');
  } else {
    Alert.alert('Profile Updated', '');
    formikBag.resetForm({ address: {}, dob: '' });
    mode === 'out' ? navigation.goBack() : navigation.navigate('ProfileScreen');
    formikBag.setSubmitting(false);
  }
};

export const sendToken = (email) => {
  store.dispatch(sendT(email));
};

export const verifyToken = async (email, token, navigation, type) => {
  const result = await store.dispatch(verifyT(email, token));
  if (!result) {
    Alert.alert('Verification failed', '');
  } else if (type === 'inAppForgot') navigation.navigate('InAppNewPasswordScreen', { forgotten: true });
  else navigation.goBack();
};

export const verifyBVN = (user, bvn) => {
  store.dispatch(verifyB(user, bvn));
};

export const addBankAccount = (values, formikBag, navigation) => {
  Keyboard.dismiss();
  store.dispatch(addBank(values)).then((data) => {
    if (!data.success) {
      formikBag.setSubmitting(false);
      Alert.alert('Bank Account failure', data.message);
    } else {
      Alert.alert('bank account added', '');
      formikBag.resetForm();
      navigation.goBack();
      formikBag.setSubmitting(false);
    }
  });
};
