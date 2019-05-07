import axios from 'axios';
import url from '../../constants/url';

class helperApi {
  // static getUsers() {
  //   return axios.get(url)
  //     .then(function (response) {
  //       return response;
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  // }

  static registerUser(user) {
    return axios({
      method: 'post',
      url: `${url}/users/register`,
      timeout: 5 * 1000,
      data: user,
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static signInUser(user) {
    return axios({
      method: 'post',
      url: `${url}/users/login`,
      timeout: 5 * 1000,
      data: user,
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static editProfile(user) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    if (user.picture) {
      formData.append('image', {
        uri: user.picture, // your file path string
        name: 'my_photo.jpg',
        type: 'image/jpg',
      });
    }
    return axios({
      method: 'put',
      url: `${url}/users/${user._id}`,
      timeout: 5 * 1000,
      data: formData,
      headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static changePassword({ password, email, newPassword }) {
    return axios({
      method: 'put',
      url: `${url}/users/changePassword`,
      timeout: 5 * 1000,
      data: { password, email, newPassword },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static verifyEmail(email) {
    return axios({
      method: 'post',
      url: `${url}/users/verifyEmail`,
      timeout: 5 * 1000,
      data: { email },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static verifyToken(email, token) {
    return axios({
      method: 'post',
      url: `${url}/users/verifyToken`,
      timeout: 5 * 1000,
      data: { email, token },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static verifyBVN(user, bvn) {
    return axios({
      method: 'post',
      url: `${url}/users/verifyBVN`,
      timeout: 5 * 1000,
      data: { user, bvn },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static cardPay(values, user, item) {
    return axios({
      method: 'post',
      url: `${url}/finance/pay`,
      timeout: 5 * 2000,
      data: { values, user, item },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static payValidate(token, ref, item) {
    return axios({
      method: 'post',
      url: `${url}/finance/validatePay`,
      timeout: 5 * 2000,
      data: { token, ref, item },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }

  static sendFeedback(feedback) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(feedback)) {
      formData.append(key, value);
    }

    if (feedback.picture) {
      formData.append('image', {
        uri: feedback.picture, // your file path string
        name: 'my_photo.jpg',
        type: 'image/jpg',
      });
    }

    return axios({
      method: 'post',
      url: `${url}/helper/feedback`,
      timeout: 5 * 2000,
      data: formData,
      headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }
}

export default helperApi;
