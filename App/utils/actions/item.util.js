import React from 'react';
import { Alert, Keyboard } from 'react-native';
import Geocoder
  from 'react-native-geocoding';
import { store } from '../../redux/store';
import {
  editMyItem,
  newItem as myNewItem,
  getItem as getI,
  getMyItems as getM,
  resetItemSuccess,
  saveItem as saveI,
  getItems as getIs,
  deleteItem as deleteI,
  deleteSavedItem as deleteSI,
  updateItemLocation as updateIL,
} from '../../redux/item/item.actions';
import { updateItemSuccess } from '../../redux/item/item.creators';
import ItemCard from '../ItemCard';
import ItemListFormCard from '../../screens/item/ItemListFormCard';
import { countryPicker, stateOrRegionPicker } from '../../redux/helper/helper.actions';

export const editItem = async (values, date, formikBag = null, navigation) => {
  Keyboard.dismiss();
  values.initDate = date.initDate;
  const result = await store.dispatch(editMyItem(values));
  formikBag !== null ? formikBag.setSubmitting(false) : null;
  if (!result) {
    Alert.alert('Edit Failed', '');
  } else {
    formikBag !== null ? formikBag.resetForm({ category: [] }) : null;
    navigation.dismiss();
  }
};

export const newItem = async (values, formikBag, navigation) => {
  values.user = store.getState().helper.asyncStorage.user._id;
  Keyboard.dismiss();
  const result = await store.dispatch(myNewItem(values));
  formikBag.setSubmitting(false);
  if (!result) {
    Alert.alert('Item not created', '');
  } else {
    // formikBag.resetForm({category: []});
    navigation.navigate('ItemSavedScreen');
  }
};

export const nextItemScreen = (
  values,
  navigation,
  nextScreen,
) => {
  store.dispatch(
    updateItemSuccess({
      message: 'UPDATE_ITEM_SUCCESS',
      result: { item: values },
    }),
  );
  navigation.navigate(nextScreen);
};

export const prevItemScreen = async (
  values,
  navigation,
) => {
  await store.dispatch(
    updateItemSuccess({
      message: 'UPDATE_ITEM_SUCCESS',
      result: { item: values },
    }),
  );
  navigation.goBack();
};

export const getItem = (item, navigation, screen, loader) => {
  navigation.navigate(screen);
  store.dispatch(getI(item, loader));
};

export const deleteItem = (item) => {
  store.dispatch(deleteI(item));
};

export const updateItemLocation = (item, location) => {
  store.dispatch(updateIL(item, location));
};

export const getMyItems = async (offset, status, type) => {
  const user = store.getState().helper.asyncStorage.user._id;
  await store.dispatch(getM(user, offset, status, type));
};

export const saveItem = (user, item) => {
  store.dispatch(saveI(user, item));
};

export const getItems = (offset) => {
  store.dispatch(getIs(offset));
};

export const deleteSaveItem = (user, item) => {
  store.dispatch(deleteSI(user, item));
};

export const getPrice = async (initCountry, initCity, destCountry, destCity, size, setFieldValue) => {
  const earth = 6371;

  let initLoc = await Geocoder.from(`${initCity} ${initCountry}`);
  initLoc = initLoc.results[0].geometry.location;
  let destLoc = await Geocoder.from(`${destCity} ${destCountry}`);
  destLoc = destLoc.results[0].geometry.location;
  const lat = destLoc.lat - initLoc.lat;
  const lng = destLoc.lng - initLoc.lng;

  const disLat = (lat * Math.PI * earth) / 180;
  const disLon = (lng * Math.PI * earth) / 180;

  let ret = Math.pow(disLat, 2) + Math.pow(disLon, 2);
  ret = Math.sqrt(ret);

  const price = 0.01023 * size * ret * 360;
  setFieldValue('price', price);
};

export const resetItem = async (navigation) => {
  store.dispatch(
    resetItemSuccess({
      message: 'GET_ITEM_SUCCESS',
      result: {
        item: {
          name: '',
          description: '',
          initCountry: '',
          initCity: '',
          destCountry: '',
          destCity: '',
          location: { longitude: 0, latitude: 0 },
          price: 0,
          initDate: new Date(),
          category: [],
          images: [],
          appointment: {},
          size: 0,
          _id: 0,
        },
      },
    }),
  );
  store.dispatch(countryPicker({ item: 'initCountry', value: '' }));
  store.dispatch(countryPicker({ item: 'destCountry', value: '' }));
  store.dispatch(stateOrRegionPicker({ item: 'initCity', value: '' }));
  store.dispatch(stateOrRegionPicker({ item: 'destCity', value: '' }));
  navigation.navigate('NewItemTransportationDetailsFormScreen');
};

export const renderMyItemsListForm = (item, navigation) => (
  <ItemListFormCard
    item={item}
    handlePress={() => getItem(item._id, navigation, 'ItemDetailsScreen', 'itemDetailsLoader')} />
);

export const renderMyItems = (item, navigation) => (
  <ItemCard
    item={item}
    handlePress={() => getItem(item._id, navigation, 'ItemDetailsScreen', 'Getting your item...')} />
);
