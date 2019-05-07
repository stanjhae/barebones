import * as types from './trip.types';
import initialState from './trip.initial';

export default function tripReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TRIP_SUCCESS: {
      const newArray = state.myTrips.slice();
      newArray.splice(0, 0, action.payload.trip);
      return {
        ...state,
        trip: action.payload,
        myTrips: newArray,
      };
    }
    case types.UPDATE_TRIP_SUCCESS: {
      return {
        ...state,
        trip: action.payload,
      };
    }
    case 'SAVE_TRIP_SUCCESS': {
      return {
        ...state,
        trip: {
          ...state.trip,
          trip: {
            ...state.trip.trip,
            savedBy: state.trip.trip._id ? [...state.trip.trip.savedBy, action.user] : [],
            saved: true,
          },
        },
        trips: state.trips.map((trip) => {
          if (trip._id === action.trip) {
            trip.savedBy.push(action.user);
            trip.saved = true;
            return trip;
          }
          return trip;
        }),
      };
    }

    case 'DELETE_SAVED_TRIP_SUCCESS': {
      return {
        ...state,
        trip: {
          ...state.trip,
          trip: {
            ...state.trip.trip,
            savedBy: [],
            saved: false,
          },
        },
        trips: state.trips.map((trip) => {
          if (trip._id === action.trip) {
            const index = trip.savedBy.indexOf(action.user);
            trip.savedBy.splice(index, 1);
            trip.saved = false;
            return trip;
          }
          return trip;
        }),
      };
    }
    case types.GET_TRIPS_SUCCESS: {
      return {
        ...state,
        trips: [...state.trips, ...action.payload.trips],
        offset: action.payload.offset + 10,
      };
    }
    case types.LATEST_TRIPS_SUCCESS: {
      return {
        ...state,
        isRefreshing: false,
        trips: [...action.payload, ...state.trips],
      };
    }
    case types.SEARCH_TRIPS_SUCCESS: {
      return {
        ...state,
        searchTrips: [...state.searchTrips, ...action.payload],
      };
    }
    case types.FILTER_TRIPS_SUCCESS: {
      return {
        ...state,
        // offset: action.payload.offset + 10,
        searchTrips: [...action.payload.trips],
      };
    }
    case types.SAVE_OFFSET: {
      return {
        ...state,
        savedOffset: state.filter ? state.savedOffset : state.offset,
        offset: 0,
        filter: true,
      };
    }
    case types.CLEAR_SEARCH_TRIPS_SUCCESS: {
      return {
        ...state,
        searchTrips: [],
      };
    }
    case types.GET_MY_TRIPS_SUCCESS: {
      return {
        ...state,
        offset: action.payload.offset + 10,
        myTrips: [...state.myTrips, ...action.payload.trips],
      };
    }
    case types.GET_MY_ACTIVE_TRIPS_SUCCESS: {
      return {
        ...state,
        myActiveTrips: [...state.myActiveTrips, ...action.payload.trips],
      };
    }
    case types.GET_TRIP_SUCCESS: {
      return {
        ...state,
        trip: action.payload,
        myTrips: state.myTrips.map((trip) => {
          if (trip._id !== action.payload.trip._id) {
            return trip;
          }
          return {
            ...trip,
            ...action.payload.trip,
          };
        }),
      };
    }
    case types.DELETE_TRIP_SUCCESS: {
      return {
        ...state,
        trip: initialState.trip,
        myTrips: state.myTrips.filter(trip => action.payload !== trip._id),
      };
    }
    case types.START_TRIP_LOADING: {
      return {
        ...state,
        // isLoading: true,
        isTripLoading: true,
      };
    }

    case types.STOP_TRIP_LOADING: {
      return {
        ...state,
        // isLoading: false,
        isTripLoading: false,
      };
    }

    case types.INCREASE_OFFSET: {
      return {
        ...state,
        offset: action.payload + 10,
      };
    }

    case types.RESET_OFFSET: {
      return {
        ...state,
        offset: state.savedOffset,
      };
    }

    case types.START_TRIP_REFRESHING: {
      return {
        ...state,
        isRefreshing: true,
      };
    }

    case types.NO_TRIP_DATA: {
      return {
        ...state,
        searchTrips: [],
      };
    }

    default:
      return state;
  }
}
