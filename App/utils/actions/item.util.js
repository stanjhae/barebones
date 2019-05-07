import { Alert, Keyboard } from 'react-native';
import { store } from '../../redux/store';
import {
  editMyItem,
  newItem as myNewItem,
  getItem as getI,
  getMyItems as getM,
  // saveItem as saveI,
  getItems as getIs,
  // deleteItem as deleteI,
  // deleteSavedItem as deleteSI,
  resetItem as resetI,
} from '../../redux/item/item.actions';

export const editItem = async (values, navigation) => {
  Keyboard.dismiss();
  const result = await store.dispatch(editMyItem(values));
  if (!result) {
    Alert.alert('Edit Failed', '');
  } else {
    navigation.goBack();
  }
};

export const newItem = async (values, navigation) => {
  values.user = store.getState().helper.asyncStorage.user._id;
  Keyboard.dismiss();
  const result = await store.dispatch(myNewItem(values));
  if (!result) {
    Alert.alert('Item not created', '');
  } else {
    navigation.navigate('HomeScreen');
  }
};

export const getItem = (item, navigation, screen, loader) => {
  navigation.navigate(screen);
  store.dispatch(getI(item, loader));
};

// export const deleteItem = (item) => {
//   store.dispatch(deleteI(item));
// };

export const getMyItems = () => {
  const user = store.getState().helper.asyncStorage.user._id;
  store.dispatch(getM(user));
};
//
// export const saveItem = (user, item) => {
//   store.dispatch(saveI(user, item));
// };
//
export const getItems = () => {
  store.dispatch(getIs());
};

export const resetItem = (navigation) => {
  store.dispatch(resetI());
  navigation.navigate('NewItemScreen');
};
//
// export const deleteSaveItem = (user, item) => {
//   store.dispatch(deleteSI(user, item));
// };
