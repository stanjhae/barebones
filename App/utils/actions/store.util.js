import {
  Alert,
  Keyboard,
} from 'react-native';
import { store } from '../../redux/store';
import {
  editMyStore,
  newStore as myNewStore,
  saveStore as mySaveStore,
  deleteSavedStore as deleteST,
  deleteStore as deleteT,
  getStore as getT,
  getStores as getSs,
  getLatestStores,
  filterStores as filterT,
  getMyStores as getM,
} from '../../redux/store/store.actions';

export const editStore = async (values, date, formikBag, navigation) => {
  Keyboard.dismiss();
  const result = await store.dispatch(editMyStore(values));
  formikBag.setSubmitting(false);
  if (!result) {
    Alert.alert('Edit Failed', ' ');
  } else {
    Alert.alert('Store Updated', '');
    formikBag.resetForm();
    navigation.navigate('StoreDetailsScreen');
  }
};

export const newStore = async (values, navigation) => {
  const result = await store.dispatch(myNewStore(values));
  if (!result) {
    Alert.alert('Store not created', '');
  } else {
    navigation.goBack();
  }
};


export const getMyStores = async (offset, status, type) => {
  const user = store.getState().helper.asyncStorage.user._id;
  await store.dispatch(getM(user, offset, status, type));
};

export const saveStore = (user, trip) => {
  store.dispatch(mySaveStore(user, trip));
};

export const deleteStore = (trip) => {
  store.dispatch(deleteT(trip));
};

export const getStores = () => {
  store.dispatch(getSs());
};

export const refreshStores = async (trip) => {
  await store.dispatch(getLatestStores(trip));
};

export const filterStores = async (query) => {
  await store.dispatch(filterT(query));
};

export const deleteSaveStore = (user, trip) => {
  store.dispatch(deleteST(user, trip));
};

export const getStore = (trip, navigation, screen, loader) => {
  navigation.navigate(screen);
  store.dispatch(getT(trip, loader));
};
