import axios from 'axios';
import url from '../../constants/url';

class messageApi {
  static initMessage(receiver, sender, type) {
    return axios({
      method: 'post',
      url: `${url}/messages/init`,
      timeout: 5 * 1000,
      data: { receiver, sender, type },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getMyTrips(user) {
    return axios({
      method: 'get',
      url: `${url}/messages/myTrips/${user}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  // static editMyTrip(store) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/messages/${store._id}`,
  //     timeout: 5 * 1000,
  //     data: store
  //   })
  //     .then(function ({data}) {
  //       return {success: true, data};
  //     })
  //     .catch(function (error) {
  //       return error
  //     })
  // }
  //
  // static deleteTrip(store) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/messages/delete/${store}`,
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

export default messageApi;
