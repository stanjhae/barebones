import * as actions from './trip.creators';
import { createUserSuccess } from '../user/user.creators';
import { toggleLoading } from '../helper/helper.creators';
import tripApi from '../../utils/api/tripApi';
import { setAsyncStorage, saveFilter } from '../helper/helper.actions';

export const getTrips = offset => async (dispatch, getState) => {
  const result = await tripApi.getTrips(offset);
  if (result.success) {
    if (result.data.result.length > 0) {
      const user = getState().helper.asyncStorage.user._id;
      const trips = result.data.result.map((trip) => {
        if (trip.savedBy.includes(user)) {
          trip.saved = true;
          return trip;
        }
        trip.saved = false;
        return trip;
      });
      dispatch(actions.getTripsSuccess({ message: result.data.message, trips }, offset));
    } else dispatch(actions.noTripData());
  }
};

export function searchTrips(query, offset) {
  return function (dispatch) {
    return tripApi.searchTrips(query, offset).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      if (res.data.result.length > 0) {
        dispatch(actions.filterTripsSuccess(res.data));
        return { success: true };
      }
      return { success: false };
    });
  };
}

export const filterTrips = query => async (dispatch) => {
  dispatch(toggleLoading('Filtering trips', true));
  const result = await tripApi.filterTrips(query);
  if (result.success) {
    if (result.data.result.length > 0) {
      dispatch(actions.filterTripsSuccess(result.data, query.offset));
      dispatch(saveFilter(query, false));
      dispatch(actions.stopLoading());
    } else {
      dispatch(saveFilter(query, true));
      dispatch(actions.noTripData());
      dispatch(actions.stopLoading());
    }
  }
  dispatch(toggleLoading('', false));
};

export function clearSearchTrips() {
  return function (dispatch) {
    dispatch(actions.clearSearchTripsSuccess());
  };
}

export const newTrip = trip => async (dispatch) => {
  const result = await tripApi.newTrip(trip);
  if (!result.success) {
    return false;
  }
  dispatch(actions.createTripSuccess(result.data));
  return true;
};

export const getTrip = (trip, loader) => async (dispatch, getState) => {
  dispatch(toggleLoading(loader, true));
  const result = await tripApi.getTrip(trip);
  if (!result.success) {
    return false;
  }
  const user = getState().helper.asyncStorage.user._id;
  console.log(result.data.result.trip.savedBy.includes(user));
  result.data.result.trip.saved = result.data.result.trip.savedBy.includes(user);
  dispatch(actions.getTripSuccess(result.data));
  dispatch(toggleLoading(loader, false));
  return true;
};

export const getMyTrips = (user, offset, status, type) => async (dispatch) => {
  dispatch(actions.startLoading());
  const result = await tripApi.getMyTrips(user, offset, status);
  if (result.success) {
    if (result.data.result.length > 0) {
      if (type === 'all') {
        dispatch(actions.getMyTripsSuccess(result.data, offset));
      } else {
        dispatch(actions.getMyActiveTripsSuccess(result.data, offset));
      }
    } else dispatch(actions.noTripData());
  }
};

export const editMyTrip = trip => async (dispatch) => {
  const result = await tripApi.editMyTrip(trip);
  if (!result.success) {
    return false;
  }
  dispatch(actions.getTripSuccess(result.data));
  return true;
};

export const resetTripSuccess = trip => async (dispatch) => {
  dispatch(actions.getTripSuccess(trip));
};

export const saveTrip = (user, trip) => async (dispatch) => {
  dispatch(actions.updateSaveTripSuccess({ user, trip }));
  const result = await tripApi.saveTrip(user, trip);
  if (!result.success) {
    return false;
  }
  dispatch(setAsyncStorage('user', result.data.result));
  dispatch(createUserSuccess(result.data));
  return true;
};

export const deleteSavedTrip = (user, trip) => async (dispatch) => {
  dispatch(actions.deleteSaveTripSuccess({ user, trip }));
  const result = await tripApi.deleteSavedTrip(user, trip);
  if (!result.success) {
    return false;
  }
  dispatch(setAsyncStorage('user', result.data.result));
  dispatch(createUserSuccess(result.data));
  return true;
};

export const getLatestTrips = latestTrip => async (dispatch) => {
  dispatch(actions.startRefreshing());
  const result = await tripApi.getLatestTrips(latestTrip);
  if (result.success) dispatch(actions.getTripSuccess(result.data));
};

export const deleteTrip = trip => async (dispatch) => {
  const result = await tripApi.deleteTrip(trip);
  if (!result.success) {
    return false;
  }
  dispatch(actions.deleteTripSuccess(result.data.message, trip));
  return false;
};
