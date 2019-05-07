import axios from 'axios';
import url from '../../constants/url';

class itemOrderApi {
  static getItemOrders() {
    return axios({
      method: 'get',
      url: `${url}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  // static newItemOrder(itemOrder) {
  //   return axios({
  //     method: 'post',
  //     url: `${url}/itemOrders/new`,
  //     timeout: 5 * 1000,
  //     data: itemOrder
  //   })
  //     .then(function ({data}) {
  //       return {success: true, data};
  //     })
  //     .catch(function (error) {
  //       return error
  //     })
  // }

  static getItemOrder(itemOrder) {
    return axios({
      method: 'get',
      url: `${url}/itemOrders/single/${itemOrder}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getMyItemOrders(user, type) {
    return axios({
      method: 'get',
      url: `${url}/itemOrders/mine/${user}/${type}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  // static editMyItemOrder(itemOrder) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/itemOrders/${itemOrder._id}`,
  //     timeout: 5 * 1000,
  //     data: itemOrder
  //   })
  //     .then(function ({data}) {
  //       return {success: true, data};
  //     })
  //     .catch(function (error) {
  //       return error
  //     })
  // }

  // static deleteItemOrder(itemOrder) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/itemOrders/delete/${itemOrder}`,
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

export default itemOrderApi;
