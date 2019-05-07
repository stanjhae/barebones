import axios from 'axios';
import url from '../../constants/url';

class tripApi {
  static getTrips(offset) {
    return axios({
      method: 'get',
      url: `${url}/trips/${offset}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static searchTrips(query, offset) {
    return axios({
      method: 'get',
      url: `${url}/trips/search/${query}/${offset}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static filterTrips(query) {
    return axios({
      method: 'get',
      url: `${url}/trips/filter/${JSON.stringify(query)}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static newTrip(trip) {
    return axios({
      method: 'post',
      url: `${url}/trips/new`,
      timeout: 5 * 1000,
      data: trip,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getTrip(trip) {
    return axios({
      method: 'get',
      url: `${url}/trips/trip/${trip}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getMyTrips(user, offset, status) {
    return axios({
      method: 'get',
      url: `${url}/trips/myTrips/${user}/${offset}/${status}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static editMyTrip(trip) {
    return axios({
      method: 'put',
      url: `${url}/trips/${trip._id}`,
      timeout: 5 * 1000,
      data: trip,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  // static deleteTrip(trip) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/trips/delete/${trip}`,
  //     timeout: 5 * 1000,
  //   })
  //     .then(function ({data}) {
  //       return {success: true, data};
  //     })
  //     .catch(function (error) {
  //       return error
  //     })
  // }
  static saveTrip(user, trip) {
    return axios({
      method: 'put',
      url: `${url}/trips/save/${trip}`,
      timeout: 5 * 1000,
      data: { user },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static deleteSavedTrip(user, trip) {
    return axios({
      method: 'put',
      url: `${url}/trips/deleteSave/${trip}`,
      timeout: 5 * 1000,
      data: { user },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getLatestTrips(lastTrip) {
    return axios({
      method: 'get',
      url: `${url}/trips/latest/${lastTrip}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static deleteTrip(trip) {
    return axios({
      method: 'put',
      url: `${url}/trips/delete/${trip}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }
}

export default tripApi;
