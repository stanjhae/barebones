import { Alert, Keyboard } from 'react-native';
import { store } from '../../redux/store';
import {
  editMyAppointment,
  newAppointment as newApp,
  getAppointment as getApp,
  getMyAppointments as getMyApp,
} from '../../redux/appointment/appointment.actions';

export const getMyAppointments = () => {
  const { user: { _id }, mode } = store.getState().helper.asyncStorage;
  store.dispatch(getMyApp(_id, mode));
};

export const editAppointment = (values, formikBag, navigation) => {
  Keyboard.dismiss();
  store.dispatch(editMyAppointment(values)).then((data) => {
    if (!data.success) {
      formikBag.setSubmitting(false);
      Alert.alert('Edit Failed', data.message);
    } else {
      Alert.alert('Appointment Updated', '');
      formikBag.resetForm();
      formikBag.setSubmitting(false);
      navigation.goBack();
    }
  });
};

export const newAppointment = async (values, formikBag, navigation, itemOrder) => {
  const result = await store.dispatch(newApp(values, itemOrder));
  formikBag.setSubmitting(false);
  if (!result) {
    Alert.alert('Item not created', '');
  } else {
    formikBag.resetForm({});
    navigation.goBack();
  }
};

export const getAppointment = async (appointment, navigation, screen) => {
  navigation.navigate(screen);
  store.dispatch(getApp(appointment));
};
