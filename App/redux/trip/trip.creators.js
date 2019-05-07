import * as types from './trip.types';

export const createTripSuccess = trip => ({ type: trip.message, payload: trip.result });

export const getTripSuccess = trip => ({ type: trip.message, payload: trip.result });

export const updateTripSuccess = trip => ({ type: trip.message, payload: trip.result });

export const deleteTripSuccess = (message, trip) => ({ type: message, payload: trip });

// export const saveTripSuccess = (message, trip) => ({ type: message, payload: trip });

export const getTripsSuccess = (trips, offset) => ({ type: trips.message, payload: { trips: trips.trips, offset } });

export const getMyTripsSuccess = (trips, offset) => ({ type: trips.message, payload: { trips: trips.result, offset } });

export const getMyActiveTripsSuccess = (trips, offset) => ({ type: types.GET_MY_ACTIVE_TRIPS_SUCCESS, payload: { trips: trips.result, offset } });

// export const searchTripsSuccess = trips => ({ type: trips.message, payload: trips.result });

export const filterTripsSuccess = (trips, offset) => ({ type: trips.message, payload: { trips: trips.result, offset } });

export const updateSaveTripSuccess = trip => ({ type: types.SAVE_TRIP_SUCCESS, user: trip.user, trip: trip.trip });

export const deleteSaveTripSuccess = trip => ({ type: types.DELETE_SAVED_TRIP_SUCCESS, user: trip.user, trip: trip.trip });

export const clearSearchTripsSuccess = () => ({ type: types.CLEAR_SEARCH_TRIPS_SUCCESS });

export const startLoading = () => ({ type: types.START_TRIP_LOADING });

export const stopLoading = () => ({ type: types.STOP_TRIP_LOADING });

// export const increaseOffset = offset => ({ type: types.INCREASE_OFFSET, payload: offset });
//
// export const saveOffset = () => ({ type: types.SAVE_OFFSET });

export const resetOffset = () => ({ type: types.RESET_OFFSET });

export const startRefreshing = () => ({ type: types.START_TRIP_REFRESHING });

export const noTripData = () => ({ type: types.NO_TRIP_DATA });
