import axios from 'axios';
import url from '../../constants/url';

class storeApi {
  static getStores(offset) {
    return axios({
      method: 'get',
      url: `${url}/stores/${offset}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static searchStores(query, offset) {
    return axios({
      method: 'get',
      url: `${url}/stores/search/${query}/${offset}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static filterStores(query) {
    return axios({
      method: 'get',
      url: `${url}/stores/filter/${JSON.stringify(query)}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static newStore(store) {
    return axios({
      method: 'post',
      url: `${url}/stores/new`,
      timeout: 5 * 1000,
      data: store,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static getStore(store) {
    return axios({
      method: 'get',
      url: `${url}/stores/store/${store}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getMyStores(user, offset, status) {
    return axios({
      method: 'get',
      url: `${url}/stores/myStores/${user}/${offset}/${status}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static editMyStore(store) {
    return axios({
      method: 'put',
      url: `${url}/stores/${store._id}`,
      timeout: 5 * 1000,
      data: store,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  // static deleteStore(store) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}/stores/delete/${store}`,
  //     timeout: 5 * 1000,
  //   })
  //     .then(function ({data}) {
  //       return {success: true, data};
  //     })
  //     .catch(function (error) {
  //       return error
  //     })
  // }
  static saveStore(user, store) {
    return axios({
      method: 'put',
      url: `${url}/stores/save/${store}`,
      timeout: 5 * 1000,
      data: { user },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static deleteSavedStore(user, store) {
    return axios({
      method: 'put',
      url: `${url}/stores/deleteSave/${store}`,
      timeout: 5 * 1000,
      data: { user },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static getLatestStores(lastStore) {
    return axios({
      method: 'get',
      url: `${url}/stores/latest/${lastStore}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static deleteStore(store) {
    return axios({
      method: 'put',
      url: `${url}/stores/delete/${store}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }
}

export default storeApi;
