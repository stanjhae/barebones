import * as types from './helper.types';
import initialState from './helper.initial';

export default function helperReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ASYNC_STORAGE_SUCCESS: {
      return {
        ...state,
        asyncStorage: {
          ...state.asyncStorage,
          [action.payload.item]: action.payload.value,
        },
        isLoading: false,
      };
    }
    case types.SAVE_FILTER_SUCCESS: {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload.filter,
          filter: action.payload.flag,
        },
      };
    }
    case types.SAVE_DATE_TIME_SUCCESS: {
      return {
        ...state,
        dateTime: {
          ...state.dateTime,
          [action.payload.item]: action.payload.value,
        },
      };
    }
    case types.SAVE_ITEM_TRIP_SUCCESS: {
      return {
        ...state,
        itemTrip: {
          ...state.itemTrip,
          [action.payload.item]: action.payload.value,
        },
      };
    }
    case types.SAVE_MODE_MAIL_SUCCESS: {
      return {
        ...state,
        modeMail: {
          ...state.modeMail,
          [action.payload.item]: action.payload.value,
        },
      };
    }
    case types.SAVE_ADDRESS_SUCCESS: {
      return {
        ...state,
        appointAddress: {
          ...state.appointAddress,
          [action.payload.item]: action.payload.value,
        },
      };
    }
    case types.COUNTRY_PICKER: {
      return {
        ...state,
        countryPicker: {
          ...state.countryPicker,
          [action.payload.item]: {
            value: action.payload.value,
          },
        },
      };
    }

    case types.STATE_REGION_PICKER: {
      return {
        ...state,
        stateOrRegionPicker: {
          ...state.stateOrRegionPicker,
          [action.payload.item]: {
            value: action.payload.value,
          },
        },
      };
    }

    case 'RESET_FILTER': {
      return {
        ...state,
        filter: initialState.filter,
        countryPicker: initialState.countryPicker,
        stateOrRegionPicker: initialState.stateOrRegionPicker,
      };
    }
    case types.TOGGLE_LOADER: {
      return {
        ...state,
        isLoading: action.payload.status,
        message: action.payload.message,
      };
    }

    case types.TOGGLE_FLASH_MESSAGE: {
      return {
        ...state,
        flashBarVisible: action.payload.status,
        flashErr: action.payload.flashErr,
        flashType: action.payload.flashType,
      };
    }

    default:
      return state;
  }
}
