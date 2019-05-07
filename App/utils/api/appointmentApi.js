import axios from 'axios';
import url from '../../constants/url';

class appointmentApi {
  static getAppointments() {
    return axios({
      method: 'get',
      url: `${url}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static newAppointment(appointment, itemOrder) {
    return axios({
      method: 'post',
      url: `${url}/appointments/new`,
      timeout: 5 * 1000,
      data: Object.assign(appointment, {
        item: itemOrder.item._id,
        trip: itemOrder.trip._id,
        courier: itemOrder.courier,
        client: itemOrder.client,
        itemOrder: itemOrder.itemOrder,
      }),
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getAppointment(appointment) {
    return axios({
      method: 'get',
      url: `${url}/appointments/single/${appointment}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getMyAppointments(user, mode) {
    return axios({
      method: 'get',
      url: `${url}/appointments/mine/${user}/${mode}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static editMyAppointment(appointment) {
    return axios({
      method: 'put',
      url: `${url}/appointments/${appointment._id}`,
      timeout: 5 * 1000,
      data: appointment,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static appointmentStatus(appointment, status) {
    console.log(status);
    return axios({
      method: 'put',
      url: `${url}/appointments/status/${appointment}`,
      timeout: 5 * 1000,
      data: { status },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  // static deleteAppointment(appointment) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/appointments/delete/${appointment}`,
  //     timeout: 5 * 1000,
  //   })
  //     .then(function ({data}) {
  //       return {success: true, data};
  //     })
  //     .catch(function (error) {
  //       return error
  //     })
  // }
}

export default appointmentApi;
