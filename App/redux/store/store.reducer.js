import * as types from './store.types';
import initialState from './store.initial';

export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_STORE_SUCCESS: {
      const newArray = state.store.slice();
      newArray.splice(0, 0, action.payload);
      return {
        ...state,
        store: action.payload,
        stores: newArray,
      };
    }
    case types.UPDATE_STORE_SUCCESS: {
      return {
        ...state,
        store: action.payload,
      };
    }
    case 'SAVE_STORE_SUCCESS': {
      return {
        ...state,
        store: {
          ...state.store,
          store: {
            ...state.store.store,
            savedBy: state.store.store._id ? [...state.store.store.savedBy, action.user] : [],
            saved: true,
          },
        },
        stores: state.stores.map((store) => {
          if (store._id === action.store) {
            store.savedBy.push(action.user);
            store.saved = true;
            return store;
          }
          return store;
        }),
      };
    }

    case 'DELETE_SAVED_STORE_SUCCESS': {
      return {
        ...state,
        store: {
          ...state.store,
          store: {
            ...state.store.store,
            savedBy: [],
            saved: false,
          },
        },
        stores: state.stores.map((store) => {
          if (store._id === action.store) {
            const index = store.savedBy.indexOf(action.user);
            store.savedBy.splice(index, 1);
            store.saved = false;
            return store;
          }
          return store;
        }),
      };
    }
    case types.GET_STORES_SUCCESS: {
      return {
        ...state,
        stores: [...state.stores, ...action.payload.stores],
      };
    }
    case types.LATEST_STORES_SUCCESS: {
      return {
        ...state,
        isRefreshing: false,
        stores: [...action.payload, ...state.stores],
      };
    }
    case types.SEARCH_STORES_SUCCESS: {
      return {
        ...state,
        searchTrips: [...state.searchTrips, ...action.payload],
      };
    }
    case types.FILTER_STORES_SUCCESS: {
      return {
        ...state,
        // offset: action.payload.offset + 10,
        searchTrips: [...action.payload.stores],
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
    case types.CLEAR_SEARCH_STORES_SUCCESS: {
      return {
        ...state,
        searchTrips: [],
      };
    }
    case types.GET_MY_STORES_SUCCESS: {
      return {
        ...state,
        offset: action.payload.offset + 10,
        myTrips: [...state.myTrips, ...action.payload.stores],
      };
    }
    case types.GET_MY_ACTIVE_STORES_SUCCESS: {
      return {
        ...state,
        myActiveTrips: [...state.myActiveTrips, ...action.payload.stores],
      };
    }
    case types.GET_STORE_SUCCESS: {
      return {
        ...state,
        store: action.payload,
        myTrips: state.myTrips.map((store) => {
          if (store._id !== action.payload.store._id) {
            return store;
          }
          return {
            ...store,
            ...action.payload.store,
          };
        }),
      };
    }
    case types.DELETE_STORE_SUCCESS: {
      return {
        ...state,
        store: initialState.store,
        myTrips: state.myTrips.filter(store => action.payload !== store._id),
      };
    }
    case types.START_STORE_LOADING: {
      return {
        ...state,
        // isLoading: true,
        isTripLoading: true,
      };
    }

    case types.STOP_STORE_LOADING: {
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

    case types.START_STORE_REFRESHING: {
      return {
        ...state,
        isRefreshing: true,
      };
    }

    case types.NO_STORE_DATA: {
      return {
        ...state,
        searchTrips: [],
      };
    }

    default:
      return state;
  }
}
