import * as types from './appointment.types';
import initialState from './appointment.initial';

export default function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_APPOINTMENT_SUCCESS: {
      const newArray = state.myAppointments.slice();
      newArray.splice(0, 0, action.payload);
      return {
        ...state,
        appointment: action.payload,
        myAppointments: newArray,
      };
    }
    case types.GET_APPOINTMENTS_SUCCESS: {
      return {
        ...state,
        appointments: action.payload,
      };
    }
    case types.GET_MY_APPOINTMENTS_SUCCESS: {
      return {
        ...state,
        myAppointments: action.payload,
      };
    }
    case types.GET_APPOINTMENT_SUCCESS: {
      return {
        ...state,
        appointment: action.payload,
        myAppointments: state.myAppointments.map((appointment) => {
          if (appointment._id !== action.payload._id) {
            return appointment;
          }
          return {
            ...appointment,
            ...action.payload,
          };
        }),
      };
    }
    case types.START_APPOINTMENT_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.STOP_APPOINTMENT_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
