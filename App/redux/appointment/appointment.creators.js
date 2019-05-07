import * as types from './appointment.types';

export function createAppointmentSuccess(appointment) {
  return { type: appointment.message, payload: appointment.result };
}

export function getAppointmentsSuccess(appointments) {
  return { type: appointments.message, payload: appointments.result };
}

export function getMyAppointmentsSuccess(appointments) {
  return { type: appointments.message, payload: appointments.result };
}

export function getAppointmentSuccess(appointment) {
  return { type: appointment.message, payload: appointment.result };
}

export const startLoading = () => ({ type: types.START_APPOINTMENT_LOADING });

export const stopLoading = () => ({ type: types.STOP_APPOINTMENT_LOADING });
