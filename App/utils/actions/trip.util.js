import PropTypes from 'prop-types';
import React from 'react';
import {
  Alert,
  Keyboard,
} from 'react-native';
import ExploreCard from '../ExploreCard';
import { store } from '../../redux/store';
import {
  editMyTrip,
  newTrip as myNewTrip,
  saveTrip as mySaveTrip,
  deleteSavedTrip as deleteST,
  deleteTrip as deleteT,
  getTrip as getT,
  getTrips as getTs,
  getLatestTrips,
  filterTrips as filterT,
  getMyTrips as getM,
  resetTripSuccess,
} from '../../redux/trip/trip.actions';
import { updateTripSuccess } from '../../redux/trip/trip.creators';
import CourierCard from '../CourierCard';

export const editTrip = async (values, date, formikBag, navigation) => {
  Keyboard.dismiss();
  values.initDate = date.initDate;
  values.initTime = date.initTime;
  values.destDate = date.destDate;
  values.destTime = date.destTime;
  const result = await store.dispatch(editMyTrip(values));
  formikBag.setSubmitting(false);
  if (!result) {
    Alert.alert('Edit Failed', ' ');
  } else {
    Alert.alert('Trip Updated', '');
    formikBag.resetForm();
    navigation.navigate('TripDetailsScreen');
  }
};

export const newTrip = async (values, formikBag, navigation) => {
  values.user = store.getState().helper.asyncStorage.user._id;
  Keyboard.dismiss();
  const result = await store.dispatch(myNewTrip(values));
  formikBag.setSubmitting(false);
  if (!result) {
    Alert.alert('Trip not created', '');
  } else {
    formikBag.resetForm({ category: [] });
    navigation.navigate('TripSavedScreen');
  }
};

export const nextTripScreen = async (
  values,
  keys,
  setFieldTouched,
  isValid,
  navigation,
  nextScreen,
) => {
  keys.map(async (key) => {
    await setFieldTouched(key, true, true);
  });

  if (!isValid) return false;
  await store.dispatch(
    updateTripSuccess({
      message: 'UPDATE_TRIP_SUCCESS',
      result: { trip: values },
    }),
  );
  navigation.navigate(nextScreen);
  return true;
};

export const prevTripScreen = async (
  values,
  navigation,
) => {
  await store.dispatch(
    updateTripSuccess({
      message: 'UPDATE_TRIP_SUCCESS',
      result: { trip: values },
    }),
  );
  navigation.goBack();
};


export const getMyTrips = async (offset, status, type) => {
  const user = store.getState().helper.asyncStorage.user._id;
  await store.dispatch(getM(user, offset, status, type));
};

export const saveTrip = (user, trip) => {
  store.dispatch(mySaveTrip(user, trip));
};

export const deleteTrip = (trip) => {
  store.dispatch(deleteT(trip));
};

export const getTrips = (offset) => {
  store.dispatch(getTs(offset));
};

export const refreshTrips = async (trip) => {
  await store.dispatch(getLatestTrips(trip));
};

export const filterTrips = async (query) => {
  await store.dispatch(filterT(query));
};

export const deleteSaveTrip = (user, trip) => {
  store.dispatch(deleteST(user, trip));
};

export const getTrip = (trip, navigation, screen, loader) => {
  navigation.navigate(screen);
  store.dispatch(getT(trip, loader));
};

export const resetTrip = async (navigation) => {
  store.dispatch(
    resetTripSuccess({
      message: 'GET_TRIP_SUCCESS',
      result: {
        trip: {
          location: { longitude: 0, latitude: 0 },
          price: 0,
          initDate: '',
          category: [],
          images: [],
          appointment: {},
          size: '',
          description: '',
          _id: 0,
        },
      },
    }),
  );
  navigation.navigate('NewTripDetailsFormScreen');
};

export class RenderTrips extends React.Component {
  setSavedState = (saved, user, trip) => {
    if (!saved) {
      saveTrip(user, trip);
    } else {
      deleteSaveTrip(user, trip);
    }
  };

  render() {
    const {
      item: { item }, navigation, mode, user,
    } = this.props;
    return (
      <ExploreCard
        item={item}
        mode={mode}
        savePress={saved => this.setSavedState(saved, user._id, item._id)}
        handlePress={() => getTrip(item._id, navigation, 'ClientExploreDetailsScreen', 'clientExploreDetailsLoader')}
      />
    );
  }
}

export const renderMyTrips = (trip, navigation) => (
  <CourierCard
    item={trip}
    handlePress={() => getTrip(trip._id, navigation, 'TripDetailsScreen', 'tripDetailsLoader')} />
);

RenderTrips.propTypes = {
  item: PropTypes.any,
  mode: PropTypes.any,
  navigation: PropTypes.any,
  user: PropTypes.any,
};
