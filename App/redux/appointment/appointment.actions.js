import * as actions from './appointment.creators';
import appointmentApi from '../../utils/api/appointmentApi';

export const newAppointment = (appointment, itemOrder) => async (dispatch) => {
  const result = await appointmentApi.newAppointment(appointment, itemOrder);
  if (!result.success) {
    return false;
  }
  dispatch(actions.createAppointmentSuccess(result.data));
  return true;
};

export const getAppointment = appointment => async (dispatch) => {
  dispatch(actions.stopLoading());
  const result = await appointmentApi.getAppointment(appointment);
  if (!result) {
    return false;
  }
  dispatch(actions.getAppointmentSuccess(result.data));
  dispatch(actions.startLoading());
  return true;
};

export function getMyAppointments(user, mode) {
  return function (dispatch) {
    return appointmentApi.getMyAppointments(user, mode).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      dispatch(actions.getMyAppointmentsSuccess(res.data));
      return { success: true };
    });
  };
}

export function editMyAppointment(appointment) {
  return function (dispatch) {
    return appointmentApi.editMyAppointment(appointment).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      dispatch(actions.getAppointmentSuccess(res.data));
      return { success: true };
    });
  };
}

export function appointmentStatus(appointment, status) {
  return function (dispatch) {
    return appointmentApi.appointmentStatus(appointment, status).then((res) => {
      if (!res.success) {
        return { success: res.success, message: res.message };
      }
      dispatch(actions.getAppointmentSuccess(res.data));
      return { success: true };
    });
  };
}

// export function deleteAppointment(appointment) {
//   return function (dispatch) {
//     return appointmentApi.deleteAppointment(appointment).then((res) =>{
//       if(!res.success) {
//         return {success:res.success, message:res.message}
//       }else{
//         dispatch(actions.deleteAppointmentSuccess(res.data.message, appointment));
//         return {success:true}
//       }
//     })
//   };
// }
