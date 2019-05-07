import axios from 'axios';
import url from '../../constants/url';

class itemApi {
  static getItems(offset) {
    return axios({
      method: 'get',
      url: `${url}/items/${offset}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static searchItems(query, offset) {
    return axios({
      method: 'get',
      url: `${url}/items/search/${query}/${offset}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static filterItems(query) {
    return axios({
      method: 'get',
      url: `${url}/items/filter/${query}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static newItem(item) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(item)) {
      if (key === 'category') formData.append(key, JSON.stringify(value));
      else formData.append(key, value);
    }
    if (item.image) {
      formData.append('image', {
        uri: item.image, // your file path string
        name: 'my_photo.jpg',
        type: 'image/jpg',
      });
    }
    return axios({
      method: 'post',
      url: `${url}/items/new`,
      timeout: 10 * 1000,
      data: formData,
      headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static getItem(item) {
    return axios({
      method: 'get',
      url: `${url}/items/item/${item}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static getMyItems(user) {
    return axios({
      method: 'get',
      url: `${url}/items/myItems/${user}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static editMyItem(item) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(item)) {
      if (key === 'category') formData.append(key, JSON.stringify(value));
      else formData.append(key, value);
    }
    if (item.picture) {
      formData.append('image', {
        uri: item.picture, // your file path string
        name: 'my_photo.jpg',
        type: 'image/jpg',
      });
    }
    return axios({
      method: 'put',
      url: `${url}/items/${item._id}`,
      timeout: 5 * 1000,
      data: formData,
      headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static saveItem(user, item) {
    return axios({
      method: 'put',
      url: `${url}/items/save/${item}`,
      timeout: 5 * 1000,
      data: { user },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static deleteSavedItem(user, item) {
    return axios({
      method: 'put',
      url: `${url}/items/deleteSave/${item}`,
      timeout: 5 * 1000,
      data: { user },
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static updateItemLocation(item, location) {
    return axios({
      method: 'put',
      url: `${url}/items/location/${item}`,
      timeout: 5 * 1000,
      data: location,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }

  static deleteItem(item) {
    return axios({
      method: 'put',
      url: `${url}/items/delete/${item}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => ({ success: true, data }))
      .catch(error => error);
  }
}

export default itemApi;
