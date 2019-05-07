import axios from 'axios';
import url from '../../constants/url';

axios.interceptors.response.use(
  undefined,
  (error) => {
    let err = {};
    if (error.status === 408 || error.code === 'ECONNABORTED') {
      err = { success: false, message: 'Oops. Server down' };
    } else if (error.response && error.response.status === 401) {
      err = { success: false, message: 'Email or Password is incorrect' };
    } else if (error.response && error.response.status === 403) {
      err = {
        success: false,
        message: 'Email already exists',
      };
    }
    return Promise.reject(err);
  },
);

class userApi {
  static getUser = user => axios({
    method: 'GET',
    url: `${url}/users/${user}`,
    timeout: 5 * 1000,
  })
    .then(response => ({ success: true, response }))
    .catch(error => error);

  static registerUser(user) {
    return axios({
      method: 'post',
      url: `${url}/users/register`,
      timeout: 5 * 3000,
      data: user,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static signInUser(user) {
    return axios({
      method: 'post',
      url: `${url}/users/login`,
      timeout: 5 * 1000,
      data: user,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static editProfile(user) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(user)) {
      if (key === 'address') formData.append(key, JSON.stringify(value));
      else formData.append(key, value);
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

  static addBank(bank) {
    return axios({
      method: 'post',
      url: `${url}/users/addBank`,
      timeout: 5 * 1000,
      data: bank,
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

  static makePayment(user, bvn) {
    return axios({
      method: 'post',
      url: `${url}/users/pay`,
      timeout: 5 * 1000,
      data: { user, bvn },
    })
      .then(response => ({ success: true, response }))
      .catch(error => error);
  }
}

export default userApi;
