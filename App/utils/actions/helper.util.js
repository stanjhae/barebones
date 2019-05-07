// import { Alert } from 'react-native';
import {
  // Linking,
  // Location,
  // Permissions,
  Facebook,
} from 'expo';
// import { store } from '../../redux/store';
// import { sendFeedback as feedback } from '../../redux/helper/helper.actions';
// import { getItem, updateItemLocation } from './item.util';
// import { getTrip } from './store.util';
import { login } from './user.util';
import facebook from '../../constants/Facebook';

export const facebookLogin = async (navigation) => {
  const user = {};
  try {
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync(facebook, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/v3.2/me?fields=first_name,last_name,email&access_token=${token}`);
      const facebookUser = await response.json();

      user.firstName = facebookUser.first_name;
      user.lastName = facebookUser.last_name;
      user.email = facebookUser.email;
      user.password = '';
      user.provider = 'facebook';
      await login(user, navigation);
      // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    // alert(`Facebook Login Error: ${message}`);
  }
};

// export const sendFeedback = async (values, formikBag = null) => {
//   values.user = store.getState().helper.asyncStorage.user.email;
//   const result = await store.dispatch(feedback(values));
//   formikBag !== null ? formikBag.setSubmitting(false) : null;
//   if (!result) {
//     Alert.alert('Failed', '');
//   } else {
//     formikBag !== null ? formikBag.resetForm({}) : null;
//   }
// };
//
// export const openUrl = async (event, navigation) => {
//   const link = await Linking.parse(event.url);
//   if (link.queryParams.type === 'courier') getTrip(link.queryParams.item, navigation, link.path, 'clientExploreDetailsLoader');
//   else getItem(link.queryParams.item, navigation, link.path, 'courierExploreDetailsLoader');
// };
