import { Alert } from 'react-native';
import {
  Linking,
  Location,
  Permissions,
} from 'expo';
import { store } from '../../redux/store';
import { sendFeedback as feedback } from '../../redux/helper/helper.actions';
import { getItem, updateItemLocation } from './item.util';
import { getTrip } from './trip.util';

export const sendFeedback = async (values, formikBag = null) => {
  values.user = store.getState().helper.asyncStorage.user.email;
  const result = await store.dispatch(feedback(values));
  formikBag !== null ? formikBag.setSubmitting(false) : null;
  if (!result) {
    Alert.alert('Failed', '');
  } else {
    formikBag !== null ? formikBag.resetForm({}) : null;
  }
};

export const openUrl = async (event, navigation) => {
  const link = await Linking.parse(event.url);
  if (link.queryParams.type === 'courier') getTrip(link.queryParams.item, navigation, link.path, 'clientExploreDetailsLoader');
  else getItem(link.queryParams.item, navigation, link.path, 'courierExploreDetailsLoader');
};

export const getLocation = async (activeTrips) => {
  let location = {};
  const items = activeTrips.filter(trip => trip.status === 'awaiting pick up confirmation');
  if (items) {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      location = await Location.getCurrentPositionAsync({});
      items.map(item => updateItemLocation(item._id, location));
    }
    return {};
  }
  return null;
};

export const changeAllCategory = (storedCategory, category, setFieldValue, check) => {
  if (check) {
    setFieldValue('category', []);
  } else {
    setFieldValue('category', category);
  }
};

export const changeCategory = (storedCategory, category, setFieldValue) => {
  if (storedCategory.includes(category)) {
    setFieldValue('category', storedCategory.filter(cat => cat !== category));
  } else {
    setFieldValue('category', [...storedCategory, category]);
  }
};

export const noCountryAlert = (navigation, type) => {
  Alert.alert(
    'Alert',
    'You have to pick a country first',
    [
      {
        text: 'Cancel',
      },
      {
        text: 'Pick Country',
        onPress: () => navigation.navigate('ChooseCountryScreen', { type }),
      },
    ],
    { cancelable: false },
  );
};
